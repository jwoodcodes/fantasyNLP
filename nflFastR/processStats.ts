import * as fs from 'fs';
import Papa from 'papaparse';

const csvFilePath = './nflFastR/player_stats.csv';
const weeklyPlayerStatsPath = './weekly_player_stats.csv';

interface PlayerGameStats {
  player_id: string;
  player_name?: string;
  player_display_name?: string;
  position?: string;
  position_group?: string;
  recent_team?: string;
  season: number;
  week: number;
  completions?: number;
  attempts?: number;
  passing_yards?: number;
  passing_tds?: number;
  interceptions?: number;
  sacks?: number;
  sack_yards?: number;
  passing_air_yards?: number;
  passing_yards_after_catch?: number;
  passing_first_downs?: number;
  passing_epa?: number;
  pacr?: number;
  carries?: number;
  rushing_yards?: number;
  rushing_tds?: number;
  rushing_fumbles?: number;
  rushing_first_downs?: number;
  rushing_epa?: number;
  receptions?: number;
  targets?: number;
  receiving_yards?: number;
  receiving_tds?: number;
  receiving_air_yards?: number;
  receiving_yards_after_catch?: number;
  receiving_first_downs?: number;
  receiving_2pt_conversions?: number;
  racr?: number;
  target_share?: number;
  air_yards_share?: number;
  wopr?: number;
  fantasy_points?: number;
  fantasy_points_ppr?: number;
  [key: string]: any; // Allow for other properties
}

// Corresponds to the PlayerStat schema in schema.prisma
interface PlayerStat {
  id: string;
  playerId?: string;
  playerName?: string;
  playerDisplayName?: string;
  position?: string;
  positionGroup?: string;
  recentTeam?: string;
  season?: number;
  week?: number;
  seasonType?: string;
  opponentTeam?: string;
  completions?: number;
  attempts?: number;
  passingYards?: number;
  passingTds?: number;
  interceptions?: number;
  sacks?: number;
  sackYards?: number;
  passingAirYards?: number;
  passingYardsAfterCatch?: number;
  passingFirstDowns?: number;
  passingEpa?: number;
  pacr?: number;
  carries?: number;
  rushingYards?: number;
  rushingTds?: number;
  rushingFumbles?: number;
  rushingFirstDowns?: number;
  rushingEpa?: number;
  receptions?: number;
  targets?: number;
  receivingYards?: number;
  receivingTds?: number;
  receivingAirYards?: number;
  receivingYardsAfterCatch?: number;
  receivingFirstDowns?: number;
  receiving2ptConversions?: number;
  racr?: number;
  targetShare?: number;
  airYardsShare?: number;
  wopr?: number;
  fantasyPoints?: number;
  fantasyPointsPpr?: number;
}

async function getCompleteWeeklyStats(): Promise<PlayerStat[]> {
  console.log("Entering getCompleteWeeklyStats");
  return new Promise((resolve, reject) => {
    const csvFile = fs.readFileSync(csvFilePath, 'utf8');

    Papa.parse(csvFile, {
      header: true,
      dynamicTyping: true,
      transform: (value, field) => {
        if (value === 'NA' || value === 'N/A') {
          return null; // Convert 'NA' to null
        }
        if (!isNaN(Number(value)) && typeof value === 'string' && value.trim() !== '') {
          return Number(value);
        }
        return value;
      },
      complete: (results) => {
        const data = results.data as PlayerGameStats[];
        const weeklyStats: PlayerStat[] = [];

        data.forEach((game, index) => {
          // Generate a unique ID for each weekly stat entry
          const id = `weekly-${game.player_id}-${game.season}-${game.week}-${index}`;

          const playerStat: PlayerStat = {
            id: id,
            playerId: game.player_id,
            playerName: game.player_name || game.player_display_name,
            playerDisplayName: game.player_display_name,
            position: game.position,
            positionGroup: game.position_group,
            recentTeam: game.recent_team,
            season: game.season,
            week: game.week,
            seasonType: game.season_type,
            opponentTeam: game.opponent_team,
            completions: game.completions,
            attempts: game.attempts,
            passingYards: game.passing_yards,
            passingTds: game.passing_tds,
            interceptions: game.interceptions,
            sacks: game.sacks,
            sackYards: game.sack_yards,
            passingAirYards: game.passing_air_yards,
            passingYardsAfterCatch: game.passing_yards_after_catch,
            passingFirstDowns: game.passing_first_downs,
            passingEpa: game.passing_epa,
            pacr: game.pacr,
            carries: game.carries,
            rushingYards: game.rushing_yards,
            rushingTds: game.rushing_tds,
            rushingFumbles: game.rushing_fumbles,
            rushingFirstDowns: game.rushing_first_downs,
            rushingEpa: game.rushing_epa,
            receptions: game.receptions,
            targets: game.targets,
            receivingYards: game.receiving_yards,
            receivingTds: game.receiving_tds,
            receivingAirYards: game.receiving_air_yards,
            receivingYardsAfterCatch: game.receiving_yards_after_catch,
            receivingFirstDowns: game.receiving_first_downs,
            receiving2ptConversions: game.receiving_2pt_conversions,
            racr: game.racr,
            targetShare: game.target_share,
            airYardsShare: game.air_yards_share,
            wopr: game.wopr,
            fantasyPoints: game.fantasy_points,
            fantasyPointsPpr: game.fantasy_points_ppr,
          };
          weeklyStats.push(playerStat);
        });
        resolve(weeklyStats);
      },
      error: (err) => {
        reject(err);
      }
    });
  });
}

// Call the main function to execute the data processing and save to CSV
getCompleteWeeklyStats().then((data) => {
  const csv = Papa.unparse(data);
  fs.writeFileSync(weeklyPlayerStatsPath, csv, 'utf8');
  console.log(`Weekly player stats written to ${weeklyPlayerStatsPath}`);
  console.log("Last 10 entries of weekly player data:");
  console.log(data.slice(-10));
}).catch(error => {
  console.error("Error during weekly player data processing:", error);
});

export { getCompleteWeeklyStats };
export type { PlayerStat };
