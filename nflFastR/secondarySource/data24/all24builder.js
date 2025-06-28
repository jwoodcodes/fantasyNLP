var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var fs = require('fs');
var path = require('path');
var wholeObjectArray = []; // Explicitly define the type
//
//// week 1
//
var rec24wk1 = path.join(__dirname, './rec24wk1.csv');
var allRec24Wk1 = fs.readFileSync(rec24wk1, 'utf8');
var rec24Wk1Rows = allRec24Wk1.split('\n').map(function (row) { return row.split(','); });
// Extract headers from the first row
var rec24Wk1Headers = rec24Wk1Rows[0].map(function (header) { return header.replace(/"/g, '').trim(); });
var rec24Wk1JsonData = rec24Wk1Rows.slice(1).map(function (row) {
    var obj = {}; // Use the interface for type assertion
    row.forEach(function (value, index) {
        var key = rec24Wk1Headers[index]; // Assert the key type
        obj[key] = value.replace(/"/g, '').trim(); // Remove quotes and trim whitespace
    });
    obj.season = '2024';
    obj.week = '1';
    return obj;
});
// console.log(rec24Wk1JsonData);
//
//// end week 1
//
//
//// week 2
//
var rec24wk2 = path.join(__dirname, './rec24wk2.csv');
var allRec24Wk2 = fs.readFileSync(rec24wk2, 'utf8');
var rec24Wk2Rows = allRec24Wk2.split('\n').map(function (row) { return row.split(','); });
// Extract headers from the first row
var rec24Wk2Headers = rec24Wk2Rows[0].map(function (header) { return header.replace(/"/g, '').trim(); });
var rec24Wk2JsonData = rec24Wk2Rows.slice(1).map(function (row) {
    var obj = {}; // Use the interface for type assertion
    row.forEach(function (value, index) {
        var key = rec24Wk2Headers[index]; // Assert the key type
        obj[key] = value.replace(/"/g, '').trim(); // Remove quotes and trim whitespace
    });
    obj.season = '2024';
    obj.week = '2';
    return obj;
});
// console.log(rec24Wk2JsonData);
//
//// end of week 2
//
wholeObjectArray = __spreadArray(__spreadArray(__spreadArray([], wholeObjectArray, true), rec24Wk1JsonData, true), rec24Wk2JsonData, true);
console.log(wholeObjectArray);
