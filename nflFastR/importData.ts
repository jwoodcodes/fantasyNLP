// import { PrismaClient } from '../app/generated/prisma';
// import * as fs from 'fs';
// import * as path from 'path';

// const prisma = new PrismaClient();

// async function importPlayerStats() {
//   const playerGamesDataPath = path.join(__dirname, './player_stats.csv');
//   const csvData = fs.readFileSync(playerGamesDataPath, 'utf8');
//   const rows = csvData.split('\n').map(row => row.split(','));

//   const headers = rows[0].map(header => header.replace(/"/g, '').trim());

//   const jsonData = rows.slice(1).map(row => {
//     const obj: { [key: string]: string | number | null } = {};
//     headers.forEach((header, index) => {
//       let value: string | number | null = row[index]?.replace(/"/g, '').trim();
//       if (value === 'NA' || value === '') {
//         value = null;
//       } else if (['season', 'week', 'completions', 'attempts', 'passing_tds', 'interceptions', 'sacks', 'sack_fumbles', 'sack_fumbles_lost', 'passing_first_downs', 'passing_2pt_conversions', 'carries', 'rushing_tds', 'rushing_fumbles', 'rushing_fumbles_lost', 'rushing_first_downs', 'rushing_2pt_conversions', 'receptions', 'targets', 'receiving_tds', 'receiving_fumbles', 'receiving_fumbles_lost', 'receiving_first_downs', 'receiving_2pt_conversions', 'special_teams_tds'].includes(header)) {
//         value = value !== null ? parseInt(value as string, 10) : null;
//       } else if (['passing_yards', 'sack_yards', 'passing_air_yards', 'passing_yards_after_catch', 'passing_epa', 'pacr', 'dakota', 'rushing_yards', 'rushing_epa', 'racr', 'receiving_yards', 'receiving_air_yards', 'receiving_yards_after_catch', 'receiving_epa', 'target_share', 'air_yards_share', 'wopr', 'fantasy_points', 'fantasy_points_ppr'].includes(header)) {
//         value = value !== null ? parseFloat(value as string) : null;
//       }
//       obj[header] = value;
//     });
//     return obj;
//   });

//   console.log('Importing Player Stats...');
//   for (const data of jsonData) {
//     try {
//       await prisma.playerStat.create({
//         data: {
//           playerId: data.player_id as string,
//           playerName: data.player_name as string,
//           playerDisplayName: data.player_display_name as string,
//           position: data.position as string,
//           positionGroup: data.position_group as string,
//           headshotUrl: data.headshot_url as string,
//           recentTeam: data.recent_team as string,
//           season: data.season as number,
//           week: data.week as number,
//           seasonType: data.season_type as string,
//           opponentTeam: data.opponent_team as string,
//           completions: data.completions as number,
//           attempts: data.attempts as number,
//           passingYards: data.passing_yards as number,
//           passingTds: data.passing_tds as number,
//           interceptions: data.interceptions as number,
//           sacks: data.sacks as number,
//           sackYards: data.sack_yards as number,
//           sackFumbles: data.sack_fumbles as number,
//           sackFumblesLost: data.sack_fumbles_lost as number,
//           passingAirYards: data.passing_air_yards as number,
//           passingYardsAfterCatch: data.passing_yards_after_catch as number,
//           passingFirstDowns: data.passing_first_downs as number,
//           passingEpa: data.passing_epa as number,
//           passing2ptConversions: data.passing_2pt_conversions as number,
//           pacr: data.pacr as number,
//           dakota: data.dakota as number,
//           carries: data.carries as number,
//           rushingYards: data.rushing_yards as number,
//           rushingTds: data.rushing_tds as number,
//           rushingFumbles: data.rushing_fumbles as number,
//           rushingFumblesLost: data.rushing_fumbles_lost as number,
//           rushingFirstDowns: data.rushing_first_downs as number,
//           rushingEpa: data.rushing_epa as number,
//           rushing2ptConversions: data.rushing_2pt_conversions as number,
//           receptions: data.receptions as number,
//           targets: data.targets as number,
//           receivingYards: data.receiving_yards as number,
//           receivingTds: data.receiving_tds as number,
//           receivingFumbles: data.receiving_fumbles as number,
//           receivingFumblesLost: data.receiving_fumbles_lost as number,
//           receivingAirYards: data.receiving_air_yards as number,
//           receivingYardsAfterCatch: data.receiving_yards_after_catch as number,
//           receivingFirstDowns: data.receiving_first_downs as number,
//           receivingEpa: data.receiving_epa as number,
//           receiving2ptConversions: data.receiving_2pt_conversions as number,
//           racr: data.racr as number,
//           targetShare: data.target_share as number,
//           airYardsShare: data.air_yards_share as number,
//           wopr: data.wopr as number,
//           specialTeamsTds: data.special_teams_tds as number,
//           fantasyPoints: data.fantasy_points as number,
//           fantasyPointsPpr: data.fantasy_points_ppr as number,
//         },
//       });
//     } catch (error) {
//       console.error('Error importing player stat:', data, error);
//     }
//   }
//   console.log('Player Stats import complete.');
// }

// async function main() {
//   await importPlayerStats();
// }

// main()
//   .catch(e => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });