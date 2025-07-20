import * as fs from 'fs';
import { Container } from 'lucide-react';
import Papa from 'papaparse';

const csvFilePath = './nflFastR/player_stats.csv';
const seasonRecStatsPath = './nflFastR/season_rec_stats_pff';
const teamSeasonStatsPath = './team_season_stats_2017_2024.csv';
const finalPlayerSeasonsPath = './finalPlayerSeasons.csv';
const allDownsOffensiveStatsPath = './all_downs_offensive_stats_1_3_2017_2024.csv';

interface PlayerGameStats {
  player_id: string;
  player_name?: string; // Make player_name optional
  player?: string; // Add player as optional
  season: number;
  week: number;
  [key: string]: any;
}

interface PlayerSeasonStats {
  player_id: string;
  player_name: string;
  season: number;
  games_played: number;
  position?: string; // Added position field
  [key: `${string}_total`]: number | undefined;
  [key: string]: any;
  team?: string;
  completions_total?: number;
  attempts_total?: number;
  passing_yards_total?: number;
  passing_tds_total?: number;
  interceptions_total?: number;
  passing_first_downs_total?: number;
  carries_total?: number;
  rushing_yards_total?: number;
  rushing_tds_total?: number;
  rushing_fumbles_total?: number;
  rushing_fumbles_lost_total?: number;
  rushing_first_downs_total?: number;
  targets_total?: number;
  receptions_total?: number;
  receiving_yards_total?: number;
  receiving_tds_total?: number;
  receiving_air_yards_total?: number;
  receiving_yards_after_catch_total?: number;
  receiving_first_downs_total?: number;
  fantasy_points_total?: number;
  completions_avg?: number;
  attempts_avg?: number;
  passing_yards_avg?: number;
  passing_tds_avg?: number;
  interceptions_avg?: number;
  passing_air_yards_avg?: number;
  passing_yards_after_catch_avg?: number;
  passing_first_downs_avg?: number;
  carries_avg?: number;
  rushing_yards_avg?: number;
  rushing_tds_avg?: number;
  rushing_fumbles_avg?: number;
  rushing_fumbles_lost_avg?: number;
  rushing_first_downs_avg?: number;
  receptions_avg?: number;
  targets_avg?: number;
  receiving_yards_avg?: number;
  receiving_tds_avg?: number;
  receiving_air_yards_avg?: number;
  receiving_yards_after_catch_avg?: number;
  receiving_first_downs_avg?: number;
  receiving_epa_avg?: number;
  racr_avg?: number;
  target_share_avg?: number;
  air_yards_share_avg?: number;
  wopr_avg?: number;
  fantasy_points_avg?: number;
  fantasy_points_ppr_avg?: number;
  YPRR?: number;
  routes?: number;
  routes_per_game?: number;
  TPRR?: number;
  firstDPRR?: number;
  green_zone_carries?: number;
  HVTs?: number;
  team_green_zone_carries_all_games?: number;
  total_team_RB_HVTs_all_games?: number;
  team_green_zone_carries_in_played_games?: number;
  total_team_RB_HVTs_in_played_games?: number;
  games_played_season?: number;
  HVTs_per_game?: number;
  pct_team_green_zone_carries_all_games?: number;
  pct_team_green_zone_carries_in_played_games?: number;
  pct_team_RB_HVTs_all_games?: number;
  pct_team_RB_HVTs_in_played_games?: number;
  total_dropbacks?: number;
  pass_attempts_on_dropbacks?: number;
  scrambles_on_dropbacks?: number;
  sacks_on_dropbacks?: number;
  pass_attempt_rate?: number;
  scramble_rate?: number;
  sack_rate?: number;
  touchdown_rate?: number;
  avg_cpoe?: number;
  games_over_30_degrees?: number;
  games_below_30_degrees?: number;
  avg_fp_over_30_degrees?: number;
  avg_fp_below_30_degrees?: number;
  avg_fp_wind_below_20_mph?: number;
  avg_fp_wind_above_20_mph?: number;
  diff_fp_temp_30_degrees?: number;
  diff_fp_wind_20_mph?: number;
  avg_pass_epa_deep_left?: number;
  avg_pass_epa_deep_middle?: number;
  avg_pass_epa_deep_right?: number;
  avg_pass_epa_short_left?: number;
  avg_pass_epa_short_middle?: number;
  avg_pass_epa_short_right?: number;
  total_tackled_for_loss?: number;
  total_rb_carries?: number;
  pct_carries_tackled_for_loss?: number;
  rec_avg_rec_epa_deep_left?: number;
  rec_avg_rec_epa_deep_middle?: number;
  rec_avg_rec_epa_deep_right?: number;
  rec_avg_rec_epa_short_left?: number;
  rec_avg_rec_epa_short_middle?: number;
  rec_avg_rec_epa_short_right?: number;
  rec_pct_targets_deep_left?: number;
  rec_pct_targets_deep_middle?: number;
  rec_pct_targets_deep_right?: number;
  rec_pct_targets_short_left?: number;
  rec_pct_targets_short_middle?: number;
  rec_pct_targets_short_right?: number;
  down_1_attempts?: number;
  down_1_completions?: number;
  down_1_passing_yards?: number;
  down_1_passing_tds?: number;
  down_1_interceptions?: number;
  down_1_sacks_taken?: number;
  down_1_passing_first_downs?: number;
  down_1_carries?: number;
  down_1_rushing_yards?: number;
  down_1_rushing_tds?: number;
  down_1_fumbles?: number;
  down_1_rushing_first_downs?: number;
  down_1_targets?: number;
  down_1_receptions?: number;
  down_1_receiving_yards?: number;
  down_1_receiving_tds?: number;
  down_1_receiving_first_downs?: number;
  down_1_total_first_downs?: number;
  down_1_team_carries_in_played_games?: number;
  down_1_team_targets_in_played_games?: number;
  down_1_team_receptions_in_played_games?: number;
  down_1_team_rush_fd_in_played_games?: number;
  down_1_team_rec_fd_in_played_games?: number;
  down_1_games_played?: number;
  down_1_team_carries_all_games?: number;
  down_1_team_targets_all_games?: number;
  down_1_team_receptions_all_games?: number;
  down_1_team_rush_fd_all_games?: number;
  down_1_team_rec_fd_all_games?: number;
  down_1_pct_team_carries_in_played_games?: number;
  down_1_pct_team_targets_in_played_games?: number;
  down_1_pct_team_receptions_in_played_games?: number;
  down_1_pct_team_rush_fd_in_played_games?: number;
  down_1_pct_team_rec_fd_in_played_games?: number;
  down_1_yards_per_pass_attempt?: number;
  down_1_yards_per_completion?: number;
  down_1_yards_per_carry?: number;
  down_1_yards_per_target?: number;
  down_1_yards_per_reception?: number;
  down_1_pass_attempts_per_game?: number;
  down_1_completions_per_game?: number;
  down_1_passing_yards_per_game?: number;
  down_1_passing_first_downs_per_game?: number;
  down_1_carries_per_game?: number;
  down_1_rushing_yards_per_game?: number;
  down_1_rushing_first_downs_per_game?: number;
  down_1_targets_per_game?: number;
  down_1_receptions_per_game?: number;
  down_1_receiving_yards_per_game?: number;
  down_1_receiving_first_downs_per_game?: number;
  down_3_attempts?: number;
  down_3_completions?: number;
  down_3_passing_yards?: number;
  down_3_passing_tds?: number;
  down_3_interceptions?: number;
  down_3_sacks_taken?: number;
  down_3_passing_first_downs?: number;
  down_3_carries?: number;
  down_3_rushing_yards?: number;
  down_3_rushing_tds?: number;
  down_3_fumbles?: number;
  down_3_rushing_first_downs?: number;
  down_3_targets?: number;
  down_3_receptions?: number;
  down_3_receiving_yards?: number;
  down_3_receiving_tds?: number;
  down_3_receiving_first_downs?: number;
  down_3_total_first_downs?: number;
  down_3_team_carries_in_played_games?: number;
  down_3_team_targets_in_played_games?: number;
  down_3_team_receptions_in_played_games?: number;
  down_3_team_rush_fd_in_played_games?: number;
  down_3_team_rec_fd_in_played_games?: number;
  down_3_games_played?: number;
  down_3_team_carries_all_games?: number;
  down_3_team_targets_all_games?: number;
  down_3_team_receptions_all_games?: number;
  down_3_team_rush_fd_all_games?: number;
  down_3_team_rec_fd_all_games?: number;
  down_3_pct_team_carries_in_played_games?: number;
  down_3_pct_team_targets_in_played_games?: number;
  down_3_pct_team_receptions_in_played_games?: number;
  down_3_pct_team_rush_fd_in_played_games?: number;
  down_3_pct_team_rec_fd_in_played_games?: number;
  down_3_yards_per_pass_attempt?: number;
  down_3_yards_per_completion?: number;
  down_3_yards_per_carry?: number;
  down_3_yards_per_target?: number;
  down_3_yards_per_reception?: number;
  down_3_pass_attempts_per_game?: number;
  down_3_completions_per_game?: number;
  down_3_passing_yards_per_game?: number;
  down_3_passing_first_downs_per_game?: number;
  down_3_carries_per_game?: number;
  down_3_rushing_yards_per_game?: number;
  down_3_rushing_first_downs_per_game?: number;
  down_3_targets_per_game?: number;
  down_3_receptions_per_game?: number;
  down_3_receiving_yards_per_game?: number;
  down_3_receiving_first_downs_per_game?: number;
}

