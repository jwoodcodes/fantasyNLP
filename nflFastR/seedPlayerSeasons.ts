import { PrismaClient } from '../app/generated/prisma';
import { getCompleteSeasonalStats, PlayerSeasonStats } from './processStats';

const prisma = new PrismaClient();

async function seedPlayerSeasons() {
  try {
    console.log('Starting player season data processing...');
    const seasonalStats = await getCompleteSeasonalStats();

    const playerSeasonData: PlayerSeasonStats[] = Object.values(seasonalStats);

    console.log(`Attempting to seed ${playerSeasonData.length} player season entries...`);

    const batchSize = 100; // Reduced batch size
    for (let i = 0; i < playerSeasonData.length; i += batchSize) {
      const batch = playerSeasonData.slice(i, i + batchSize);
      console.log(`Seeding batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(playerSeasonData.length / batchSize)} with ${batch.length} entries...`);
      
      for (const data of batch) {
        await prisma.playerSeason.upsert({
          where: { player_id_season: { player_id: data.player_id, season: data.season } },
          update: data,
          create: data,
        });
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
