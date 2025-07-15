# R Script to Build Enhanced PBP Data and Analyze 3rd Down Performance
# This script integrates play-by-play, participation, and coverage data for the 2024 season.
# Version 3: Forces installation of latest nflverse packages to resolve function errors.

# --- 1. Setup: Install and Load Packages ---

# The 'load_pbp_coverage' function is in the latest versions of nflreadr.
# This ensures the most recent nflreadr and nflfastR packages are installed
# directly from the nflverse repository, which is more up-to-date than CRAN.
install.packages("nflreadr", repos = c("https://nflverse.r-universe.dev", getOption("repos"))), ask = "N"
install.packages("nflfastR", repos = c("https://nflverse.r-universe.dev", getOption("repos")))

# Install other required packages if they are not already present
other_packages <- c("dplyr", "tidyr", "purrr", "readr")
new_packages <- other_packages[!(other_packages %in% installed.packages()[,"Package"])]
if(length(new_packages)) install.packages(new_packages)

# Load libraries
library(nflfastR)
library(nflreadr)
library(dplyr)
library(tidyr)
library(purrr)
library(readr)

cat("STEP 1: Loading all necessary 2024 data...\n")
nflreadr::.clear_cache() # Clear nflreadr cache

# --- 2. Data Loading (Week-by-Week) ---

# Define the weeks for the 2024 season (1-18 for regular, 19-22 for postseason)
weeks_2024 <- 1:18 # Using 2023 regular season weeks for testing

# Safely create a function that will return NULL if a week's data is not found
safe_load_participation <- possibly(nflreadr::load_participation, otherwise = NULL)
participation_2024 <- map_dfr(weeks_2024, ~safe_load_participation(season = 2024, week = .x))

# Check if participation_2024 is empty
if (is.null(participation_2024) || nrow(participation_2024) == 0) {
  stop("No participation data loaded for 2024. Please check nflreadr data availability or your internet connection.")
}
print(colnames(participation_2024))
participation_2024 <- participation_2024 %>% rename(player_id = gsis_id) # Rename gsis_id to player_id for joining

# Load pbp and roster data (these are typically available as full season files)
pbp_2024 <- nflfastR::load_pbp(2023)
rosters_2024 <- nflreadr::load_rosters(2024)

cat("STEP 2: Preparing participation data...\n")

# --- 3. Data Preparation and Enhancement ---

# Select relevant columns from rosters to get player positions
player_positions <- rosters_2024 %>% 
  select(player_id = gsis_id, position)

# Process participation data to identify on-field players and route runners
participation_summary <- participation_2024 %>%
  left_join(player_positions, by = "player_id") %>%
  filter(position %in% c("QB", "RB", "WR", "TE")) %>%
  group_by(nflverse_play_id) %>% 
  summarise(
    # Create a comma-separated string of players on the field
    offensive_players_on_field = paste(player_name, collapse, ", "),
    # Create a comma-separated string of players who ran a route
    route_runners = paste(player_name[route == 1], collapse, ", "),
    .groups = 'drop'
  )

cat("STEP 3: Joining datasets to create the enhanced play-by-play data...\n")

# Join all datasets together
enhanced_pbp_2024 <- pbp_2024 %>% 
  # Filter for non-special teams plays
  filter(play_type %in% c('pass', 'run')) %>% 
  # Join participation summary
  left_join(participation_summary, by = "nflverse_play_id") %>% 
  # Join coverage data
  left_join(participation_2024 %>% select(nflverse_play_id, defense_coverage_type), by = "nflverse_play_id") %>% rename(coverage_scheme = defense_coverage_type)

# --- 4. Save Enhanced PBP Dataset ---

cat("STEP 4: Saving the enhanced play-by-play dataset to CSV...\n")

enhanced_pbp_output_file <- "enhanced_2024_pbp_data.csv"
write_csv(enhanced_pbp_2024, enhanced_pbp_output_file)

cat(paste("Enhanced PBP data saved to:", file.path(getwd(), enhanced_pbp_output_file), "\n"))

