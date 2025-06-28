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
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var playerGamesDataPath = path.join(__dirname, './player_stats.csv');
var wr24Wk1Withroutes = path.join(__dirname, './24-wk1-receiving_summary.csv');
var dataWorker = function () {
    var wr24Wk1WithroutesData = fs.readFileSync(wr24Wk1Withroutes, 'utf8');
    var wr24Wk1WithroutesRows = wr24Wk1WithroutesData.split('\n').map(function (row) { return row.split(','); });
    // Extract headers from the first row
    var wr24Wk1WithroutesHeaders = wr24Wk1WithroutesRows[0].map(function (header) { return header.replace(/"/g, '').trim(); }); // Remove quotes and trim whitespace
    var wr24Wk1WithroutesJsonData = wr24Wk1WithroutesRows.slice(1).map(function (row) {
        var obj = {};
        row.forEach(function (value, index) {
            obj[wr24Wk1WithroutesHeaders[index]] = value.replace(/"/g, '').trim(); // Remove quotes and trim whitespace
        });
        return obj;
    });
    // console.log(wr24Wk1WithroutesJsonData)
    var csvData = fs.readFileSync(playerGamesDataPath, 'utf8');
    var rows = csvData.split('\n').map(function (row) { return row.split(','); });
    // Extract headers from the first row
    var headers = rows[0].map(function (header) { return header.replace(/"/g, '').trim(); }); // Remove quotes and trim whitespace
    // Map the remaining rows to objects
    var jsonData = rows.slice(1).map(function (row) {
        var obj = {};
        row.forEach(function (value, index) {
            obj[headers[index]] = value.replace(/"/g, '').trim(); // Remove quotes and trim whitespace
        });
        return obj;
    });
    // console.log(jsonData); // Log the array of objects
    var combinedData = jsonData.map(function (player) {
        // console.log(player.season, Number(player.season))
        if (Number(player.season) === 2024 && Number(player.week) === 1) {
            var matchingRoute = wr24Wk1WithroutesJsonData.find(function (route) { return route.player === player.player_display_name; });
            // console.log(matchingRoute);
            // console.log(player);
            var holder = __assign(__assign({}, player), { routes: matchingRoute === null || matchingRoute === void 0 ? void 0 : matchingRoute.routes, yprr: matchingRoute === null || matchingRoute === void 0 ? void 0 : matchingRoute.yprr, tprr: (matchingRoute === null || matchingRoute === void 0 ? void 0 : matchingRoute.targets) && (matchingRoute === null || matchingRoute === void 0 ? void 0 : matchingRoute.routes) ?
                    (Number(matchingRoute.targets) / Number(matchingRoute.routes)) : null, firstDRR: (Number(player.receiving_first_downs) / Number(matchingRoute === null || matchingRoute === void 0 ? void 0 : matchingRoute.routes)), adot: matchingRoute === null || matchingRoute === void 0 ? void 0 : matchingRoute.avg_depth_of_target, routePercent: matchingRoute === null || matchingRoute === void 0 ? void 0 : matchingRoute.route_rate, yac: matchingRoute === null || matchingRoute === void 0 ? void 0 : matchingRoute.yards_per_reception, yacPerRec: matchingRoute === null || matchingRoute === void 0 ? void 0 : matchingRoute.yards_after_catch_per_reception });
            console.log(holder);
            return holder;
        }
    });
    // console.log(combinedData);
    return combinedData; // Return the array of objects
};
dataWorker();
exports.default = dataWorker;
