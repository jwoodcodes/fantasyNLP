"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompleteWeeklyStats = getCompleteWeeklyStats;
var fs = require("fs");
var Papa = require("papaparse");
var csvFilePath = './nflFastR/player_stats.csv';
var weeklyPlayerStatsPath = './weekly_player_stats.csv';
function getCompleteWeeklyStats() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log("Entering getCompleteWeeklyStats");
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var csvFile = fs.readFileSync(csvFilePath, 'utf8');
                    Papa.parse(csvFile, {
                        header: true,
                        dynamicTyping: true,
                        transform: function (value, field) {
                            if (value === 'NA' || value === 'N/A') {
                                return null; // Convert 'NA' to null
                            }
                            if (!isNaN(Number(value)) && typeof value === 'string' && value.trim() !== '') {
                                return Number(value);
                            }
                            return value;
                        },
                        complete: function (results) {
                            var data = results.data;
                            var weeklyStats = [];
                            data.forEach(function (game, index) {
                                // Generate a unique ID for each weekly stat entry
                                var id = "weekly-".concat(game.player_id, "-").concat(game.season, "-").concat(game.week, "-").concat(index);
                                var playerStat = {
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
                        error: function (err) {
                            reject(err);
                        }
                    });
                })];
        });
    });
}
// Call the main function to execute the data processing and save to CSV
getCompleteWeeklyStats().then(function (data) {
    var csv = Papa.unparse(data);
    fs.writeFileSync(weeklyPlayerStatsPath, csv, 'utf8');
    console.log("Weekly player stats written to ".concat(weeklyPlayerStatsPath));
    console.log("Last 10 entries of weekly player data:");
    console.log(data.slice(-10));
}).catch(function (error) {
    console.error("Error during weekly player data processing:", error);
});
