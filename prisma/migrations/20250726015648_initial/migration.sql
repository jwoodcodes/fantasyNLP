/*
  Warnings:

  - You are about to drop the column `dakota` on the `PlayerStat` table. All the data in the column will be lost.
  - You are about to drop the column `headshot_url` on the `PlayerStat` table. All the data in the column will be lost.
  - You are about to drop the column `passing_2pt_conversions` on the `PlayerStat` table. All the data in the column will be lost.
  - You are about to drop the column `passing_first_downs` on the `PlayerStat` table. All the data in the column will be lost.
  - You are about to drop the column `receiving_2pt_conversions` on the `PlayerStat` table. All the data in the column will be lost.
  - You are about to drop the column `receiving_epa` on the `PlayerStat` table. All the data in the column will be lost.
  - You are about to drop the column `receiving_fumbles` on the `PlayerStat` table. All the data in the column will be lost.
  - You are about to drop the column `receiving_fumbles_lost` on the `PlayerStat` table. All the data in the column will be lost.
  - You are about to drop the column `rushing_2pt_conversions` on the `PlayerStat` table. All the data in the column will be lost.
  - You are about to drop the column `rushing_fumbles_lost` on the `PlayerStat` table. All the data in the column will be lost.
  - You are about to drop the column `sack_fumbles` on the `PlayerStat` table. All the data in the column will be lost.
  - You are about to drop the column `sack_fumbles_lost` on the `PlayerStat` table. All the data in the column will be lost.
  - You are about to drop the column `sack_yards` on the `PlayerStat` table. All the data in the column will be lost.
  - You are about to drop the column `special_teams_tds` on the `PlayerStat` table. All the data in the column will be lost.
  - You are about to drop the column `passing_first_downs_avg` on the `playerSeasons` table. All the data in the column will be lost.
  - You are about to drop the column `passing_first_downs_total` on the `playerSeasons` table. All the data in the column will be lost.
  - You are about to drop the column `rushing_epa_avg` on the `playerSeasons` table. All the data in the column will be lost.
  - You are about to drop the `ReceivingStat` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "PlayerStat" DROP COLUMN "dakota",
DROP COLUMN "headshot_url",
DROP COLUMN "passing_2pt_conversions",
DROP COLUMN "passing_first_downs",
DROP COLUMN "receiving_2pt_conversions",
DROP COLUMN "receiving_epa",
DROP COLUMN "receiving_fumbles",
DROP COLUMN "receiving_fumbles_lost",
DROP COLUMN "rushing_2pt_conversions",
DROP COLUMN "rushing_fumbles_lost",
DROP COLUMN "sack_fumbles",
DROP COLUMN "sack_fumbles_lost",
DROP COLUMN "sack_yards",
DROP COLUMN "special_teams_tds";

-- AlterTable
ALTER TABLE "playerSeasons" DROP COLUMN "passing_first_downs_avg",
DROP COLUMN "passing_first_downs_total",
DROP COLUMN "rushing_epa_avg",
ADD COLUMN     "HVTs" INTEGER,
ADD COLUMN     "HVTs_per_game" DOUBLE PRECISION,
ADD COLUMN     "avg_pass_epa_deep_left" DOUBLE PRECISION,
ADD COLUMN     "avg_pass_epa_deep_middle" DOUBLE PRECISION,
ADD COLUMN     "avg_pass_epa_deep_right" DOUBLE PRECISION,
ADD COLUMN     "avg_pass_epa_short_left" DOUBLE PRECISION,
ADD COLUMN     "avg_pass_epa_short_middle" DOUBLE PRECISION,
ADD COLUMN     "avg_pass_epa_short_right" DOUBLE PRECISION,
ADD COLUMN     "down_1_attempts" INTEGER,
ADD COLUMN     "down_1_carries" INTEGER,
ADD COLUMN     "down_1_carries_per_game" DOUBLE PRECISION,
ADD COLUMN     "down_1_completions" INTEGER,
ADD COLUMN     "down_1_completions_per_game" DOUBLE PRECISION,
ADD COLUMN     "down_1_pass_attempts_per_game" DOUBLE PRECISION,
ADD COLUMN     "down_1_passing_yards" DOUBLE PRECISION,
ADD COLUMN     "down_1_receiving_yards" DOUBLE PRECISION,
ADD COLUMN     "down_1_receiving_yards_per_game" DOUBLE PRECISION,
ADD COLUMN     "down_1_receptions" INTEGER,
ADD COLUMN     "down_1_receptions_per_game" DOUBLE PRECISION,
ADD COLUMN     "down_1_rushing_yards" DOUBLE PRECISION,
ADD COLUMN     "down_1_rushing_yards_per_game" DOUBLE PRECISION,
ADD COLUMN     "down_1_targets" INTEGER,
ADD COLUMN     "down_1_targets_per_game" DOUBLE PRECISION,
ADD COLUMN     "down_1_team_carries_all_games" INTEGER,
ADD COLUMN     "down_1_team_carries_in_played_games" INTEGER,
ADD COLUMN     "down_1_team_receptions_all_games" INTEGER,
ADD COLUMN     "down_1_team_receptions_in_played_games" INTEGER,
ADD COLUMN     "down_1_team_targets_all_games" INTEGER,
ADD COLUMN     "down_1_team_targets_in_played_games" INTEGER,
ADD COLUMN     "down_1_yards_per_reception" DOUBLE PRECISION,
ADD COLUMN     "down_1_yards_per_target" DOUBLE PRECISION,
ADD COLUMN     "down_3_attempts" INTEGER,
ADD COLUMN     "down_3_carries" INTEGER,
ADD COLUMN     "down_3_carries_per_game" DOUBLE PRECISION,
ADD COLUMN     "down_3_completions" INTEGER,
ADD COLUMN     "down_3_completions_per_game" DOUBLE PRECISION,
ADD COLUMN     "down_3_interceptions" INTEGER,
ADD COLUMN     "down_3_pass_attempts_per_game" DOUBLE PRECISION,
ADD COLUMN     "down_3_passing_first_downs" DOUBLE PRECISION,
ADD COLUMN     "down_3_passing_first_downs_per_game" DOUBLE PRECISION,
ADD COLUMN     "down_3_passing_tds" INTEGER,
ADD COLUMN     "down_3_passing_yards" DOUBLE PRECISION,
ADD COLUMN     "down_3_passing_yards_per_game" DOUBLE PRECISION,
ADD COLUMN     "down_3_pct_team_carries_in_played_games" DOUBLE PRECISION,
ADD COLUMN     "down_3_pct_team_rec_fd_in_played_games" DOUBLE PRECISION,
ADD COLUMN     "down_3_pct_team_receptions_in_played_games" DOUBLE PRECISION,
ADD COLUMN     "down_3_pct_team_rush_fd_in_played_games" DOUBLE PRECISION,
ADD COLUMN     "down_3_pct_team_targets_in_played_games" DOUBLE PRECISION,
ADD COLUMN     "down_3_receiving_first_downs" DOUBLE PRECISION,
ADD COLUMN     "down_3_receiving_first_downs_per_game" DOUBLE PRECISION,
ADD COLUMN     "down_3_receiving_tds" INTEGER,
ADD COLUMN     "down_3_receiving_yards" DOUBLE PRECISION,
ADD COLUMN     "down_3_receiving_yards_per_game" DOUBLE PRECISION,
ADD COLUMN     "down_3_receptions" INTEGER,
ADD COLUMN     "down_3_receptions_per_game" DOUBLE PRECISION,
ADD COLUMN     "down_3_rushing_first_downs" DOUBLE PRECISION,
ADD COLUMN     "down_3_rushing_first_downs_per_game" DOUBLE PRECISION,
ADD COLUMN     "down_3_rushing_yards" DOUBLE PRECISION,
ADD COLUMN     "down_3_rushing_yards_per_game" DOUBLE PRECISION,
ADD COLUMN     "down_3_sacks_taken" INTEGER,
ADD COLUMN     "down_3_targets" INTEGER,
ADD COLUMN     "down_3_targets_per_game" DOUBLE PRECISION,
ADD COLUMN     "down_3_team_carries_all_games" INTEGER,
ADD COLUMN     "down_3_team_carries_in_played_games" INTEGER,
ADD COLUMN     "down_3_team_rec_fd_all_games" INTEGER,
ADD COLUMN     "down_3_team_rec_fd_in_played_games" DOUBLE PRECISION,
ADD COLUMN     "down_3_team_receptions_all_games" INTEGER,
ADD COLUMN     "down_3_team_receptions_in_played_games" INTEGER,
ADD COLUMN     "down_3_team_rush_fd_all_games" INTEGER,
ADD COLUMN     "down_3_team_rush_fd_in_played_games" INTEGER,
ADD COLUMN     "down_3_team_targets_all_games" INTEGER,
ADD COLUMN     "down_3_team_targets_in_played_games" INTEGER,
ADD COLUMN     "down_3_total_first_downs" INTEGER,
ADD COLUMN     "down_3_yards_per_completion" DOUBLE PRECISION,
ADD COLUMN     "down_3_yards_per_pass_attempt" DOUBLE PRECISION,
ADD COLUMN     "down_3_yards_per_reception" DOUBLE PRECISION,
ADD COLUMN     "down_3_yards_per_target" DOUBLE PRECISION,
ADD COLUMN     "games_played_season" INTEGER,
ADD COLUMN     "green_zone_carries" INTEGER,
ADD COLUMN     "pass_attempt_rate" DOUBLE PRECISION,
ADD COLUMN     "pass_attempts_on_dropbacks" INTEGER,
ADD COLUMN     "pct_carries_tackled_for_loss" DOUBLE PRECISION,
ADD COLUMN     "pct_team_green_zone_carries_all_games" DOUBLE PRECISION,
ADD COLUMN     "pct_team_green_zone_carries_in_played_games" DOUBLE PRECISION,
ADD COLUMN     "rec_avg_rec_epa_deep_left" DOUBLE PRECISION,
ADD COLUMN     "rec_avg_rec_epa_deep_middle" DOUBLE PRECISION,
ADD COLUMN     "rec_avg_rec_epa_deep_right" DOUBLE PRECISION,
ADD COLUMN     "rec_avg_rec_epa_short_left" DOUBLE PRECISION,
ADD COLUMN     "rec_avg_rec_epa_short_middle" DOUBLE PRECISION,
ADD COLUMN     "rec_avg_rec_epa_short_right" DOUBLE PRECISION,
ADD COLUMN     "rec_pct_targets_deep_left" DOUBLE PRECISION,
ADD COLUMN     "rec_pct_targets_deep_middle" DOUBLE PRECISION,
ADD COLUMN     "rec_pct_targets_deep_right" DOUBLE PRECISION,
ADD COLUMN     "rec_pct_targets_short_left" DOUBLE PRECISION,
ADD COLUMN     "rec_pct_targets_short_middle" DOUBLE PRECISION,
ADD COLUMN     "rec_pct_targets_short_right" DOUBLE PRECISION,
ADD COLUMN     "sack_rate" DOUBLE PRECISION,
ADD COLUMN     "sacks_on_dropbacks" INTEGER,
ADD COLUMN     "scramble_rate" DOUBLE PRECISION,
ADD COLUMN     "scrambles_on_dropbacks" INTEGER,
ADD COLUMN     "team" TEXT,
ADD COLUMN     "team_green_zone_carries_all_games" INTEGER,
ADD COLUMN     "team_green_zone_carries_in_played_games" INTEGER,
ADD COLUMN     "total_dropbacks" INTEGER,
ADD COLUMN     "total_tackled_for_loss" INTEGER,
ADD COLUMN     "touchdown_rate" DOUBLE PRECISION,
ALTER COLUMN "player_name" DROP NOT NULL,
ALTER COLUMN "games_played" DROP NOT NULL;

-- DropTable
DROP TABLE "ReceivingStat";

-- CreateTable
CREATE TABLE "TeamSeasonStats" (
    "team" TEXT NOT NULL,
    "season" INTEGER NOT NULL,
    "team_green_zone_carries_all_games" INTEGER,
    "team_carries_all_games" INTEGER,
    "team_targets_all_games" INTEGER,
    "team_receptions_all_games" INTEGER,
    "team_rush_fd_all_games" INTEGER,
    "team_rec_fd_all_games" INTEGER,

    CONSTRAINT "TeamSeasonStats_pkey" PRIMARY KEY ("team","season")
);
