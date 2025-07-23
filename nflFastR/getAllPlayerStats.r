# Set CRAN mirror
options(repos = c(CRAN = "https://cloud.r-project.org"))

# Check and install necessary packages
required_packages <- c("nflfastR", "dplyr", "tidyr", "purrr", "readr", "jsonlite", "nflreadr")

new_packages <- required_packages[!(required_packages %in% installed.packages()[,"Package"])]
if (length(new_packages)) {
  install.packages(new_packages)
}

# Load necessary libraries
library(nflfastR)
library(dplyr)
library(tidyr)
library(purrr)
library(readr)
library(jsonlite)
library(nflreadr)

# Function to fetch and process player data
get_player_stats <- function(years) {
  all_stats <- map_df(years, function(year) {
    cat(paste0("Processing data for ", year, " season...\n"))
    pbp_data <- nflfastR::load_pbp(year) %>%
      filter(season_type == "REG")
    rosters_data <- nflreadr::load_rosters(year)
    weekly_player_stats <- nflreadr::load_player_stats(year, "offense") %>%
      filter(season_type == "REG")

    # Passing stats
    passing_stats <- pbp_data %>%
      filter(pass_attempt == 1) %>%
      group_by(player_id = passer_player_id, season, week, posteam, defteam, season_type, posteam_type, game_id) %>%
      summarise(
        completions = sum(complete_pass, na.rm = TRUE),
        attempts = sum(pass_attempt, na.rm = TRUE),
        passing_yards = sum(passing_yards, na.rm = TRUE),
        passing_tds = sum(pass_touchdown, na.rm = TRUE),
        interceptions = sum(interception, na.rm = TRUE),
        sacks = sum(sack, na.rm = TRUE),
        passing_air_yards = sum(air_yards, na.rm = TRUE),
        passing_yards_after_catch = sum(yards_after_catch, na.rm = TRUE),
        passing_first_downs = sum(first_down_pass, na.rm = TRUE),
        passing_epa = sum(epa, na.rm = TRUE),
        .groups = 'drop'
      )

    # Rushing stats
    rushing_stats <- pbp_data %>%
      filter(rush_attempt == 1) %>%
      group_by(player_id = rusher_player_id, season, week, posteam, defteam, season_type, posteam_type, game_id) %>%
      summarise(
        carries = sum(rush_attempt, na.rm = TRUE),
        rushing_yards = sum(rushing_yards, na.rm = TRUE),
        rushing_tds = sum(rush_touchdown, na.rm = TRUE),
        rushing_fumbles = sum(fumble_forced, na.rm = TRUE),
        rushing_first_downs = sum(first_down_rush, na.rm = TRUE),
        rushing_epa = sum(epa, na.rm = TRUE),
        .groups = 'drop'
      )

    # Receiving stats
    receiving_stats <- pbp_data %>%
      filter(!is.na(receiver_player_id)) %>%
      group_by(player_id = receiver_player_id, season, week, posteam, defteam, season_type, posteam_type, game_id) %>%
      summarise(
        receptions = sum(complete_pass, na.rm = TRUE),
        targets = n(),
        receiving_yards = sum(receiving_yards, na.rm = TRUE),
        receiving_tds = sum(pass_touchdown, na.rm = TRUE),
        receiving_air_yards = sum(air_yards, na.rm = TRUE),
        receiving_yards_after_catch = sum(yards_after_catch, na.rm = TRUE),
        receiving_first_downs = sum(first_down_pass, na.rm = TRUE),
        receiving_epa = sum(epa, na.rm = TRUE),
        .groups = 'drop'
      )

    # Two-minute drill stats
    two_min_drill_pbp <- pbp_data %>%
      filter(qtr %in% c(2, 4) & quarter_seconds_remaining <= 120) # 2 minutes = 120 seconds

    two_min_drill_carries <- two_min_drill_pbp %>%
      filter(rush_attempt == 1) %>%
      group_by(player_id = rusher_player_id, season, week, posteam, defteam, season_type, posteam_type, game_id) %>%
      summarise(two_min_drill_carries = sum(rush_attempt, na.rm = TRUE), .groups = 'drop')

    two_min_drill_targets <- two_min_drill_pbp %>%
      filter(!is.na(receiver_player_id)) %>%
      group_by(player_id = receiver_player_id, season, week, posteam, defteam, season_type, posteam_type, game_id) %>%
      summarise(two_min_drill_targets = n(), .groups = 'drop')

    # Combine all stats
    combined_stats <- full_join(passing_stats, rushing_stats, by = c("player_id", "season", "week", "posteam", "defteam", "season_type", "posteam_type", "game_id")) %>%
      full_join(receiving_stats, by = c("player_id", "season", "week", "posteam", "defteam", "season_type", "posteam_type", "game_id")) %>%
      full_join(two_min_drill_carries, by = c("player_id", "season", "week", "posteam", "defteam", "season_type", "posteam_type", "game_id")) %>%
      full_join(two_min_drill_targets, by = c("player_id", "season", "week", "posteam", "defteam", "season_type", "posteam_type", "game_id")) %>%
      mutate(across(where(is.numeric), ~replace_na(., 0))) # Replace NA with 0 for numeric columns

    # Add player info and calculate fantasy points
    combined_stats <- combined_stats %>%
      left_join(rosters_data %>% select(gsis_id, full_name, position), by = c("player_id" = "gsis_id")) %>%
      rename(player_display_name = full_name) %>%
      left_join(weekly_player_stats %>% select(player_id, season, week, racr, target_share, air_yards_share, wopr, fantasy_points, fantasy_points_ppr), by = c("player_id", "season", "week")) %>%
      select(
        player_id, player_display_name, position, recent_team = posteam, season, week, season_type, opponent_team = defteam, is_home_team = posteam_type, game_id,
        completions, attempts, passing_yards, passing_tds, interceptions, sacks,
        passing_air_yards, passing_yards_after_catch, passing_first_downs, passing_epa,
        carries, rushing_yards, rushing_tds, rushing_fumbles, rushing_first_downs, rushing_epa,
        receptions, targets, receiving_yards, receiving_tds, receiving_air_yards, receiving_yards_after_catch,
        receiving_first_downs, receiving_epa, racr, target_share, air_yards_share, wopr, fantasy_points, fantasy_points_ppr,
        two_min_drill_carries, two_min_drill_targets
      ) %>%
      mutate(across(where(is.numeric), ~round(., 3))) # Round all numeric columns to 3 decimal places

    return(combined_stats)
  })

  return(all_stats)
}

# Get player stats from 2000 to 2024
player_stats <- get_player_stats(2000:2024)

# Save the data to a CSV file
write.csv(player_stats, "nflFastR/player_stats.csv", row.names = FALSE, quote = FALSE, na = "")

cat("Player stats saved to nflFastR/player_stats.csv\n")
