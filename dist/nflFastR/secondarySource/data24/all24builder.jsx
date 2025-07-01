"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
let wholeObjectArray = []; // Explicitly define the type
//
//// week 1
//
const rec24wk1 = path.join(__dirname, './rec24wk1.csv');
const allRec24Wk1 = fs.readFileSync(rec24wk1, 'utf8');
const rec24Wk1Rows = allRec24Wk1.split('\n').map((row) => row.split(','));
// Extract headers from the first row
const rec24Wk1Headers = rec24Wk1Rows[0].map((header) => header.replace(/"/g, '').trim());
const rec24Wk1JsonData = rec24Wk1Rows.slice(1).map((row) => {
    const obj = {}; // Use the interface for type assertion
    row.forEach((value, index) => {
        const key = rec24Wk1Headers[index]; // Assert the key type
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
const rec24wk2 = path.join(__dirname, './rec24wk2.csv');
const allRec24Wk2 = fs.readFileSync(rec24wk2, 'utf8');
const rec24Wk2Rows = allRec24Wk2.split('\n').map((row) => row.split(','));
// Extract headers from the first row
const rec24Wk2Headers = rec24Wk2Rows[0].map((header) => header.replace(/"/g, '').trim());
const rec24Wk2JsonData = rec24Wk2Rows.slice(1).map((row) => {
    const obj = {}; // Use the interface for type assertion
    row.forEach((value, index) => {
        const key = rec24Wk2Headers[index]; // Assert the key type
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
wholeObjectArray = [...wholeObjectArray, ...rec24Wk1JsonData, ...rec24Wk2JsonData];
// console.log(wholeObjectArray)
