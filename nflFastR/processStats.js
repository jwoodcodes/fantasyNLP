"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.getCompleteSeasonalStats = getCompleteSeasonalStats;
exports.getCompleteTeamSeasonalStats = getCompleteTeamSeasonalStats;
var fs = require("fs");
var papaparse_1 = require("papaparse");
var csvFilePath = './nflFastR/player_stats.csv';
var seasonRecStatsPath = './nflFastR/season_rec_stats_pff';
var teamSeasonStatsPath = './team_season_stats_2017_2024.csv';
var finalPlayerSeasonsPath = '../finalPlayerSeasons.csv';
var sanitizePlayerName = function (name) {
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
function getCompleteSeasonalStats() {
    return __awaiter(this, void 0, void 0, function () {
        var seasonalStats, processSeasonRecStats, seasonRecFiles, promises, finalPlayerSeasonsArray;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (resolve) {
                        var csvFile = fs.readFileSync(csvFilePath, 'utf8');
                        papaparse_1.default.parse(csvFile, {
                            header: true,
                            dynamicTyping: true,
                            complete: function (results) {
                                var data = results.data;
                                var seasonalStats = {};
                                data.forEach(function (game) {
                                    if (!game.player_id || !game.season) {
                                        return;
                                    }
                                    if (game.player_display_name) {
                                        game.player_name = game.player_display_name;
                                    }
                                    var sanitizedPlayerName = sanitizePlayerName(game.player_name);
                                    var key = "".concat(sanitizedPlayerName, "-").concat(game.season);
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
                                    for (var stat in game) {
                                        if (game.season_type === 'REG') {
                                            if (typeof game[stat] === 'number' &&
                                                stat !== 'season' &&
                                                stat !== 'week') {
                                                if (!seasonalStats[key]["".concat(stat, "_total")]) {
                                                    seasonalStats[key]["".concat(stat, "_total")] = 0;
                                                }
                                                seasonalStats[key]["".concat(stat, "_total")] += game[stat];
                                            }
                                        }
                                    }
                                });
                                var desiredProperties = [
                                    'player_id', 'player_name', 'position', 'season', 'games_played', 'completions_total', 'attempts_total', 'passing_yards_total',
                                    'passing_tds_total', 'interceptions_total', 'passing_first_downs_total', 'carries_total', 'rushing_yards_total',
                                    'rushing_tds_total', 'rushing_fumbles_total', 'rushing_fumbles_lost_total', 'rushing_first_downs_total', 'targets_total',
                                    'receiving_yards_total', 'receiving_tds_total', 'receiving_air_yards_total', 'receiving_yards_after_catch_total',
                                    'receiving_first_downs_total', 'fantasy_points_total', 'completions_avg', 'attempts_avg', 'passing_yards_avg', 'passing_tds_avg',
                                    'interceptions_avg', 'passing_air_yards_avg', 'passing_yards_after_catch_avg', 'passing_first_downs_avg', 'carries_avg',
                                    'rushing_yards_avg', 'rushing_tds_avg', 'rushing_fumbles_avg', 'rushing_fumbles_lost_avg', 'rushing_first_downs_avg',
                                    'receptions_avg', 'receptions_total', 'targets_avg', 'receiving_yards_avg', 'receiving_tds_avg', 'receiving_air_yards_avg',
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
                                var _loop_1 = function (key) {
                                    var playerSeason = seasonalStats[key];
                                    for (var stat in playerSeason) {
                                        if (stat.endsWith('_total')) {
                                            var baseStat = stat.replace('_total', '');
                                            var avg = playerSeason[stat] / playerSeason.games_played;
                                            playerSeason["".concat(baseStat, "_avg")] = parseFloat(avg.toFixed(2));
                                        }
                                    }
                                    var filteredPlayerSeason = {
                                        player_id: playerSeason.player_id,
                                        player_name: playerSeason.player_name,
                                        season: playerSeason.season,
                                        games_played: playerSeason.games_played,
                                    };
                                    desiredProperties.forEach(function (prop) {
                                        if (playerSeason.hasOwnProperty(prop)) {
                                            filteredPlayerSeason[prop] = playerSeason[prop];
                                        }
                                    });
                                    seasonalStats[key] = filteredPlayerSeason;
                                };
                                for (var key in seasonalStats) {
                                    _loop_1(key);
                                }
                                resolve(seasonalStats);
                            },
                        });
                    })];
                case 1:
                    seasonalStats = _a.sent();
                    console.log("Seasonal Stats populated:", Object.keys(seasonalStats).length);
                    processSeasonRecStats = function (filePath, seasonalStats) {
                        return new Promise(function (resolve) {
                            var csvFile = fs.readFileSync(filePath, 'utf8');
                            var fileName = filePath.split('/').pop();
                            var yearMatch = fileName === null || fileName === void 0 ? void 0 : fileName.match(/rec(\d{2})\.csv/);
                            var season;
                            if (yearMatch && yearMatch[1]) {
                                var yearTwoDigits = parseInt(yearMatch[1], 10);
                                season = 2000 + yearTwoDigits;
                            }
                            papaparse_1.default.parse(csvFile, {
                                header: true,
                                dynamicTyping: true,
                                complete: function (results) {
                                    var data = results.data;
                                    data.forEach(function (game) {
                                        if (season !== undefined) {
                                            game.season = season;
                                        }
                                        var sanitizedPlayerName = sanitizePlayerName(game.player);
                                        var key = "".concat(sanitizedPlayerName, "-").concat(game.season);
                                        if (seasonalStats[key]) {
                                            var matchedPlayer = seasonalStats[key];
                                            var routes = game.routes; // Assuming 'routes' is a property in the recXX.csv data
                                            var YPRR = game.yprr;
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
                                        }
                                        else {
                                            // console.log(`No match found for recXX.csv entry: Player=${game.player}, Sanitized=${sanitizedPlayerName}, Season=${game.season}, Key=${key}`);
                                        }
                                    });
                                    resolve();
                                },
                            });
                        });
                    };
                    seasonRecFiles = fs.readdirSync(seasonRecStatsPath);
                    promises = [];
                    seasonRecFiles.forEach(function (file) {
                        if (file.endsWith('.csv')) {
                            var filePath = "".concat(seasonRecStatsPath, "/").concat(file);
                            promises.push(processSeasonRecStats(filePath, seasonalStats));
                        }
                    });
                    return [4 /*yield*/, Promise.all(promises)];
                case 2:
                    _a.sent();
                    // Process all_downs_offensive_stats_1_3_2017_2024.csv
                    return [4 /*yield*/, new Promise(function (resolve) {
                            var csvFile = fs.readFileSync(allDownsOffensiveStatsPath, 'utf8');
                            papaparse_1.default.parse(csvFile, {
                                header: true,
                                dynamicTyping: true,
                                complete: function (results) {
                                    var data = results.data;
                                    data.forEach(function (row) {
                                        var key = "".concat(sanitizePlayerName(row.player_name), "-").concat(row.season);
                                        if (seasonalStats[key]) {
                                            // Merge all properties from the CSV row into the existing seasonalStats entry
                                            Object.assign(seasonalStats[key], row);
                                        }
                                        else {
                                            // If no existing entry, create a new one (this might happen if a player only has all_downs stats)
                                            seasonalStats[key] = __assign(__assign({}, row), { player_id: row.player_id, player_name: row.player_name, season: row.season });
                                        }
                                    });
                                    resolve();
                                },
                            });
                        })];
                case 3:
                    // Process all_downs_offensive_stats_1_3_2017_2024.csv
                    _a.sent();
                    finalPlayerSeasonsArray = Object.values(seasonalStats);
                    console.log(finalPlayerSeasonsArray.slice(-20));
                    return [2 /*return*/, seasonalStats];
            }
        });
    });
}
function getCompleteTeamSeasonalStats() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    var csvFile = fs.readFileSync(teamSeasonStatsPath, 'utf8');
                    papaparse_1.default.parse(csvFile, {
                        header: true,
                        dynamicTyping: true,
                        complete: function (results) {
                            var teamStats = {};
                            var data = results.data;
                            data.forEach(function (row) {
                                var key = "".concat(row.team, "-").concat(row.season);
                                teamStats[key] = row;
                            });
                            resolve(teamStats);
                        },
                    });
                })];
        });
    });
}
