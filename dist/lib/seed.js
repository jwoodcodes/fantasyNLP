"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = seed;
const postgres_1 = require("@vercel/postgres");
const fs_1 = __importDefault(require("fs"));
const csv_parser_1 = __importDefault(require("csv-parser"));
const path_1 = __importDefault(require("path"));
require("dotenv/config");
function parseDate(dateString) {
    const parts = dateString.split('/');
    if (parts.length === 3) {
        const day = parts[0].padStart(2, '0');
        const month = parts[1].padStart(2, '0');
        const year = parts[2];
        return `${year}-${month}-${day}`;
    }
    console.warn(`Could not parse date: ${dateString}`);
    throw Error();
}
async function seed() {
    const createTable = await (0, postgres_1.sql) `
    CREATE TABLE IF NOT EXISTS unicorns (
      id SERIAL PRIMARY KEY,
      company VARCHAR(255) NOT NULL UNIQUE,
      valuation DECIMAL(10, 2) NOT NULL,
      date_joined DATE,
      country VARCHAR(255) NOT NULL,
      city VARCHAR(255) NOT NULL,
      industry VARCHAR(255) NOT NULL,
      select_investors TEXT NOT NULL
    );
  `;
    console.log(`Created "unicorns" table`);
    const results = [];
    const csvFilePath = path_1.default.join(process.cwd(), 'unicorns.csv');
    await new Promise((resolve, reject) => {
        fs_1.default.createReadStream(csvFilePath)
            .pipe((0, csv_parser_1.default)())
            .on('data', (data) => results.push(data))
            .on('end', resolve)
            .on('error', reject);
    });
    for (const row of results) {
        const formattedDate = parseDate(row['Date Joined']);
        await (0, postgres_1.sql) `
      INSERT INTO unicorns (company, valuation, date_joined, country, city, industry, select_investors)
      VALUES (
        ${row.Company},
        ${parseFloat(row['Valuation ($B)'].replace('$', '').replace(',', ''))},
        ${formattedDate},
        ${row.Country},
        ${row.City},
        ${row.Industry},
        ${row['Select Investors']}
      )
      ON CONFLICT (company) DO NOTHING;
    `;
    }
    console.log(`Seeded ${results.length} unicorns`);
    return {
        createTable,
        unicorns: results,
    };
}
seed().catch(console.error);
