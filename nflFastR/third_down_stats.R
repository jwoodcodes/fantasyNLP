# R Script to Build and Analyze Down-by-Down Performance Across Multiple Seasons
# This script uses nflfastR to get play-by-play and roster data for multiple seasons.

# --- 1. Setup: Install and Load Packages ---

# Set CRAN mirror
options(repos = c(CRAN = "https://cloud.r-project.org"))

# This ensures the most recent nflfastR and nflreadr packages are installed
# directly from the nflverse repository, which is more up-to-date than CRAN.
install.packages("nflfastR", repos = c("https://nflverse.r-universe.dev", getOption("repos")))
install.packages("nflreadr", repos = c("https://nflverse.r-universe.dev", getOption("repos")))

# Install other required packages if they are not already present
other_packages <- c("dplyr", "tidyr", "purrr", "readr", "jsonlite")
new_packages <- other_packages[!(other_packages %in% installed.packages()["Package"])]
if(length(new_packages)) install.packages(new_packages)

# Load libraries
library(nflfastR)
library(nflreadr)
library(dplyr)
library(tidyr)
library(purrr)
library(readr)
library(jsonlite)

cat("STEP 1: Loading and processing data for multiple seasons...\n")

# --- 2. Sanitization Function ---
sanitize_player_name <- function(name) {
  if (is.na(name) || is.null(name)) {
    return("")
  }
  name <- tolower(name)
  name <- gsub("[-.']", "", name, perl = TRUE) # Corrected regex
  name <- gsub("\\b(iii|ii|jr)\\b", "", name, perl = TRUE)
  name <- trimws(name)
  return(name)
}


# --- 3. Data Processing Function ---

