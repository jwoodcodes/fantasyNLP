import { PrismaClient } from '../app/generated/prisma';
import * as fs from 'fs';
import * as Papa from 'papaparse';

const prisma = new PrismaClient();
const finalPlayerSeasonsPath = './final_player_seasons.csv';

async function seedPlayerSeasons() {
  try {
    console.log('Starting player season data seeding from CSV...');

    const csvFile = fs.readFileSync(finalPlayerSeasonsPath, 'utf8');

    const playerSeasonData: any[] = await new Promise((resolve, reject) => {
      Papa.parse(csvFile, {
        header: true,
        dynamicTyping: true,
        transform: (value: string, field: string) => {
          if (value === 'NA' || value === 'N/A' || value === '') {
            return null;
          }
          // Attempt to convert to number if it's a numeric field
          if (!isNaN(Number(value)) && typeof value === 'string') {
            return Number(value);
          }
          return value;
        },
        complete: (results) => {
          resolve(results.data);
        },
        error: (err: Error) => {
          reject(err);
        }
      });
    });

    console.log(`Attempting to seed ${playerSeasonData.length} player season entries...`);

    const batchSize = 100;
    for (let i = 0; i < playerSeasonData.length; i += batchSize) {
      const batch = playerSeasonData.slice(i, i + batchSize);
      console.log(`Seeding batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(playerSeasonData.length / batchSize)} with ${batch.length} entries...`);
      
      for (const data of batch) {
        // Ensure player_id and season are not null before upserting
        if (data.player_id && data.season) {
          await prisma.playerSeason.upsert({
            where: { player_id_season: { player_id: data.player_id, season: data.season } },
            update: data,
            create: data,
          });
        } else {
          console.warn(`Skipping entry due to missing player_id or season: ${JSON.stringify(data)}`);
        }
      }
      console.log(`Seeded ${batch.length} entries in this batch.`);
    }

    console.log(`All player season entries seeded successfully.`);
  } catch (error) {
    console.error('Error seeding player season data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedPlayerSeasons();