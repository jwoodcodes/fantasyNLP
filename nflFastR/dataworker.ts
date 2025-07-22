import { PrismaClient } from '../app/generated/prisma';

const prisma = new PrismaClient();

const dataWorker = async () => {
  // Fetch all player stats from the database
  const playerStats = await prisma.playerStat.findMany({
    where: {
      season: 2024,
      week: 1,
    },
  });

  const combinedData = playerStats.map(player => {
    // Since ReceivingStat model is removed, these fields will be null
    const holder = {
      ...player,
      routes: null,
      yprr: null,
      tprr: null,
      firstDRR: null,
      adot: null,
      routePercent: null,
      yac: null,
      yacPerRec: null,
    };

    return holder;
  });

  console.log(combinedData);
  return combinedData;
};

dataWorker()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export default dataWorker;
