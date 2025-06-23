# Check and install necessary packages
required_packages <- c("nflfastR", "jsonlite")

new_packages <- required_packages[!(required_packages %in% installed.packages()[,"Package"])]
if (length(new_packages)) {
  install.packages(new_packages)
}

# Load necessary libraries
library(nflfastR)
library(jsonlite)

# Function to fetch player data and save it locally
save_player_data_locally <- function() {
  # Load player stats for all available seasons
  player_stats <- load_player_stats(seasons = TRUE)
  
  # Check if the player_stats data is not empty
  if (nrow(player_stats) > 0) {
    # Save as CSV
    write.csv(player_stats, "player_stats.csv", row.names = FALSE)
    message("Player stats saved as player_stats.csv")
    
    # Save as JSON
    # write_json(player_stats, "player_stats.json", pretty = TRUE)
    # message("Player stats saved as player_stats.json")
  } else {
    message("No player stats available to save.")
  }
}

# Example usage
save_player_data_locally()
