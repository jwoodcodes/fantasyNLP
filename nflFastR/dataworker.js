"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var playerGamesDataPath = path.join(__dirname, './player_stats.csv');
var dataWorker = function () {
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
    console.log(jsonData); // Log the array of objects
    return jsonData; // Return the array of objects
};
dataWorker();
exports.default = dataWorker;
