import * as fs from 'fs';
import * as path from 'path';

const playerGamesDataPath = path.join(__dirname, './player_stats.csv');

const dataWorker = () => {
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
    return jsonData; // Return the array of objects
};

dataWorker();

export default dataWorker;