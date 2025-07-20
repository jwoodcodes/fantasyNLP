import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting data seeding for PlayerSeason and TeamSeasonStats...');

  // Seed PlayerSeason data
  const playerSeasonsCsvPath = path.join(__dirname, '../finalPlayerSeasons.csv');
  const playerRecords: any[] = [];

  await new Promise<void>((resolve, reject) => {
    fs.createReadStream(playerSeasonsCsvPath)
      .pipe(parse({ columns: true, skip_empty_lines: true }))
      .on('data', (data) => playerRecords.push(data))
      .on('end', () => resolve())
      .on('error', (err) => reject(err));
  });

  for (const record of playerRecords) {
    // Convert relevant fields to numbers
    for (const key in record) {
      if (record.hasOwnProperty(key) && !isNaN(Number(record[key])) && typeof record[key] === 'string' && record[key].trim() !== '') {
        record[key] = Number(record[key]);
      }
    }

    // Ensure player_id and season are correctly typed for the unique constraint
    record.player_id = String(record.player_id);
    record.season = Number(record.season);

    // Remove empty strings or nulls for optional fields to avoid Prisma errors
    for (const key in record) {
      if (record.hasOwnProperty(key) && (record[key] === '' || record[key] === null)) {
        delete record[key];
      }
    }

    try {
      await prisma.playerSeason.upsert({
        where: { player_id_season: { player_id: record.player_id, season: record.season } },
        update: record,
        create: record,
      });
      console.log(`Upserted PlayerSeason for ${record.player_name} (${record.player_id}) in ${record.season}`);
    } catch (error) {
      console.error(`Error upserting PlayerSeason for ${record.player_name} (${record.player_id}) in ${record.season}:`, error);
    }
  }

  // Seed TeamSeasonStats data
  const teamSeasonStatsCsvPath = path.join(__dirname, '../team_season_stats_2017_2024.csv');
  const teamRecords: any[] = [];

  await new Promise<void>((resolve, reject) => {
    fs.createReadStream(teamSeasonStatsCsvPath)
      .pipe(parse({ columns: true, skip_empty_lines: true }))
      .on('data', (data) => teamRecords.push(data))
      .on('end', () => resolve())
      .on('error', (err) => reject(err));
  });

  for (const record of teamRecords) {
    // Convert relevant fields to numbers
    for (const key in record) {
      if (record.hasOwnProperty(key) && !isNaN(Number(record[key])) && typeof record[key] === 'string' && record[key].trim() !== '') {
        record[key] = Number(record[key]);
      }
    }

    // Ensure team and season are correctly typed for the unique constraint
    record.team = String(record.team);
    record.season = Number(record.season);

    // Remove empty strings or nulls for optional fields to avoid Prisma errors
    for (const key in record) {
      if (record.hasOwnProperty(key) && (record[key] === '' || record[key] === null)) {
        delete record[key];
      }
    }

    try {
      await prisma.teamSeasonStats.upsert({
        where: { team_season: { team: record.team, season: record.season } },
        update: record,
        create: record,
      });
      console.log(`Upserted TeamSeasonStats for ${record.team} in ${record.season}`);
    } catch (error) {
      console.error(`Error upserting TeamSeasonStats for ${record.team} in ${record.season}:`, error);
    }
  }

  console.log('Data seeding complete.');
  await prisma.$disconnect();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
