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

// async function importReceivingStats() {
//   const wr24Wk1Withroutes = path.join(__dirname, './secondarySource/24-wk1-receiving_summary.csv');
//   const wr24Wk1WithroutesData = fs.readFileSync(wr24Wk1Withroutes, 'utf8');
//   const wr24Wk1WithroutesRows = wr24Wk1WithroutesData.split('\n').map(row => row.split(','));

//   const wr24Wk1WithroutesHeaders = wr24Wk1WithroutesRows[0].map(header => header.replace(/"/g, '').trim());

//   const wr24Wk1WithroutesJsonData = wr24Wk1WithroutesRows.slice(1).map(row => {
//     const obj: { [key: string]: string | number | null } = {};
//     wr24Wk1WithroutesHeaders.forEach((header, index) => {
//       let value: string | number | null = row[index]?.replace(/"/g, '').trim();
//       if (value === 'NA' || value === '') {
//         value = null;
//       } else if (['player_game_count', 'avoided_tackles', 'contested_receptions', 'contested_targets', 'declined_penalties', 'drops', 'first_downs', 'franchise_id', 'fumbles', 'inline_snaps', 'interceptions', 'longest', 'pass_blocks', 'pass_plays', 'penalties', 'receptions', 'routes', 'slot_snaps', 'targets', 'touchdowns', 'wide_snaps', 'yards', 'yards_after_catch'].includes(header)) {
//         value = value !== null ? parseInt(value as string, 10) : null;
//       } else if (['avg_depth_of_target', 'caught_percent', 'contested_catch_rate', 'drop_rate', 'grades_hands_drop', 'grades_hands_fumble', 'grades_offense', 'grades_pass_block', 'grades_pass_route', 'inline_rate', 'pass_block_rate', 'route_rate', 'slot_rate', 'targeted_qb_rating', 'targets', 'touchdowns', 'wide_rate', 'wide_snaps', 'yards', 'yards_after_catch_per_reception', 'yards_per_reception', 'yprr'].includes(header)) {
//         value = value !== null ? parseFloat(value as string) : null;
//       }
//       obj[header] = value;
//     });
//     return obj;
//   });

//   console.log('Importing Receiving Stats...');
//   for (const data of wr24Wk1WithroutesJsonData) {
//     try {
//       await prisma.receivingStat.create({
//         data: {
//           player: data.player as string,
//           playerId: data.player_id as string,
//           position: data.position as string,
//           teamName: data.team_name as string,
//           playerGameCount: data.player_game_count as number,
//           avgDepthOfTarget: data.avg_depth_of_target as number,
//           avoidedTackles: data.avoided_tackles as number,
//           caughtPercent: data.caught_percent as number,
//           contestedCatchRate: data.contested_catch_rate as number,
//           contestedReceptions: data.contested_receptions as number,
//           contestedTargets: data.contested_targets as number,
//           declinedPenalties: data.declined_penalties as number,
//           dropRate: data.drop_rate as number,
//           drops: data.drops as number,
//           firstDowns: data.first_downs as number,
//           franchiseId: data.franchise_id as number,
//           fumbles: data.fumbles as number,
//           gradesHandsDrop: data.grades_hands_drop as number,
//           gradesHandsFumble: data.grades_hands_fumble as number,
//           gradesOffense: data.grades_offense as number,
//           gradesPassBlock: data.grades_pass_block as number,
//           gradesPassRoute: data.grades_pass_route as number,
//           inlineRate: data.inline_rate as number,
//           inlineSnaps: data.inline_snaps as number,
//           interceptions: data.interceptions as number,
//           longest: data.longest as number,
//           passBlockRate: data.pass_block_rate as number,
//           passBlocks: data.pass_blocks as number,
//           passPlays: data.pass_plays as number,
//           penalties: data.penalties as number,
//           receptions: data.receptions as number,
//           routeRate: data.route_rate as number,
//           routes: data.routes as number,
//           slotRate: data.slot_rate as number,
//           slotSnaps: data.slot_snaps as number,
//           targetedQbRating: data.targeted_qb_rating as number,
//           targets: data.targets as number,
//           touchdowns: data.touchdowns as number,
//           wideRate: data.wide_rate as number,
//           wideSnaps: data.wide_snaps as number,
//           yards: data.yards as number,
//           yardsAfterCatch: data.yards_after_catch as number,
//           yardsAfterCatchPerReception: data.yards_after_catch_per_reception as number,
//           yardsPerReception: data.yards_per_reception as number,
//           yprr: data.yprr as number,
//         },
//       });
//     } catch (error) {
//       console.error('Error importing receiving stat:', data, error);
//     }
//   }
//   console.log('Receiving Stats import complete.');
// }

// async function main() {
//   await importPlayerStats();
//   await importReceivingStats();
// }

// main()
//   .catch(e => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });