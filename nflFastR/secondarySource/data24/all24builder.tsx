const fs = require('fs');
const path = require('path');

// Define the interface for the objects in the array
interface PlayerData {
    player: string,
    player_id: string;
    position: string;
    team_name: string
    player_game_count: string,
    avg_depth_of_target: string,
    avoided_tackles: string,
    caught_percent: string,
    contested_catch_rate: string,
    contested_receptions: string,
    contested_targets: string,
    declined_penalties: string,
    drop_rate: string,
    drops: string,
    first_downs: string,
    franchise_id: string,
    fumbles: string,
    grades_hands_drop: string,
    grades_hands_fumble: string,
    grades_offense: string,
    grades_pass_block: string,
    grades_pass_route: string,
    inline_rate: string,
    inline_snaps: string,
    interceptions: string,
    longest: string,
    pass_block_rate: string,
    pass_blocks: string,
    pass_plays: string,
    penalties: string,
    receptions: string,
    route_rate: string,
    routes: string,
    slot_rate: string,
    slot_snaps: string,
    targeted_qb_rating: string,
    targets: string,
    touchdowns: string,
    wide_rate: string,
    wide_snaps: string,
    yards: string,
    yards_after_catch: string,
    yards_after_catch_per_reception: string,
    yards_per_reception: string,
    yprr: string,
    passAdot?: string,
    avgTimeToThrow?: string,
    passYPA?: string,
    scrambles?: string,
    season: string,
    week: string
}







let wholeObjectArray: PlayerData[] = []; // Explicitly define the type

//
//// week 1
//

               
const rec24wk1 = path.join(__dirname, './rec24wk1.csv');

const allRec24Wk1 = fs.readFileSync(rec24wk1, 'utf8');
const rec24Wk1Rows: string[][] = allRec24Wk1.split('\n').map((row: string) => row.split(','));

// Extract headers from the first row
const rec24Wk1Headers: string[] = rec24Wk1Rows[0].map((header: string) => header.replace(/"/g, '').trim());
const rec24Wk1JsonData = rec24Wk1Rows.slice(1).map((row: string[]) => {
    const obj: PlayerData = {} as PlayerData; // Use the interface for type assertion
    row.forEach((value: string, index: number) => {
        const key = rec24Wk1Headers[index] as keyof PlayerData; // Assert the key type
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
const rec24Wk2Rows: string[][] = allRec24Wk2.split('\n').map((row: string) => row.split(','));

// Extract headers from the first row
const rec24Wk2Headers: string[] = rec24Wk2Rows[0].map((header: string) => header.replace(/"/g, '').trim());
const rec24Wk2JsonData = rec24Wk2Rows.slice(1).map((row: string[]) => {
    const obj: PlayerData = {} as PlayerData; // Use the interface for type assertion
    row.forEach((value: string, index: number) => {
        const key = rec24Wk2Headers[index] as keyof PlayerData; // Assert the key type
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