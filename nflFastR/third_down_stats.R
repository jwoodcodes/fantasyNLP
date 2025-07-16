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
new_packages <- other_packages[!(other_packages %in% installed.packages()[,"Package"])]
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

# --- 2. Data Processing Function ---

get_down_stats <- function(pbp_data, down_num) {
  pbp_down <- pbp_data %>%
  filter(down == down_num)

  passing_totals <- pbp_down %>%
  filter(pass_attempt == 1, !is.na(passer_player_id)) %>% group_by(player_id = passer_player_id, player_name = passer_player_name) %>% summarise(attempts = n(), completions = sum(complete_pass, na.rm = TRUE), passing_yards = sum(passing_yards, na.rm = TRUE), passing_tds = sum(pass_touchdown, na.rm = TRUE), interceptions = sum(interception, na.rm = TRUE), sacks_taken = sum(sack, na.rm = TRUE), passing_first_downs = sum(first_down_pass, na.rm = TRUE))
  rushing_totals <- pbp_down %>%
  filter(rush_attempt == 1, !is.na(rusher_player_id)) %>% group_by(player_id = rusher_player_id, player_name = rusher_player_name) %>% summarise(carries = n(), rushing_yards = sum(rushing_yards, na.rm = TRUE), rushing_tds = sum(rush_touchdown, na.rm = TRUE), fumbles = sum(fumble_lost, na.rm = TRUE), rushing_first_downs = sum(first_down_rush, na.rm = TRUE))
  receiving_totals <- pbp_down %>%
  filter(pass_attempt == 1, !is.na(receiver_player_id)) %>% group_by(player_id = receiver_player_id, player_name = receiver_player_name) %>% summarise(targets = n(), receptions = sum(complete_pass, na.rm = TRUE), receiving_yards = sum(receiving_yards, na.rm = TRUE), receiving_tds = sum(pass_touchdown, na.rm = TRUE), receiving_first_downs = sum(first_down_pass, na.rm = TRUE))

  final_stats <- full_join(passing_totals, rushing_totals, by = c("player_id", "player_name")) %>%
  full_join(receiving_totals, by = c("player_id", "player_name"))
  final_stats <- final_stats %>%
  mutate(across(where(is.numeric), ~ifelse(is.na(.), 0, .)))
  final_stats <- final_stats %>%
  mutate(total_first_downs = passing_first_downs + rushing_first_downs + receiving_first_downs)

  player_info <- bind_rows(pbp_down %>%
  filter(!is.na(passer_player_id)) %>% select(player_id = passer_player_id, position = passer_position, team = posteam),
  pbp_down %>% filter(!is.na(rusher_player_id)) %>% select(player_id = rusher_player_id, position = rusher_position, team = posteam),
  pbp_down %>% filter(!is.na(receiver_player_id)) %>% select(player_id = receiver_player_id, position = receiver_position, team = posteam)
  ) %>%
  filter(!is.na(player_id), !is.na(position), !is.na(team)) %>% group_by(player_id) %>% summarise(position = first(position), team = last(team))
  final_stats <- left_join(final_stats, player_info, by = "player_id") %>%
  select(player_id, player_name, position, team, everything())

  player_games <- bind_rows(pbp_down %>%
  filter(!is.na(passer_player_id)) %>% select(player_id = passer_player_id, game_id, team = posteam),
  pbp_down %>% filter(!is.na(rusher_player_id)) %>% select(player_id = rusher_player_id, game_id, team = posteam),
  pbp_down %>% filter(!is.na(receiver_player_id)) %>% select(player_id = receiver_player_id, game_id, team = posteam)
  ) %>% filter(!is.na(player_id)) %>% distinct(player_id, game_id, team)
  team_game_totals <- pbp_down %>% group_by(game_id, team = posteam) %>% summarise(team_carries_in_game = sum(rush_attempt == 1, na.rm = TRUE), team_targets_in_game = sum(pass_attempt == 1, na.rm = TRUE), team_receptions_in_game = sum(complete_pass, na.rm = TRUE), team_rush_fd_in_game = sum(first_down_rush, na.rm = TRUE), team_rec_fd_in_game = sum(first_down_pass, na.rm = TRUE), .groups = 'drop')
  player_specific_team_totals <- left_join(player_games, team_game_totals, by = c("game_id", "team")) %>%
  group_by(player_id) %>% summarise(team_carries_in_played_games = sum(team_carries_in_game, na.rm = TRUE), team_targets_in_played_games = sum(team_targets_in_game, na.rm = TRUE), team_receptions_in_played_games = sum(team_receptions_in_game, na.rm = TRUE), team_rush_fd_in_played_games = sum(team_rush_fd_in_game, na.rm = TRUE), team_rec_fd_in_played_games = sum(team_rec_fd_in_game, na.rm = TRUE), games_played = n_distinct(game_id), .groups = 'drop')
  final_stats <- left_join(final_stats, player_specific_team_totals, by = "player_id")

  team_totals_all_games <- pbp_down %>% group_by(team = posteam) %>% summarise(team_carries_all_games = sum(rush_attempt == 1, na.rm = TRUE), team_targets_all_games = sum(pass_attempt == 1, na.rm = TRUE), team_receptions_all_games = sum(complete_pass, na.rm = TRUE), team_rush_fd_all_games = sum(first_down_rush, na.rm = TRUE), team_rec_fd_all_games = sum(first_down_pass, na.rm = TRUE), .groups = 'drop')
  final_stats <- left_join(final_stats, team_totals_all_games, by = "team")

  final_stats <- final_stats %>% mutate(pct_team_carries_in_played_games = ifelse(team_carries_in_played_games > 0, carries / team_carries_in_played_games, 0), pct_team_targets_in_played_games = ifelse(team_targets_in_played_games > 0, targets / team_targets_in_played_games, 0), pct_team_receptions_in_played_games = ifelse(team_receptions_in_played_games > 0, receptions / team_receptions_in_played_games, 0), pct_team_rush_fd_in_played_games = ifelse(team_rush_fd_in_played_games > 0, rushing_first_downs / team_rush_fd_in_played_games, 0), pct_team_rec_fd_in_played_games = ifelse(team_rec_fd_in_played_games > 0, receiving_first_downs / team_rec_fd_in_played_games, 0), yards_per_pass_attempt = ifelse(attempts > 0, passing_yards / attempts, 0), yards_per_completion = ifelse(completions > 0, passing_yards / completions, 0), yards_per_carry = ifelse(carries > 0, rushing_yards / carries, 0), yards_per_target = ifelse(targets > 0, receiving_yards / targets, 0), yards_per_reception = ifelse(receptions > 0, receiving_yards / receptions, 0), pass_attempts_per_game = attempts / games_played, completions_per_game = completions / games_played, passing_yards_per_game = passing_yards / games_played, passing_first_downs_per_game = passing_first_downs / games_played, carries_per_game = carries / games_played, rushing_yards_per_game = rushing_yards / carries, rushing_first_downs_per_game = rushing_first_downs / games_played, targets_per_game = targets / games_played, receptions_per_game = receptions / games_played, receiving_yards_per_game = receiving_yards / games_played, receiving_first_downs_per_game = receiving_first_downs / games_played)

  return(final_stats)
}

