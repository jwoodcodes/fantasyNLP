// "use strict";
// var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
//     function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
//     return new (P || (P = Promise))(function (resolve, reject) {
//         function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
//         function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
//         function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
//         step((generator = generator.apply(thisArg, _arguments || [])).next());
//     });
// };
// var __generator = (this && this.__generator) || function (thisArg, body) {
//     var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
//     return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
//     function verb(n) { return function (v) { return step([n, v]); }; }
//     function step(op) {
//         if (f) throw new TypeError("Generator is already executing.");
//         while (g && (g = 0, op[0] && (_ = 0)), _) try {
//             if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
//             if (y = 0, t) op = [op[0] & 2, t.value];
//             switch (op[0]) {
//                 case 0: case 1: t = op; break;
//                 case 4: _.label++; return { value: op[1], done: false };
//                 case 5: _.label++; y = op[1]; op = [0]; continue;
//                 case 7: op = _.ops.pop(); _.trys.pop(); continue;
//                 default:
//                     if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
//                     if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
//                     if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
//                     if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
//                     if (t[2]) _.ops.pop();
//                     _.trys.pop(); continue;
//             }
//             op = body.call(thisArg, _);
//         } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
//         if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
//     }
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// var prisma_1 = require("../app/generated/prisma");
// var fs = require("fs");
// var path = require("path");
// var prisma = new prisma_1.PrismaClient();
// function importPlayerStats() {
//     return __awaiter(this, void 0, void 0, function () {
//         var playerGamesDataPath, csvData, rows, headers, jsonData, _i, jsonData_1, data, error_1;
//         return __generator(this, function (_a) {
//             switch (_a.label) {
//                 case 0:
//                     playerGamesDataPath = path.join(__dirname, './player_stats.csv');
//                     csvData = fs.readFileSync(playerGamesDataPath, 'utf8');
//                     rows = csvData.split('\n').map(function (row) { return row.split(','); });
//                     headers = rows[0].map(function (header) { return header.replace(/"/g, '').trim(); });
//                     jsonData = rows.slice(1).map(function (row) {
//                         var obj = {};
//                         headers.forEach(function (header, index) {
//                             var _a;
//                             var value = (_a = row[index]) === null || _a === void 0 ? void 0 : _a.replace(/"/g, '').trim();
//                             if (value === 'NA' || value === '') {
//                                 value = null;
//                             }
//                             else if (['season', 'week', 'completions', 'attempts', 'passing_tds', 'interceptions', 'sacks', 'sack_fumbles', 'sack_fumbles_lost', 'passing_first_downs', 'passing_2pt_conversions', 'carries', 'rushing_tds', 'rushing_fumbles', 'rushing_fumbles_lost', 'rushing_first_downs', 'rushing_2pt_conversions', 'receptions', 'targets', 'receiving_tds', 'receiving_fumbles', 'receiving_fumbles_lost', 'receiving_first_downs', 'receiving_2pt_conversions', 'special_teams_tds'].includes(header)) {
//                                 value = value !== null ? parseInt(value, 10) : null;
//                             }
//                             else if (['passing_yards', 'sack_yards', 'passing_air_yards', 'passing_yards_after_catch', 'passing_epa', 'pacr', 'dakota', 'rushing_yards', 'rushing_epa', 'racr', 'receiving_yards', 'receiving_air_yards', 'receiving_yards_after_catch', 'receiving_epa', 'target_share', 'air_yards_share', 'wopr', 'fantasy_points', 'fantasy_points_ppr'].includes(header)) {
//                                 value = value !== null ? parseFloat(value) : null;
//                             }
//                             obj[header] = value;
//                         });
//                         return obj;
//                     });
//                     console.log('Importing Player Stats...');
//                     _i = 0, jsonData_1 = jsonData;
//                     _a.label = 1;
//                 case 1:
//                     if (!(_i < jsonData_1.length)) return [3 /*break*/, 6];
//                     data = jsonData_1[_i];
//                     _a.label = 2;
//                 case 2:
//                     _a.trys.push([2, 4, , 5]);
//                     return [4 /*yield*/, prisma.playerStat.create({
//                             data: {
//                                 playerId: data.player_id,
//                                 playerName: data.player_name,
//                                 playerDisplayName: data.player_display_name,
//                                 position: data.position,
//                                 positionGroup: data.position_group,
//                                 headshotUrl: data.headshot_url,
//                                 recentTeam: data.recent_team,
//                                 season: data.season,
//                                 week: data.week,
//                                 seasonType: data.season_type,
//                                 opponentTeam: data.opponent_team,
//                                 completions: data.completions,
//                                 attempts: data.attempts,
//                                 passingYards: data.passing_yards,
//                                 passingTds: data.passing_tds,
//                                 interceptions: data.interceptions,
//                                 sacks: data.sacks,
//                                 sackYards: data.sack_yards,
//                                 sackFumbles: data.sack_fumbles,
//                                 sackFumblesLost: data.sack_fumbles_lost,
//                                 passingAirYards: data.passing_air_yards,
//                                 passingYardsAfterCatch: data.passing_yards_after_catch,
//                                 passingFirstDowns: data.passing_first_downs,
//                                 passingEpa: data.passing_epa,
//                                 passing2ptConversions: data.passing_2pt_conversions,
//                                 pacr: data.pacr,
//                                 dakota: data.dakota,
//                                 carries: data.carries,
//                                 rushingYards: data.rushing_yards,
//                                 rushingTds: data.rushing_tds,
//                                 rushingFumbles: data.rushing_fumbles,
//                                 rushingFumblesLost: data.rushing_fumbles_lost,
//                                 rushingFirstDowns: data.rushing_first_downs,
//                                 rushingEpa: data.rushing_epa,
//                                 rushing2ptConversions: data.rushing_2pt_conversions,
//                                 receptions: data.receptions,
//                                 targets: data.targets,
//                                 receivingYards: data.receiving_yards,
//                                 receivingTds: data.receiving_tds,
//                                 receivingFumbles: data.receiving_fumbles,
//                                 receivingFumblesLost: data.receiving_fumbles_lost,
//                                 receivingAirYards: data.receiving_air_yards,
//                                 receivingYardsAfterCatch: data.receiving_yards_after_catch,
//                                 receivingFirstDowns: data.receiving_first_downs,
//                                 receivingEpa: data.receiving_epa,
//                                 receiving2ptConversions: data.receiving_2pt_conversions,
//                                 racr: data.racr,
//                                 targetShare: data.target_share,
//                                 airYardsShare: data.air_yards_share,
//                                 wopr: data.wopr,
//                                 specialTeamsTds: data.special_teams_tds,
//                                 fantasyPoints: data.fantasy_points,
//                                 fantasyPointsPpr: data.fantasy_points_ppr,
//                             },
//                         })];
//                 case 3:
//                     _a.sent();
//                     return [3 /*break*/, 5];
//                 case 4:
//                     error_1 = _a.sent();
//                     console.error('Error importing player stat:', data, error_1);
//                     return [3 /*break*/, 5];
//                 case 5:
//                     _i++;
//                     return [3 /*break*/, 1];
//                 case 6:
//                     console.log('Player Stats import complete.');
//                     return [2 /*return*/];
//             }
//         });
//     });
// }
// function importReceivingStats() {
//     return __awaiter(this, void 0, void 0, function () {
//         var wr24Wk1Withroutes, wr24Wk1WithroutesData, wr24Wk1WithroutesRows, wr24Wk1WithroutesHeaders, wr24Wk1WithroutesJsonData, _i, wr24Wk1WithroutesJsonData_1, data, error_2;
//         return __generator(this, function (_a) {
//             switch (_a.label) {
//                 case 0:
//                     wr24Wk1Withroutes = path.join(__dirname, './secondarySource/24-wk1-receiving_summary.csv');
//                     wr24Wk1WithroutesData = fs.readFileSync(wr24Wk1Withroutes, 'utf8');
//                     wr24Wk1WithroutesRows = wr24Wk1WithroutesData.split('\n').map(function (row) { return row.split(','); });
//                     wr24Wk1WithroutesHeaders = wr24Wk1WithroutesRows[0].map(function (header) { return header.replace(/"/g, '').trim(); });
//                     wr24Wk1WithroutesJsonData = wr24Wk1WithroutesRows.slice(1).map(function (row) {
//                         var obj = {};
//                         wr24Wk1WithroutesHeaders.forEach(function (header, index) {
//                             var _a;
//                             var value = (_a = row[index]) === null || _a === void 0 ? void 0 : _a.replace(/"/g, '').trim();
//                             if (value === 'NA' || value === '') {
//                                 value = null;
//                             }
//                             else if (['player_game_count', 'avoided_tackles', 'contested_receptions', 'contested_targets', 'declined_penalties', 'drops', 'first_downs', 'franchise_id', 'fumbles', 'inline_snaps', 'interceptions', 'longest', 'pass_blocks', 'pass_plays', 'penalties', 'receptions', 'routes', 'slot_snaps', 'targets', 'touchdowns', 'wide_snaps', 'yards', 'yards_after_catch'].includes(header)) {
//                                 value = value !== null ? parseInt(value, 10) : null;
//                             }
//                             else if (['avg_depth_of_target', 'caught_percent', 'contested_catch_rate', 'drop_rate', 'grades_hands_drop', 'grades_hands_fumble', 'grades_offense', 'grades_pass_block', 'grades_pass_route', 'inline_rate', 'pass_block_rate', 'route_rate', 'slot_rate', 'targeted_qb_rating', 'targets', 'touchdowns', 'wide_rate', 'wide_snaps', 'yards', 'yards_after_catch_per_reception', 'yards_per_reception', 'yprr'].includes(header)) {
//                                 value = value !== null ? parseFloat(value) : null;
//                             }
//                             obj[header] = value;
//                         });
//                         return obj;
//                     });
//                     console.log('Importing Receiving Stats...');
//                     _i = 0, wr24Wk1WithroutesJsonData_1 = wr24Wk1WithroutesJsonData;
//                     _a.label = 1;
//                 case 1:
//                     if (!(_i < wr24Wk1WithroutesJsonData_1.length)) return [3 /*break*/, 6];
//                     data = wr24Wk1WithroutesJsonData_1[_i];
//                     _a.label = 2;
//                 case 2:
//                     _a.trys.push([2, 4, , 5]);
//                     return [4 /*yield*/, prisma.receivingStat.create({
//                             data: {
//                                 player: data.player,
//                                 playerId: data.player_id,
//                                 position: data.position,
//                                 teamName: data.team_name,
//                                 playerGameCount: data.player_game_count,
//                                 avgDepthOfTarget: data.avg_depth_of_target,
//                                 avoidedTackles: data.avoided_tackles,
//                                 caughtPercent: data.caught_percent,
//                                 contestedCatchRate: data.contested_catch_rate,
//                                 contestedReceptions: data.contested_receptions,
//                                 contestedTargets: data.contested_targets,
//                                 declinedPenalties: data.declined_penalties,
//                                 dropRate: data.drop_rate,
//                                 drops: data.drops,
//                                 firstDowns: data.first_downs,
//                                 franchiseId: data.franchise_id,
//                                 fumbles: data.fumbles,
//                                 gradesHandsDrop: data.grades_hands_drop,
//                                 gradesHandsFumble: data.grades_hands_fumble,
//                                 gradesOffense: data.grades_offense,
//                                 gradesPassBlock: data.grades_pass_block,
//                                 gradesPassRoute: data.grades_pass_route,
//                                 inlineRate: data.inline_rate,
//                                 inlineSnaps: data.inline_snaps,
//                                 interceptions: data.interceptions,
//                                 longest: data.longest,
//                                 passBlockRate: data.pass_block_rate,
//                                 passBlocks: data.pass_blocks,
//                                 passPlays: data.pass_plays,
//                                 penalties: data.penalties,
//                                 receptions: data.receptions,
//                                 routeRate: data.route_rate,
//                                 routes: data.routes,
//                                 slotRate: data.slot_rate,
//                                 slotSnaps: data.slot_snaps,
//                                 targetedQbRating: data.targeted_qb_rating,
//                                 targets: data.targets,
//                                 touchdowns: data.touchdowns,
//                                 wideRate: data.wide_rate,
//                                 wideSnaps: data.wide_snaps,
//                                 yards: data.yards,
//                                 yardsAfterCatch: data.yards_after_catch,
//                                 yardsAfterCatchPerReception: data.yards_after_catch_per_reception,
//                                 yardsPerReception: data.yards_per_reception,
//                                 yprr: data.yprr,
//                             },
//                         })];
//                 case 3:
//                     _a.sent();
//                     return [3 /*break*/, 5];
//                 case 4:
//                     error_2 = _a.sent();
//                     console.error('Error importing receiving stat:', data, error_2);
//                     return [3 /*break*/, 5];
//                 case 5:
//                     _i++;
//                     return [3 /*break*/, 1];
//                 case 6:
//                     console.log('Receiving Stats import complete.');
//                     return [2 /*return*/];
//             }
//         });
//     });
// }
// function main() {
//     return __awaiter(this, void 0, void 0, function () {
//         return __generator(this, function (_a) {
//             switch (_a.label) {
//                 case 0: return [4 /*yield*/, importPlayerStats()];
//                 case 1:
//                     _a.sent();
//                     return [4 /*yield*/, importReceivingStats()];
//                 case 2:
//                     _a.sent();
//                     return [2 /*return*/];
//             }
//         });
//     });
// }
// main()
//     .catch(function (e) {
//     console.error(e);
//     process.exit(1);
// })
//     .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
//     return __generator(this, function (_a) {
//         switch (_a.label) {
//             case 0: return [4 /*yield*/, prisma.$disconnect()];
//             case 1:
//                 _a.sent();
//                 return [2 /*return*/];
//         }
//     });
// }); });