# --- 5. 3rd Down Analysis ---

cat("STEP 5: Starting 3rd down analysis using the new dataset...\n")

# Filter for only 3rd down plays from the enhanced dataset
pbp_2024_3rd <- enhanced_pbp_2024 %>% 
  filter(down == 3)

# --- Calculate Individual Player Total Stats ---
passing_totals <- pbp_2024_3rd %>% filter(pass_attempt == 1, !is.na(passer_player_id)) %>% group_by(player_id = passer_player_id, player_name = passer_player_name) %>% summarise(third_down_attempts = n(), third_down_completions = sum(complete_pass, na.rm = TRUE), third_down_passing_yards = sum(passing_yards, na.rm = TRUE), third_down_passing_tds = sum(pass_touchdown, na.rm = TRUE), third_down_interceptions = sum(interception, na.rm = TRUE), third_down_sacks_taken = sum(sack, na.rm = TRUE), third_down_passing_first_downs = sum(first_down_pass, na.rm = TRUE))
rushing_totals <- pbp_2024_3rd %>% filter(rush_attempt == 1, !is.na(rusher_player_id)) %>% group_by(player_id = rusher_player_id, player_name = rusher_player_name) %>% summarise(third_down_carries = n(), third_down_rushing_yards = sum(rushing_yards, na.rm = TRUE), third_down_rushing_tds = sum(rush_touchdown, na.rm = TRUE), third_down_fumbles = sum(fumble_lost, na.rm = TRUE), third_down_rushing_first_downs = sum(first_down_rush, na.rm = TRUE))
receiving_totals <- pbp_2024_3rd %>% filter(pass_attempt == 1, !is.na(receiver_player_id)) %>% group_by(player_id = receiver_player_id, player_name = receiver_player_name) %>% summarise(third_down_targets = n(), third_down_receptions = sum(complete_pass, na.rm = TRUE), third_down_receiving_yards = sum(receiving_yards, na.rm = TRUE), third_down_receiving_tds = sum(pass_touchdown, na.rm = TRUE), third_down_receiving_first_downs = sum(first_down_pass, na.rm = TRUE))

# --- Combine Datasets ---
final_stats <- full_join(passing_totals, rushing_totals, by = c("player_id", "player_name")) %>% full_join(receiving_totals, by = c("player_id", "player_name"))
final_stats <- final_stats %>% mutate(across(where(is.numeric), ~ifelse(is.na(.), 0, .)))
final_stats <- final_stats %>% mutate(total_third_down_first_downs = third_down_passing_first_downs + third_down_rushing_first_downs + third_down_receiving_first_downs)

# --- Get Player Info (Position and Team) ---
player_info <- bind_rows(pbp_2024_3rd %>% filter(!is.na(passer_player_id)) %>% select(player_id = passer_player_id, position, team = posteam), pbp_2024_3rd %>% filter(!is.na(rusher_player_id)) %>% select(player_id = rusher_player_id, position, team = posteam), pbp_2024_3rd %>% filter(!is.na(receiver_player_id)) %>% select(player_id = receiver_player_id, position, team = posteam)) %>% filter(!is.na(player_id), !is.na(position), !is.na(team)) %>% group_by(player_id) %>% summarise(position = first(position), team = last(team))
final_stats <- left_join(final_stats, player_info, by = "player_id") %>% select(player_id, player_name, position, team, everything())

