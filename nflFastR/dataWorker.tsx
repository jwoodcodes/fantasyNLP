import * as fs from 'fs';
import * as path from 'path';

const playerGamesDataPath = path.join(__dirname, './player_stats.csv');
 const wr24Wk1Withroutes = path.join(__dirname, './secondarySource/24-wk1-receiving_summary.csv');



const dataWorker = () => {

    const wr24Wk1WithroutesData = fs.readFileSync(wr24Wk1Withroutes, 'utf8');
    const wr24Wk1WithroutesRows = wr24Wk1WithroutesData.split('\n').map(row => row.split(','));
    // Extract headers from the first row
    const wr24Wk1WithroutesHeaders = wr24Wk1WithroutesRows[0].map(header => header.replace(/"/g, '').trim()); // Remove quotes and trim whitespace
    const wr24Wk1WithroutesJsonData = wr24Wk1WithroutesRows.slice(1).map(row => {
        const obj: { [key: string]: string } = {};
        row.forEach((value, index) => {
            obj[wr24Wk1WithroutesHeaders[index]] = value.replace(/"/g, '').trim(); // Remove quotes and trim whitespace
        });
        return obj;
    });
    // console.log(wr24Wk1WithroutesJsonData)

    const csvData = fs.readFileSync(playerGamesDataPath, 'utf8');
    const rows = csvData.split('\n').map(row => row.split(','));

    // Extract headers from the first row
    const headers = rows[0].map(header => header.replace(/"/g, '').trim()); // Remove quotes and trim whitespace

    // Map the remaining rows to objects
    const jsonData = rows.slice(1).map(row => {
        const obj: { [key: string]: string } = {};
        row.forEach((value, index) => {
            obj[headers[index]] = value.replace(/"/g, '').trim(); // Remove quotes and trim whitespace
        });
        return obj;
    });
    
    // console.log(jsonData); // Log the array of objects

    const combinedData = jsonData.map(player => {
        // console.log(player.season, Number(player.season))
        if (Number(player.season) === 2024 && Number(player.week) === 1) {
            const matchingRoute = wr24Wk1WithroutesJsonData.find(route => route.player === player.player_display_name);
            // console.log(matchingRoute);
            // console.log(player);
            let holder = 
            {
                ...player,
                routes: matchingRoute?.routes,
                yprr: matchingRoute?.yprr,
                tprr: matchingRoute?.targets && matchingRoute?.routes ? 
                      (Number(matchingRoute.targets) / Number(matchingRoute.routes)) : null,
                firstDRR: (Number(player.receiving_first_downs) / Number(matchingRoute?.routes)),
                adot: matchingRoute?.avg_depth_of_target,
                routePercent: matchingRoute?.route_rate,
                yac: matchingRoute?.yards_per_reception,
                yacPerRec: matchingRoute?.yards_after_catch_per_reception,
            };
           
            // console.log(holder)
            return holder;
        }
        
    });

    // console.log(combinedData);
    
    return combinedData; // Return the array of objects
};

dataWorker();

export default dataWorker;