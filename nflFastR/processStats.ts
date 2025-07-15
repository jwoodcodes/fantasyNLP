import * as fs from 'fs';
import { Container } from 'lucide-react';
import Papa from 'papaparse';

const csvFilePath = './nflFastR/player_stats.csv';
const seasonRecStatsPath = './nflFastR/season_rec_stats_pff';

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
  team?: string;
  [key: string]: any;
}

const sanitizePlayerName = (name: string | undefined): string => {
  if (name === undefined || name === null) {
    return '';
  }
  return name
    .toLowerCase()
    .replace(/\./g, '') // Remove periods
    .replace(/\./g, '') // Remove periods
    .replace(/\-/g, '') // Remove hyphens
    .replace(/\-/g, '') // Remove hyphens
    .replace(/\'/g, '') // Remove apostrophes
    .replace(/\'/g, '') // Remove apostrophes
    .replace(/\biii\b/g, '') // Remove III
    .replace(/\bii\b/g, '') // Remove II
    .replace(/\bjr\b/g, '') // Remove jr
    .trim();
};

async function getCompleteSeasonalStats(): Promise<{ [key: string]: PlayerSeasonStats }> {
  const seasonalStats: { [key: string]: PlayerSeasonStats } = await new Promise((resolve) => {
    const csvFile = fs.readFileSync(csvFilePath, 'utf8');

    Papa.parse(csvFile, {
      header: true,
      dynamicTyping: true,
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
              seasonalStats[key][`${stat}_total`] += game[stat];
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
          'rushing_epa_avg', 'receptions_avg', 'receptions_total','targets_avg', 'receiving_yards_avg', 'receiving_tds_avg', 'receiving_air_yards_avg',
          'receiving_yards_after_catch_avg', 'receiving_first_downs_avg', 'receiving_epa_avg', 'racr_avg', 'target_share_avg',
          'air_yards_share_avg', 'wopr_avg', 'fantasy_points_avg', 'fantasy_points_ppr_avg', 'YPRR', 'routes', 'routes_per_game',
          'TPRR', 'firstDPRR'
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

  return seasonalStats;
}

export { getCompleteSeasonalStats };
export type { PlayerSeasonStats };