all_seasons_data_flat <- list()

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

  # --- Calculate Season-Level Stats (Green Zone Carries, HVTs) ---
  # Get all unique player IDs and their names from the current year's pbp data
  player_info_for_year <- bind_rows(
    pbp_data %>% filter(!is.na(passer_player_id)) %>% select(player_id = passer_player_id, player_name = passer_player_name, team = posteam, position = passer_position),
    pbp_data %>% filter(!is.na(rusher_player_id)) %>% select(player_id = rusher_player_id, player_name = rusher_player_name, team = posteam, position = rusher_position),
    pbp_data %>% filter(!is.na(receiver_player_id)) %>% select(player_id = receiver_player_id, player_name = receiver_player_name, team = posteam, position = receiver_position)
  ) %>%
  filter(!is.na(player_id)) %>%
  distinct(player_id, player_name, team, position)

  season_player_stats_raw <- pbp_data %>%
    filter(play_type %in% c('pass', 'run')) %>%
    mutate(is_green_zone_carry = ifelse(rush_attempt == 1 & yardline_100 <= 10, 1, 0)) %>%
    group_by(player_id = rusher_player_id, player_name = rusher_player_name, team = posteam) %>%
    summarise(green_zone_carries = sum(is_green_zone_carry, na.rm = TRUE), .groups = 'drop')

  # Add targets to season_player_stats_raw for HVT calculation
  season_player_targets_raw <- pbp_data %>%
    filter(pass_attempt == 1, !is.na(receiver_player_id)) %>% group_by(player_id = receiver_player_id, player_name = receiver_player_name, team = posteam) %>% summarise(targets = n(), .groups = 'drop')

  season_player_stats <- full_join(season_player_stats_raw, season_player_targets_raw, by = c("player_id", "player_name", "team")) %>%
    mutate(across(where(is.numeric), ~ifelse(is.na(.), 0, .)))

  # Join with player_info_for_year to get position for HVT calculation
  season_player_stats <- left_join(season_player_stats, player_info_for_year %>% select(player_id, position), by = "player_id")

  # Calculate HVTs only for RBs
  season_player_stats <- season_player_stats %>%
    mutate(HVTs = ifelse(position == "RB", targets + green_zone_carries, NA_real_))

  # Calculate team totals for Green Zone Carries (all games)
  team_green_zone_carries_all_games_df <- pbp_data %>%
    filter(play_type %in% c('pass', 'run')) %>%
    mutate(is_green_zone_carry = ifelse(rush_attempt == 1 & yardline_100 <= 10, 1, 0)) %>%
    group_by(team = posteam) %>%
    summarise(
      team_green_zone_carries_all_games = sum(is_green_zone_carry, na.rm = TRUE),
      .groups = 'drop'
    )

  # Calculate total team RB HVTs (all games)
  team_RB_HVTs_all_games_df <- pbp_data %>%
    filter(play_type %in% c('pass', 'run')) %>%
    mutate(is_rb_carry = ifelse(rush_attempt == 1 & rusher_position == "RB", 1, 0)) %>%
    mutate(is_rb_target = ifelse(pass_attempt == 1 & receiver_position == "RB", 1, 0)) %>%
    group_by(team = posteam) %>%
    summarise(
      total_team_RB_HVTs_all_games = sum(is_rb_carry, na.rm = TRUE) + sum(is_rb_target, na.rm = TRUE),
      .groups = 'drop'
    )

  season_player_stats <- left_join(season_player_stats, team_green_zone_carries_all_games_df, by = "team")
  season_player_stats <- left_join(season_player_stats, team_RB_HVTs_all_games_df, by = "team")

  # Calculate team totals for Green Zone Carries and RB HVTs (in games played by player)
  player_games_season <- bind_rows(
    pbp_data %>% filter(!is.na(passer_player_id)) %>% select(player_id = passer_player_id, game_id, team = posteam),
    pbp_data %>% filter(!is.na(rusher_player_id)) %>% select(player_id = rusher_player_id, game_id, team = posteam),
    pbp_data %>% filter(!is.na(receiver_player_id)) %>% select(player_id = receiver_player_id, game_id, team = posteam)
  ) %>% filter(!is.na(player_id)) %>% distinct(player_id, game_id, team)

  team_game_totals_season <- pbp_data %>%
    filter(play_type %in% c('pass', 'run')) %>%
    mutate(is_green_zone_carry = ifelse(rush_attempt == 1 & yardline_100 <= 10, 1, 0)) %>%
    mutate(is_rb_carry = ifelse(rush_attempt == 1 & rusher_position == "RB", 1, 0)) %>%
    mutate(is_rb_target = ifelse(pass_attempt == 1 & receiver_position == "RB", 1, 0)) %>%
    group_by(game_id, team = posteam) %>%
    summarise(
      team_green_zone_carries_in_game = sum(is_green_zone_carry, na.rm = TRUE),
      total_team_RB_HVTs_in_game = sum(is_rb_carry, na.rm = TRUE) + sum(is_rb_target, na.rm = TRUE),
      .groups = 'drop'
    )

  player_specific_team_totals_season <- left_join(player_games_season, team_game_totals_season, by = c("game_id", "team")) %>%
    group_by(player_id) %>%
    summarise(
      team_green_zone_carries_in_played_games = sum(team_green_zone_carries_in_game, na.rm = TRUE),
      total_team_RB_HVTs_in_played_games = sum(total_team_RB_HVTs_in_game, na.rm = TRUE),
      games_played_season = n_distinct(game_id),
      .groups = 'drop'
    )

  season_player_stats <- left_join(season_player_stats, player_specific_team_totals_season, by = "player_id") %>%
    mutate(
      HVTs_per_game = ifelse(games_played_season > 0, HVTs / games_played_season, 0),
      pct_team_green_zone_carries_all_games = ifelse(team_green_zone_carries_all_games > 0, green_zone_carries / team_green_zone_carries_all_games, 0),
      pct_team_green_zone_carries_in_played_games = ifelse(team_green_zone_carries_in_played_games > 0, green_zone_carries / team_green_zone_carries_in_played_games, 0),
      pct_team_RB_HVTs_all_games = ifelse(total_team_RB_HVTs_all_games > 0, HVTs / total_team_RB_HVTs_all_games, 0),
      pct_team_RB_HVTs_in_played_games = ifelse(total_team_RB_HVTs_in_played_games > 0, HVTs / total_team_RB_HVTs_in_played_games, 0)
    )

  all_downs_stats <- map(c(1, 3), ~get_down_stats(pbp_data, .x))

  # Get all unique player IDs and their names from the current year's pbp data
  # This ensures we have names for all players who appeared in the pbp data
  player_info_for_year <- bind_rows(
    pbp_data %>% filter(!is.na(passer_player_id)) %>% select(player_id = passer_player_id, player_name = passer_player_name, team = posteam, position = passer_position),
    pbp_data %>% filter(!is.na(rusher_player_id)) %>% select(player_id = rusher_player_id, player_name = rusher_player_name, team = posteam, position = rusher_position),
    pbp_data %>% filter(!is.na(receiver_player_id)) %>% select(player_id = receiver_player_id, player_name = receiver_player_name, team = posteam, position = receiver_position)
  ) %>%
  filter(!is.na(player_id)) %>%
  distinct(player_id, player_name, team, position)

  # Filter season_player_stats to only include players present in player_info_for_year
  # This ensures we only process players who actually have a name and ID
  season_player_stats <- season_player_stats %>%
    semi_join(player_info_for_year, by = "player_id")

  # Get the unique player IDs that have season stats
  player_ids_with_season_stats <- unique(season_player_stats$player_id)

  # Flatten the data into a single data frame for CSV export
  flat_data_for_year <- data.frame()

  for (id in player_ids_with_season_stats) {
    player_row <- list()
    player_row$season <- year

    current_player_info <- player_info_for_year %>% filter(player_id == id) %>% distinct(player_name, team, position)
    player_row$player_id <- id
    player_row$player_name <- as.character(current_player_info$player_name[1])
    player_row$team <- as.character(current_player_info$team[1])
    player_row$position <- as.character(current_player_info$position[1]) # Add player position

    season_stats_for_player <- season_player_stats %>% filter(player_id == id)
    if (nrow(season_stats_for_player) > 0) {
      for (col_name in names(season_stats_for_player)) {
        if (!col_name %in% c("player_id", "player_name", "team", "position")) { # Exclude already added fields
          player_row[[col_name]] <- season_stats_for_player[[col_name]][1]
        }
      }
    }

    for (i in c(1, 3)) {
      down_stats <- all_downs_stats[[which(c(1,3) == i)]]
      player_down_stats <- down_stats[down_stats$player_id == id, ]
      if (nrow(player_down_stats) > 0) {
        for (col_name in names(player_down_stats)) {
          if (!col_name %in% c("player_id", "player_name", "position", "team")) {
            player_row[[paste0("down_", i, "_", col_name)]] <- player_down_stats[[col_name]][1]
          }
        }
      }
    }
    flat_data_for_year <- bind_rows(flat_data_for_year, as.data.frame(player_row))
  }
  all_seasons_data_flat <- bind_rows(all_seasons_data_flat, flat_data_for_year)
}

# --- 6. Save Final Aggregated Stats ---

cat("STEP 6: Saving the final aggregated stats to CSV...\n")

final_stats_output_file <- "all_downs_offensive_stats_1_3_2017_2024.csv"
write_csv(all_seasons_data_flat, final_stats_output_file)

cat("\nScript finished successfully!\n")
cat(paste("Final aggregated stats saved to:", file.path(getwd(), final_stats_output_file), "\n"))