const sanitizePlayerName = (name: string | undefined): string => {
  if (name === undefined || name === null) {
    return '';
  }
  return name
    .toLowerCase()
    .replace(/\./g, '') // Remove periods
    .replace(/\-/g, '') // Remove hyphens
    .replace(/\'/g, '') // Remove apostrophes
    .replace(/\biii\b/g, '') // Remove III
    .replace(/\bii\b/g, '') // Remove II
    .replace(/\bjr\b/g, '') // Remove jr
    .trim();
};

async function getCompleteSeasonalStats(): Promise<{ [key: string]: PlayerSeasonStats }> {
  console.log("Entering getCompleteSeasonalStats");
  const seasonalStats: { [key: string]: PlayerSeasonStats } = await new Promise((resolve) => {
    const csvFile = fs.readFileSync(csvFilePath, 'utf8');

    Papa.parse(csvFile, {
      header: true,
      dynamicTyping: true,
      transform: (value, field) => {
        if (value === 'NA' || value === 'N/A') {
          return null; // Convert 'NA' to null
        }
        // Attempt to convert to number if it's a numeric field and not already a number
        if (!isNaN(Number(value)) && typeof value === 'string' && value.trim() !== '') {
          return Number(value);
        }
        return value;
      },
      complete: (results) => {
        const data = results.data as PlayerGameStats[];
        const seasonalStats: { [key: string]: PlayerSeasonStats } = {};

        data.forEach((game) => {
          if (!game.player_id || !game.season) {
            return;
          }
          if(game.player_display_name) {
            game.player_name = game.player_display_name;
          }
          const sanitizedPlayerName = sanitizePlayerName(game.player_name);
          const key = `${sanitizedPlayerName}-${game.season}`;
          if (!seasonalStats[key]) {
            seasonalStats[key] = {
              player_id: game.player_id,
              player_name: game.player_display_name,
              season: game.season,
              games_played: 0,
              position: game.position, // Added position
              team: game.recent_team,
            };
          }
          seasonalStats[key].games_played += 1;

          for (const stat in game) {
            if (game.season_type === 'REG') {
            if (
              typeof game[stat] === 'number' &&
              stat !== 'season' &&
              stat !== 'week'
            ) {
              if (!seasonalStats[key][`${stat}_total`]) {
                seasonalStats[key][`${stat}_total`] = 0;
              }
              seasonalStats[key][`${stat}_total`]! += game[stat];
            }
          }
        }
        });

        const desiredProperties = [
          'player_id', 'player_name', 'position', 'season', 'games_played', 'completions_total', 'attempts_total', 'passing_yards_total',
          'passing_tds_total', 'interceptions_total', 'passing_first_downs_total', 'carries_total', 'rushing_yards_total',
          'rushing_tds_total', 'rushing_fumbles_total', 'rushing_fumbles_lost_total', 'rushing_first_downs_total', 'targets_total',
          'receiving_yards_total', 'receiving_tds_total', 'receiving_air_yards_total', 'receiving_yards_after_catch_total',
          'receiving_first_downs_total', 'fantasy_points_total', 'completions_avg', 'attempts_avg', 'passing_yards_avg', 'passing_tds_avg',
          'interceptions_avg', 'passing_air_yards_avg', 'passing_yards_after_catch_avg', 'passing_first_downs_avg', 'carries_avg',
          'rushing_yards_avg', 'rushing_tds_avg', 'rushing_fumbles_avg', 'rushing_fumbles_lost_avg', 'rushing_first_downs_avg',
          'receptions_avg', 'receptions_total','targets_avg', 'receiving_yards_avg', 'receiving_tds_avg', 'receiving_air_yards_avg',
          'receiving_yards_after_catch_avg', 'receiving_first_downs_avg', 'receiving_epa_avg', 'racr_avg', 'target_share_avg',
          'air_yards_share_avg', 'wopr_avg', 'fantasy_points_avg', 'fantasy_points_ppr_avg', 'YPRR', 'routes', 'routes_per_game',
          'TPRR', 'firstDPRR',
          'green_zone_carries', 'HVTs', 'team_green_zone_carries_all_games', 'total_team_RB_HVTs_all_games',
          'team_green_zone_carries_in_played_games', 'total_team_RB_HVTs_in_played_games', 'games_played_season', 'HVTs_per_game',
          'pct_team_green_zone_carries_all_games', 'pct_team_green_zone_carries_in_played_games', 'pct_team_RB_HVTs_all_games',
          'pct_team_RB_HVTs_in_played_games', 'total_dropbacks', 'pass_attempts_on_dropbacks', 'scrambles_on_dropbacks',
          'sacks_on_dropbacks', 'pass_attempt_rate', 'scramble_rate', 'sack_rate', 'touchdown_rate', 'avg_cpoe',
          'games_over_30_degrees', 'games_below_30_degrees', 'avg_fp_over_30_degrees', 'avg_fp_below_30_degrees',
          'avg_fp_wind_below_20_mph', 'avg_fp_wind_above_20_mph', 'diff_fp_temp_30_degrees', 'diff_fp_wind_20_mph',
          'avg_pass_epa_deep_left', 'avg_pass_epa_deep_middle', 'avg_pass_epa_deep_right', 'avg_pass_epa_short_left',
          'avg_pass_epa_short_middle', 'avg_pass_epa_short_right', 'total_tackled_for_loss', 'total_rb_carries',
          'pct_carries_tackled_for_loss', 'rec_avg_rec_epa_deep_left', 'rec_avg_rec_epa_deep_middle',
          'rec_avg_rec_epa_deep_right', 'rec_avg_rec_epa_short_left', 'rec_avg_rec_epa_short_middle',
          'rec_avg_rec_epa_short_right', 'rec_pct_targets_deep_left', 'rec_pct_targets_deep_middle',
          'rec_pct_targets_deep_right', 'rec_pct_targets_short_left', 'rec_pct_targets_short_middle',
          'rec_pct_targets_short_right', 'down_1_attempts', 'down_1_completions', 'down_1_passing_yards',
          'down_1_passing_tds', 'down_1_interceptions', 'down_1_sacks_taken', 'down_1_passing_first_downs',
          'down_1_carries', 'down_1_rushing_yards', 'down_1_rushing_tds', 'down_1_fumbles',
          'down_1_rushing_first_downs', 'down_1_targets', 'down_1_receptions', 'down_1_receiving_yards',
          'down_1_receiving_tds', 'down_1_receiving_first_downs', 'down_1_total_first_downs',
          'down_1_team_carries_in_played_games', 'down_1_team_targets_in_played_games', 'down_1_team_receptions_in_played_games',
          'down_1_team_rush_fd_in_played_games', 'down_1_team_rec_fd_in_played_games', 'down_1_games_played',
          'down_1_team_carries_all_games', 'down_1_team_targets_all_games', 'down_1_team_receptions_all_games',
          'down_1_team_rush_fd_all_games', 'down_1_team_rec_fd_all_games', 'down_1_pct_team_carries_in_played_games',
          'down_1_pct_team_targets_in_played_games', 'down_1_pct_team_receptions_in_played_games',
          'down_1_pct_team_rush_fd_in_played_games', 'down_1_pct_team_rec_fd_in_played_games',
          'down_1_yards_per_pass_attempt', 'down_1_yards_per_completion', 'down_1_yards_per_carry',
          'down_1_yards_per_target', 'down_1_yards_per_reception', 'down_1_pass_attempts_per_game',
          'down_1_completions_per_game', 'down_1_passing_yards_per_game', 'down_1_passing_first_downs_per_game',
          'down_1_carries_per_game', 'down_1_rushing_yards_per_game', 'down_1_rushing_first_downs_per_game',
          'down_1_targets_per_game', 'down_1_receptions_per_game', 'down_1_receiving_yards_per_game',
          'down_1_receiving_first_downs_per_game', 'down_3_attempts', 'down_3_completions', 'down_3_passing_yards',
          'down_3_passing_tds', 'down_3_interceptions', 'down_3_sacks_taken', 'down_3_passing_first_downs',
          'down_3_carries', 'down_3_rushing_yards', 'down_3_rushing_tds', 'down_3_fumbles',
          'down_3_rushing_first_downs', 'down_3_targets', 'down_3_receptions', 'down_3_receiving_yards',
          'down_3_receiving_tds', 'down_3_receiving_first_downs', 'down_3_total_first_downs',
          'down_3_team_carries_in_played_games', 'down_3_team_targets_in_played_games', 'down_3_team_receptions_in_played_games',
          'down_3_team_rush_fd_in_played_games', 'down_3_team_rec_fd_in_played_games', 'down_3_games_played',
          'down_3_team_carries_all_games', 'down_3_team_targets_all_games', 'down_3_team_receptions_all_games',
          'down_3_team_rush_fd_all_games', 'down_3_team_rec_fd_all_games', 'down_3_pct_team_carries_in_played_games',
          'down_3_pct_team_targets_in_played_games', 'down_3_pct_team_receptions_in_played_games',
          'down_3_pct_team_rush_fd_in_played_games', 'down_3_pct_team_rec_fd_in_played_games',
          'down_3_yards_per_pass_attempt', 'down_3_yards_per_completion', 'down_3_yards_per_carry',
          'down_3_yards_per_target', 'down_3_yards_per_reception', 'down_3_pass_attempts_per_game',
          'down_3_completions_per_game', 'down_3_passing_yards_per_game', 'down_3_passing_first_downs_per_game',
          'down_3_carries_per_game', 'down_3_rushing_yards_per_game', 'down_3_rushing_first_downs_per_game',
          'down_3_targets_per_game', 'down_3_receptions_per_game', 'down_3_receiving_yards_per_game',
          'down_3_receiving_first_downs_per_game'
        ];

        for (const key in seasonalStats) {
          const playerSeason = seasonalStats[key];
          for (const stat in playerSeason) {
            if (stat.endsWith('_total')) {
              const baseStat = stat.replace('_total', '');
              const avg = playerSeason[stat] / playerSeason.games_played;
              playerSeason[`${baseStat}_avg`] = parseFloat(avg.toFixed(2));
            }
          }

          const filteredPlayerSeason: PlayerSeasonStats = {
            player_id: playerSeason.player_id,
            player_name: playerSeason.player_name,
            season: playerSeason.season,
            games_played: playerSeason.games_played,
          };

          desiredProperties.forEach(prop => {
            if (playerSeason.hasOwnProperty(prop)) {
              filteredPlayerSeason[prop] = playerSeason[prop];
            }
          });
          seasonalStats[key] = filteredPlayerSeason;
        }
        resolve(seasonalStats);
      },
    });
  });

  console.log("Seasonal Stats populated:", Object.keys(seasonalStats).length);

  const processSeasonRecStats = (filePath: string, seasonalStats: { [key: string]: PlayerSeasonStats }): Promise<void> => {
    return new Promise((resolve) => {
      const csvFile = fs.readFileSync(filePath, 'utf8');
      const fileName = filePath.split('/').pop();
      const yearMatch = fileName?.match(/rec(\d{2})\.csv/);
      let season: number | undefined;

      if (yearMatch && yearMatch[1]) {
        const yearTwoDigits = parseInt(yearMatch[1], 10);
        season = 2000 + yearTwoDigits;
      }

      Papa.parse(csvFile, {
        header: true,
        dynamicTyping: true,
        transform: (value, field) => {
          if (value === 'NA' || value === 'N/A') {
            return null; // Convert 'NA' to null
          }
          // Attempt to convert to number if it's a numeric field and not already a number
          if (!isNaN(Number(value)) && typeof value === 'string' && value.trim() !== '') {
            return Number(value);
          }
          return value;
        },
        complete: (results) => {
          const data = results.data as PlayerGameStats[];
          data.forEach((game) => {
            if (season !== undefined) {
              game.season = season;
            }
            const sanitizedPlayerName = sanitizePlayerName(game.player);
            const key = `${sanitizedPlayerName}-${game.season}`;

            if (seasonalStats[key]) {
              const matchedPlayer = seasonalStats[key];
              const routes = game.routes; // Assuming 'routes' is a property in the recXX.csv data
              const YPRR = game.yprr;
              matchedPlayer.YPRR = YPRR;
              

              
              if (routes !== undefined && typeof routes === 'number') {
                matchedPlayer.routes = routes;

                if (matchedPlayer.routes !== undefined && matchedPlayer.games_played !== undefined && routes > 0) {
                  matchedPlayer.routes_per_game = parseFloat((routes / matchedPlayer.games_played).toFixed(2));
                }
                // Calculate TPRR (Targets Per Route Run)
                if (matchedPlayer.targets_total !== undefined && routes > 0) {
                  matchedPlayer.TPRR = parseFloat((matchedPlayer.targets_total / routes).toFixed(2));
                }

                // Calculate firstDPRR (First Downs Per Route Run)
                if (matchedPlayer.receiving_first_downs_total !== undefined && routes > 0) {
                  matchedPlayer.firstDPRR = parseFloat((matchedPlayer.receiving_first_downs_total / routes).toFixed(2));
                }

                if (matchedPlayer.receiving_first_downs_total !== undefined && routes > 0) {
                  matchedPlayer.firstDPRR = parseFloat((matchedPlayer.receiving_first_downs_total / routes).toFixed(2));
                }
              }
            } else {
              // console.log(`No match found for recXX.csv entry: Player=${game.player}, Sanitized=${sanitizedPlayerName}, Season=${game.season}, Key=${key}`);
            }
          });
          resolve();
        },
      });
    });
  };

  const seasonRecFiles = fs.readdirSync(seasonRecStatsPath);
  const promises: Promise<void>[] = [];
  seasonRecFiles.forEach(file => {
    if (file.endsWith('.csv')) {
      const filePath = `${seasonRecStatsPath}/${file}`;
      promises.push(processSeasonRecStats(filePath, seasonalStats));
    }
  });
  await Promise.all(promises);

  // Process all_downs_offensive_stats_1_3_2017_2024.csv
  await new Promise<void>((resolve) => {
    const csvFile = fs.readFileSync(allDownsOffensiveStatsPath, 'utf8');
    Papa.parse(csvFile, {
      header: true,
      dynamicTyping: true,
      transform: (value, field) => {
        if (value === 'NA' || value === 'N/A') {
          return null; // Convert 'NA' to null
        }
        // Attempt to convert to number if it's a numeric field and not already a number
        if (!isNaN(Number(value)) && typeof value === 'string' && value.trim() !== '') {
          return Number(value);
        }
        return value;
      },
      complete: (results) => {
        const data = results.data as any[];
        data.forEach((row) => {
          const key = `${sanitizePlayerName(row.player_name)}-${row.season}`;
          if (seasonalStats[key]) {
            // Merge all properties from the CSV row into the existing seasonalStats entry
            Object.assign(seasonalStats[key], row);
          } else {
            // If no existing entry, create a new one (this might happen if a player only has all_downs stats)
            seasonalStats[key] = { ...row, player_id: row.player_id, player_name: row.player_name, season: row.season };
          }
        });
        resolve();
      },
    });
  });

  const finalPlayerSeasonsArray = Object.values(seasonalStats);
  console.log(finalPlayerSeasonsArray.slice(-20));

  // Write finalPlayerSeasonsArray to a CSV file
  const csv = Papa.unparse(finalPlayerSeasonsArray);
  fs.writeFileSync(finalPlayerSeasonsPath, csv, 'utf8');
  console.log(`Final player season data written to ${finalPlayerSeasonsPath}`);

  return seasonalStats;
}

export { getCompleteSeasonalStats, getCompleteTeamSeasonalStats };
export type { PlayerSeasonStats, TeamSeasonStats };

// Call the main function to execute the data processing
getCompleteSeasonalStats().then(() => {
  console.log("Player season data processing complete.");
}).catch(error => {
  console.error("Error during player season data processing:", error);
});

interface TeamSeasonStats {
  team: string;
  season: number;
  team_green_zone_carries_all_games?: number;
  total_team_RB_HVTs_all_games?: number;
  team_carries_all_games?: number;
  team_targets_all_games?: number;
  team_receptions_all_games?: number;
  team_rush_fd_all_games?: number;
  team_rec_fd_all_games?: number;
}

async function getCompleteTeamSeasonalStats(): Promise<{ [key: string]: TeamSeasonStats }> {
  return new Promise((resolve) => {
    const csvFile = fs.readFileSync(teamSeasonStatsPath, 'utf8');
    Papa.parse(csvFile, {
      header: true,
      dynamicTyping: true,
      transform: (value, field) => {
        if (value === 'NA' || value === 'N/A') {
          return null; // Convert 'NA' to null
        }
        // Attempt to convert to number if it's a numeric field and not already a number
        if (!isNaN(Number(value)) && typeof value === 'string' && value.trim() !== '') {
          return Number(value);
        }
        return value;
      },
      complete: (results) => {
        const teamStats: { [key: string]: TeamSeasonStats } = {};
        const data = results.data as TeamSeasonStats[];

        data.forEach((row) => {
          const key = `${row.team}-${row.season}`;
          teamStats[key] = row;
        });
        resolve(teamStats);
      },
    });
  });
}
