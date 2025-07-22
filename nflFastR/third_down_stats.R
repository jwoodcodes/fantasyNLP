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
  filter(rush_attempt == 1, !is.na(rusher_player_id)) %>% group_by(player_id = rusher_player_id) %>% summarise(carries = n(), rushing_yards = sum(rushing_yards, na.rm = TRUE), rushing_first_downs = sum(first_down_rush, na.rm = TRUE))
  receiving_totals <- pbp_down %>%
  filter(pass_attempt == 1, !is.na(receiver_player_id)) %>% group_by(player_id = receiver_player_id) %>% summarise(targets = n(), receptions = sum(complete_pass, na.rm = TRUE), receiving_yards = sum(receiving_yards, na.rm = TRUE), receiving_first_downs = sum(first_down_pass, na.rm = TRUE))

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
  select(player_id, position, team, everything())

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

  player_specific_team_totals <- left_join(player_games, team_game_totals, by = c("game_id", "team")) %>%
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

  final_stats <- final_stats %>% mutate(yards_per_pass_attempt = ifelse(attempts > 0, passing_yards / attempts, 0), yards_per_completion = ifelse(completions > 0, passing_yards / completions, 0), yards_per_carry = ifelse(carries > 0, rushing_yards / carries, 0), yards_per_target = ifelse(targets > 0, receiving_yards / targets, 0), yards_per_reception = ifelse(receptions > 0, receiving_yards / receptions, 0), pass_attempts_per_game = attempts / games_played, completions_per_game = completions / games_played, passing_yards_per_game = passing_yards / games_played, passing_first_downs_per_game = passing_first_downs / games_played, carries_per_game = carries / games_played, rushing_yards_per_game = rushing_yards / carries, rushing_first_downs_per_game = rushing_first_downs / games_played, targets_per_game = targets / games_played, receptions_per_game = receptions / games_played, receiving_yards_per_game = receiving_yards / games_played)

  return(final_stats)
}