# --- Calculate Team Totals in Games Played by Each Player ---
player_games <- bind_rows(pbp_2024_3rd %>% filter(!is.na(passer_player_id)) %>% select(player_id = passer_player_id, game_id, team = posteam), pbp_2024_3rd %>% filter(!is.na(rusher_player_id)) %>% select(player_id = rusher_player_id, game_id, team = posteam), pbp_2024_3rd %>% filter(!is.na(receiver_player_id)) %>% select(player_id = receiver_player_id, game_id, team = posteam)) %>% filter(!is.na(player_id)) %>% distinct(player_id, game_id, team)
team_game_totals <- pbp_2024_3rd %>% group_by(game_id, team = posteam) %>% summarise(team_carries_in_game = sum(rush_attempt == 1, na.rm = TRUE), team_targets_in_game = sum(pass_attempt == 1, na.rm = TRUE), team_receptions_in_game = sum(complete_pass, na.rm = TRUE), team_rush_fd_in_game = sum(first_down_rush, na.rm = TRUE), team_rec_fd_in_game = sum(first_down_pass, na.rm = TRUE), .groups = 'drop')
player_specific_team_totals <- left_join(player_games, team_game_totals, by = c("game_id", "team")) %>% group_by(player_id) %>% summarise(team_carries_in_played_games = sum(team_carries_in_game, na.rm = TRUE), team_targets_in_played_games = sum(team_targets_in_game, na.rm = TRUE), team_receptions_in_played_games = sum(team_receptions_in_game, na.rm = TRUE), team_rush_fd_in_played_games = sum(team_rush_fd_in_game, na.rm = TRUE), team_rec_fd_in_played_games = sum(team_rec_fd_in_game, na.rm = TRUE), games_played_on_3rd_down = n_distinct(game_id), .groups = 'drop')
final_stats <- left_join(final_stats, player_specific_team_totals, by = "player_id")

# --- Calculate Percentages and Averages ---
final_stats <- final_stats %>% mutate(pct_team_carries = ifelse(team_carries_in_played_games > 0, third_down_carries / team_carries_in_played_games, 0), pct_team_targets = ifelse(team_targets_in_played_games > 0, third_down_targets / team_targets_in_played_games, 0), pct_team_receptions = ifelse(team_receptions_in_played_games > 0, third_down_receptions / team_receptions_in_played_games, 0), pct_team_rush_fd = ifelse(team_rush_fd_in_played_games > 0, third_down_rushing_first_downs / team_rush_fd_in_played_games, 0), pct_team_rec_fd = ifelse(team_rec_fd_in_played_games > 0, third_down_receiving_first_downs / team_rec_fd_in_played_games, 0), yards_per_pass_attempt = ifelse(third_down_attempts > 0, third_down_passing_yards / third_down_attempts, 0), yards_per_completion = ifelse(third_down_completions > 0, third_down_passing_yards / third_down_completions, 0), yards_per_carry = ifelse(third_down_carries > 0, third_down_rushing_yards / third_down_carries, 0), yards_per_target = ifelse(third_down_targets > 0, third_down_receiving_yards / third_down_targets, 0), yards_per_reception = ifelse(third_down_receptions > 0, third_down_receiving_yards / third_down_receptions, 0), pass_attempts_per_game = third_down_attempts / games_played_on_3rd_down, completions_per_game = third_down_completions / games_played_on_3rd_down, passing_yards_per_game = third_down_passing_yards / games_played_on_3rd_down, passing_first_downs_per_game = third_down_passing_first_downs / games_played_on_3rd_down, carries_per_game = third_down_carries / games_played_on_3rd_down, rushing_yards_per_game = third_down_rushing_yards / third_down_carries, rushing_first_downs_per_game = third_down_rushing_first_downs / games_played_on_3rd_down, targets_per_game = third_down_targets / games_played_on_3rd_down, receptions_per_game = third_down_receptions / games_played_on_3rd_down, receiving_yards_per_game = third_down_receiving_yards / games_played_on_3rd_down, receiving_first_downs_per_game = third_down_receiving_first_downs / games_played_on_3rd_down, total_first_downs_per_game = total_third_down_first_downs / games_played_on_3rd_down) %>% mutate(across(where(is.numeric), ~round(., 2)))

# --- 6. Save Final Aggregated Stats ---

cat("STEP 6: Saving the final aggregated 3rd down stats to CSV...\n")

final_stats_output_file <- "2024_third_down_offensive_stats_enhanced.csv"
write_csv(final_stats, final_stats_output_file)

cat("\nScript finished successfully!\n")
cat(paste("Final aggregated stats saved to:", file.path(getwd(), final_stats_output_file), "\n"))