get_down_stats <- function(pbp_data, down_num) {
  pbp_down <- pbp_data %>%
  filter(down == down_num)

  passing_totals <- pbp_down %>%
  filter(pass_attempt == 1, !is.na(passer_player_id)) %>% group_by(player_id = passer_player_id) %>% summarise(attempts = n(), completions = sum(complete_pass, na.rm = TRUE), passing_yards = sum(passing_yards, na.rm = TRUE), passing_first_downs = sum(first_down_pass, na.rm = TRUE))
  rushing_totals <- pbp_down %>%
  filter(rush_attempt == 1, !is.na(rusher_player_id)) %>% group_by(player_id = rusher_player_id) %>% summarise(carries = n(), rushing_yards = sum(rushing_yards, na.rm = TRUE))
  receiving_totals <- pbp_down %>%
  filter(pass_attempt == 1, !is.na(receiver_player_id)) %>% group_by(player_id = receiver_player_id) %>% summarise(targets = n(), receptions = sum(complete_pass, na.rm = TRUE), receiving_yards = sum(receiving_yards, na.rm = TRUE))

  final_stats <- full_join(passing_totals, rushing_totals, by = c("player_id")) %>%
  full_join(receiving_totals, by = c("player_id"))
  final_stats <- final_stats %>%
  mutate(across(where(is.numeric), ~ifelse(is.na(.), 0, .)))

  player_info <- bind_rows(pbp_down %>%
  filter(!is.na(passer_player_id)) %>% select(player_id = passer_player_id, position = passer_position, team = posteam),
  pbp_down %>% filter(!is.na(rusher_player_id)) %>% select(player_id = rusher_player_id, position = rusher_position, team = posteam),
  pbp_down %>% filter(!is.na(receiver_player_id)) %>% select(player_id = receiver_player_id, position = receiver_position, team = posteam)
  ) %>%
  filter(!is.na(player_id), !is.na(position), !is.na(team)) %>% group_by(player_id) %>% summarise(position = first(position), team = last(team))
  final_stats <- left_join(final_stats, player_info, by = "player_id") %>%
  select(player_id, everything())

  player_games <- bind_rows(pbp_down %>%
  filter(!is.na(passer_player_id)) %>% select(player_id = passer_player_id, game_id, team = posteam),
  pbp_down %>% filter(!is.na(rusher_player_id)) %>% select(player_id = rusher_player_id, game_id, team = posteam),
  pbp_down %>% filter(!is.na(receiver_player_id)) %>% select(player_id = receiver_player_id, game_id, team = posteam)
  ) %>% filter(!is.na(player_id)) %>% distinct(player_id, game_id, team)
  
  team_game_totals <- pbp_down %>%
    group_by(game_id, team = posteam) %>%
    summarise(
      team_carries_in_game = sum(rush_attempt == 1, na.rm = TRUE),
      team_targets_in_game = sum(pass_attempt == 1, na.rm = TRUE),
      team_receptions_in_game = sum(complete_pass, na.rm = TRUE),
      team_rush_fd_in_game = sum(first_down_rush, na.rm = TRUE),
      team_rec_fd_in_game = sum(first_down_pass, na.rm = TRUE),
      .groups = 'drop'
    )

  player_specific_team_totals <- left_join(final_stats, team_game_totals, by = c("game_id", "team")) %>%
  group_by(player_id) %>% summarise(
    team_carries_in_played_games = sum(team_carries_in_game, na.rm = TRUE),
    team_targets_in_played_games = sum(team_targets_in_game, na.rm = TRUE),
    team_receptions_in_played_games = sum(team_receptions_in_game, na.rm = TRUE),
    team_rush_fd_in_played_games = sum(team_rush_fd_in_game, na.rm = TRUE),
    team_rec_fd_in_played_games = sum(team_rec_fd_in_game, na.rm = TRUE),
    games_played = n_distinct(game_id),
    .groups = 'drop'
  )
  final_stats <- left_join(final_stats, player_specific_team_totals, by = "player_id")

  team_totals_all_games <- pbp_down %>% group_by(team = posteam) %>% summarise(team_carries_all_games = sum(rush_attempt == 1, na.rm = TRUE), team_targets_all_games = sum(pass_attempt == 1, na.rm = TRUE), team_receptions_all_games = sum(complete_pass, na.rm = TRUE), .groups = 'drop')
  final_stats <- left_join(final_stats, team_totals_all_games, by = "team")

  final_stats <- final_stats %>% mutate(yards_per_target = ifelse(targets > 0, receiving_yards / targets, 0), yards_per_reception = ifelse(receptions > 0, receiving_yards / receptions, 0), pass_attempts_per_game = attempts / games_played, completions_per_game = completions / games_played, rushing_yards_per_game = rushing_yards / games_played, targets_per_game = targets / games_played, receptions_per_game = receptions / games_played, receiving_yards_per_game = receiving_yards / games_played)

  return(final_stats)
}

all_seasons_data_flat <- tibble()
all_seasons_team_data_flat <- tibble()