all_seasons_data_flat <- list()
all_seasons_team_data_flat <- list()

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
      receiving_2pt_conversions, racr, target_share, air_yards_share, wopr,
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
      sack_yards_total = sum(sack_yards, na.rm = TRUE),
      passing_air_yards_total = sum(passing_air_yards, na.rm = TRUE),
      passing_yards_after_catch_total = sum(passing_yards_after_catch, na.rm = TRUE),
      passing_first_downs_total = sum(passing_first_downs, na.rm = TRUE),
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
      receiving_2pt_conversions_total = sum(receiving_2pt_conversions, na.rm = TRUE),
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
      sack_yards_avg = sack_yards_total / games_played,
      passing_air_yards_avg = passing_air_yards_total / games_played,
      passing_yards_after_catch_avg = passing_yards_after_catch_total / games_played,
      passing_first_downs_avg = passing_first_downs_total / games_played,
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
      receiving_2pt_conversions_avg = receiving_2pt_conversions_total / games_played, 
      racr_avg = racr_total / games_played, 
      target_share_avg = target_share_total / games_played, 
      air_yards_share_avg = air_yards_share_total / games_played, 
      wopr_avg = wopr_total / games_played, 
      fantasy_points_avg = fantasy_points_total / games_played,
      fantasy_points_ppr_avg = fantasy_points_ppr_total / games_played
    )

  # --- Add player names and position data ---
  player_info <- rosters_data %>% select(gsis_id, full_name, position) %>% rename(player_id = gsis_id, player_name = full_name)
  season_player_stats <- left_join(season_player_stats, player_info, by = "player_id")

  # --- Calculate Season-Level Stats (Green Zone Carries, HVTs) ---
  green_zone_carries <- pbp_data %>%
    filter(play_type %in% c('pass', 'run') & rush_attempt == 1 & yardline_100 <= 10) %>%
    group_by(player_id = rusher_player_id) %>%
    summarise(
      green_zone_carries = n(),
      .groups = 'drop'
    )

  season_player_stats <- left_join(season_player_stats, green_zone_carries, by = "player_id")

  season_player_stats <- season_player_stats %>%
    mutate(HVTs = ifelse(position == "RB", receptions_total + green_zone_carries, NA_real_))

  # --- Calculate QB EPA by Pass Location and Length ---
  qb_epa_stats <- pbp_data %>%
    filter(pass_attempt == 1, !is.na(passer_player_id), !is.na(pass_location), !is.na(pass_length)) %>%
    group_by(player_id = passer_player_id, pass_length, pass_location) %>%
    summarise(avg_epa = mean(epa, na.rm = TRUE), .groups = 'drop') %>%
    tidyr::pivot_wider(
      names_from = c(pass_length, pass_location),
      values_from = avg_epa,
      names_prefix = "avg_pass_epa_",
      values_fill = 0
    )

  season_player_stats <- left_join(season_player_stats, qb_epa_stats, by = "player_id")

  # --- Calculate WR Target Share and EPA by Pass Location and Length ---
  wr_stats <- pbp_data %>%
    filter(pass_attempt == 1, !is.na(receiver_player_id), receiver_position == "WR", !is.na(pass_location), !is.na(pass_length)) %>%
    group_by(player_id = receiver_player_id, pass_length, pass_location) %>%
    summarise(
      targets_in_location = n(),
      avg_rec_epa = mean(epa, na.rm = TRUE),
      .groups = 'drop'
    )

  wr_total_targets <- wr_stats %>%
    group_by(player_id) %>%
    summarise(total_targets = sum(targets_in_location), .groups = 'drop')

  wr_stats <- wr_stats %>%
    left_join(wr_total_targets, by = "player_id") %>%
    mutate(pct_targets = ifelse(total_targets > 0, targets_in_location / total_targets, 0)) %>%
    select(-targets_in_location, -total_targets) %>%
    tidyr::pivot_wider(
      names_from = c(pass_length, pass_location),
      values_from = c(avg_rec_epa, pct_targets),
      names_prefix = "rec_",
      values_fill = 0
    )

  season_player_stats <- left_join(season_player_stats, wr_stats, by = "player_id")

  # --- Calculate RB Tackled for Loss Stats (All Downs) ---
  rb_tfl_stats <- pbp_data %>%
    filter(rusher_position == "RB", rush_attempt == 1) %>%
    group_by(player_id = rusher_player_id) %>%
    summarise(
      total_tackled_for_loss = sum(tackled_for_loss, na.rm = TRUE),
      total_rb_carries = n(),
      .groups = 'drop'
    ) %>%
    mutate(
      pct_carries_tackled_for_loss = ifelse(total_rb_carries > 0, total_tackled_for_loss / total_rb_carries, 0)
    )

  season_player_stats <- left_join(season_player_stats, rb_tfl_stats, by = "player_id")

  # --- Process PFF Receiving Stats ---
  pff_rec_path <- paste0("nflFastR/season_rec_stats_pff/rec", substr(year, 3, 4), ".csv")
  if (file.exists(pff_rec_path)) {
    pff_data <- read_csv(pff_rec_path)
    pff_data$sanitized_player_name <- sapply(pff_data$player, sanitize_player_name)
    season_player_stats$sanitized_player_name <- sapply(season_player_stats$player_name, sanitize_player_name)
    
    pff_data <- pff_data %>% select(sanitized_player_name, routes, yprr)
    season_player_stats <- left_join(season_player_stats, pff_data, by = "sanitized_player_name")
  }

  # --- Calculate Down-Specific Stats ---
  all_downs_stats <- map(c(1, 3), ~get_down_stats(pbp_data, .x))
  down_1_stats <- all_downs_stats[[1]]
  down_3_stats <- all_downs_stats[[2]]
  
  # Rename columns to be down-specific
  colnames(down_1_stats) <- paste0("down_1_", colnames(down_1_stats))
  colnames(down_3_stats) <- paste0("down_3_", colnames(down_3_stats))

  # Merge down-specific stats
  season_player_stats <- left_join(season_player_stats, down_1_stats, by = c("player_id" = "down_1_player_id"))
  season_player_stats <- left_join(season_player_stats, down_3_stats, by = c("player_id" = "down_3_player_id"))

  # --- Final Calculations for current season ---
  season_player_stats <- season_player_stats %>%
    mutate(
      routes_per_game = ifelse(games_played > 0, routes / games_played, 0),
      TPRR = ifelse(routes > 0, targets_total / routes, 0),
      firstDPRR = ifelse(routes > 0, receiving_first_downs_total / routes, 0)
    )

  # Add season column explicitly
  season_player_stats$season <- year

  all_seasons_data_flat <- bind_rows(all_seasons_data_flat, season_player_stats)

  # --- Aggregate Team Stats ---
  team_season_stats <- pbp_data %>%
    group_by(team = posteam) %>%
    summarise(
      team_green_zone_carries_all_games = sum(ifelse(rush_attempt == 1 & yardline_100 <= 10, 1, 0), na.rm = TRUE),
      team_carries_all_games = sum(rush_attempt, na.rm = TRUE),
      team_targets_all_games = sum(pass_attempt, na.rm = TRUE),
      team_receptions_all_games = sum(complete_pass, na.rm = TRUE),
      team_rush_fd_all_games = sum(first_down_rush, na.rm = TRUE),
      team_rec_fd_all_games = sum(first_down_pass, na.rm = TRUE),
      .groups = 'drop'
    )
  team_season_stats$season <- year
  all_seasons_team_data_flat <- bind_rows(all_seasons_team_data_flat, team_season_stats)
}


# --- Save Final Aggregated Stats ---
cat("STEP 6: Saving the final aggregated stats to CSV...\n")

final_player_stats_output_file <- "final_player_seasons.csv"
all_seasons_data_flat <- all_seasons_data_flat %>%
  mutate(across(where(is.numeric), ~round(., 3))) %>%
  # Remove unwanted _total columns
  select(-c(passing_epa_total, pacr_total, rushing_epa_total, receiving_2pt_conversions_total, racr_total, target_share_total, air_yards_share_total, wopr_total)) %>%
  # Reorder columns to have player_id, player_name, season at the beginning
  select(player_id, player_name, season, everything()) %>%
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