for (year in 2017:2024) {
  cat(paste0("Processing data for ", year, " season...\n"))
  pbp_data <- nflfastR::load_pbp(year) %>%
    filter(season_type == "REG")
  rosters_data <- nflreadr::load_rosters(year)

  # Join position data directly to pbp_data
  pbp_data <- pbp_data %>%
    left_join(rosters_data %>% select(gsis_id, position), by = c("passer_player_id" = "gsis_id")) %>%
    rename(passer_position = position) %>%
    left_join(rosters_data %>% select(gsis_id, position), by = c("rusher_player_id" = "gsis_id")) %>%
    rename(rusher_position = position) %>%
    left_join(rosters_data %>% select(gsis_id, position), by = c("receiver_player_id" = "gsis_id")) %>%
    rename(receiver_position = position)

  # --- Aggregate weekly stats to season totals ---
  # Load weekly player stats directly from nflreadr
  weekly_player_stats <- nflreadr::load_player_stats(year, "offense") %>%
    filter(season_type == "REG") %>%
    # Select and rename columns to match the structure expected by subsequent steps
    select(
      player_id, player_name, week, season, completions, attempts, passing_yards,
      passing_tds, interceptions, sacks, sack_yards, passing_air_yards,
      passing_yards_after_catch, passing_first_downs, passing_epa, pacr,
      carries, rushing_yards, rushing_tds, rushing_fumbles, rushing_first_downs,
      rushing_epa, receptions, targets, receiving_yards, receiving_tds,
      receiving_air_yards, receiving_yards_after_catch, receiving_first_downs,
      racr, target_share, air_yards_share, wopr,
      fantasy_points, fantasy_points_ppr
    )

  season_player_stats <- weekly_player_stats %>%
    group_by(player_id) %>%
    summarise(
      completions_total = sum(completions, na.rm = TRUE),
      attempts_total = sum(attempts, na.rm = TRUE),
      passing_yards_total = sum(passing_yards, na.rm = TRUE),
      passing_tds_total = sum(passing_tds, na.rm = TRUE),
      interceptions_total = sum(interceptions, na.rm = TRUE),
      sacks_total = sum(sacks, na.rm = TRUE),
      passing_air_yards_total = sum(passing_air_yards, na.rm = TRUE),
      passing_yards_after_catch_total = sum(passing_yards_after_catch, na.rm = TRUE),
      passing_epa_total = sum(passing_epa, na.rm = TRUE),
      pacr_total = sum(pacr, na.rm = TRUE),
      carries_total = sum(carries, na.rm = TRUE),
      rushing_yards_total = sum(rushing_yards, na.rm = TRUE),
      rushing_tds_total = sum(rushing_tds, na.rm = TRUE),
      rushing_fumbles_total = sum(rushing_fumbles, na.rm = TRUE),
      rushing_first_downs_total = sum(rushing_first_downs, na.rm = TRUE),
      rushing_epa_total = sum(rushing_epa, na.rm = TRUE),
      receptions_total = sum(receptions, na.rm = TRUE),
      targets_total = sum(targets, na.rm = TRUE),
      receiving_yards_total = sum(receiving_yards, na.rm = TRUE),
      receiving_tds_total = sum(receiving_tds, na.rm = TRUE),
      receiving_air_yards_total = sum(receiving_air_yards, na.rm = TRUE),
      receiving_yards_after_catch_total = sum(receiving_yards_after_catch, na.rm = TRUE),
      receiving_first_downs_total = sum(receiving_first_downs, na.rm = TRUE),
      racr_total = sum(racr, na.rm = TRUE),
      target_share_total = sum(target_share, na.rm = TRUE),
      air_yards_share_total = sum(air_yards_share, na.rm = TRUE),
      wopr_total = sum(wopr, na.rm = TRUE),
      fantasy_points_total = sum(fantasy_points, na.rm = TRUE),
      fantasy_points_ppr_total = sum(fantasy_points_ppr, na.rm = TRUE),
      games_played = n(),
      .groups = 'drop'
    ) %>%
    mutate(
      completions_avg = completions_total / games_played,
      attempts_avg = attempts_total / games_played,
      passing_yards_avg = passing_yards_total / games_played,
      passing_tds_avg = passing_tds_total / games_played,
      interceptions_avg = interceptions_total / games_played,
      sacks_avg = sacks_total / games_played,
      passing_air_yards_avg = passing_air_yards_total / games_played,
      passing_yards_after_catch_avg = passing_yards_after_catch_total / games_played,
      passing_epa_avg = passing_epa_total / games_played, 
      pacr_avg = pacr_total / games_played, 
      carries_avg = carries_total / games_played,
      rushing_yards_avg = rushing_yards_total / games_played,
      rushing_tds_avg = rushing_tds_total / games_played,
      rushing_fumbles_avg = rushing_fumbles_total / games_played,
      rushing_first_downs_avg = rushing_first_downs_total / games_played,
      rushing_epa_avg = rushing_epa_total / games_played, 
      receptions_avg = receptions_total / games_played,
      targets_avg = targets_total / games_played,
      receiving_yards_avg = receiving_yards_total / games_played,
      receiving_tds_avg = receiving_tds_total / games_played,
      receiving_air_yards_avg = receiving_air_yards_total / games_played,
      receiving_yards_after_catch_avg = receiving_yards_after_catch_total / games_played,
      receiving_first_downs_avg = receiving_first_downs_total / games_played, 
      racr_avg = racr_total / games_played, 
      target_share_avg = target_share_total / games_played, 
      air_yards_share_avg = air_yards_share_total / games_played, 
      wopr_avg = wopr_total / games_played, 
      fantasy_points_avg = fantasy_points_total / games_played,
      fantasy_points_ppr_avg = fantasy_points_ppr_total / games_played
    )
  season_player_stats$season <- year
  player_info <- rosters_data %>% select(gsis_id, full_name, position) %>% rename(player_id = gsis_id, player_name = full_name)
  season_player_stats <- left_join(season_player_stats, player_info, by = "player_id")

  # --- Add team data to season_player_stats ---
  team_info <- bind_rows(
    pbp_data %>% filter(!is.na(passer_player_id)) %>% select(player_id = passer_player_id, team = posteam),
    pbp_data %>% filter(!is.na(rusher_player_id)) %>% select(player_id = rusher_player_id, team = posteam),
    pbp_data %>% filter(!is.na(receiver_player_id)) %>% select(player_id = receiver_player_id, team = posteam)
  ) %>%
    filter(!is.na(player_id)) %>%
    group_by(player_id) %>% 
    summarise(team = first(team), .groups = 'drop')

  season_player_stats <- left_join(season_player_stats, team_info, by = "player_id")

  # --- Add coach data ---
  coach_data_home <- pbp_data %>%
    group_by(season, team = home_team) %>%
    summarise(
      head_coach = first(home_coach),
      .groups = 'drop'
    )

  coach_data_away <- pbp_data %>%
    group_by(season, team = away_team) %>%
    summarise(
      head_coach = first(away_coach),
      .groups = 'drop'
    )

  coach_data <- bind_rows(coach_data_home, coach_data_away) %>%
    distinct(season, team, .keep_all = TRUE)

  season_player_stats <- left_join(season_player_stats, coach_data, by = c("season", "team"))
}

# --- Save Final Aggregated Stats ---
cat("STEP 6: Saving the final aggregated stats to CSV...\n")

final_player_stats_output_file <- "final_player_seasons.csv"
all_seasons_data_flat <- all_seasons_data_flat %>%
  mutate(across(where(is.numeric), ~replace_na(., 0))) %>%
  mutate(across(where(is.numeric), ~round(., 3))) %>%
  # Remove unwanted _total columns
  select(-c(passing_epa_total, pacr_total, rushing_epa_total, racr_total, target_share_total, air_yards_share_total, wopr_total)) %>%
  # Reorder columns to have player_id, player_name, season at the beginning
  select(player_id, player_name, season, team, position, head_coach, everything()) %>%
  select(-starts_with("sanitized_player_name")) # Remove any temporary sanitized name columns

write_csv(all_seasons_data_flat, final_player_stats_output_file)

final_team_stats_output_file <- "final_team_seasons.csv"
all_seasons_team_data_flat <- all_seasons_team_data_flat %>%
  mutate(across(where(is.numeric), ~round(., 3)))
write_csv(all_seasons_team_data_flat, final_team_stats_output_file)


cat("\nScript finished successfully!\n")
cat(paste("Final aggregated player stats saved to:", file.path(getwd(), final_player_stats_output_file), "\n"))
cat(paste("Final aggregated team stats saved to:", file.path(getwd(), final_team_stats_output_file), "\n"))


# --- Log last 10 entries ---
cat("\nLast 10 entries of the final player data:\n")
print(tail(all_seasons_data_flat, 10))