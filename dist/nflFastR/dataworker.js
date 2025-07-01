"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../app/generated/prisma");
const prisma = new prisma_1.PrismaClient();
const dataWorker = async () => {
    // Fetch all player stats from the database
    const playerStats = await prisma.playerStat.findMany({
        where: {
            season: 2024,
            week: 1,
        },
    });
    // Fetch all receiving stats from the database
    const receivingStats = await prisma.receivingStat.findMany({});
    // Create a map for quick lookup of receiving stats by player display name
    const receivingStatsMap = new Map();
    receivingStats.forEach(stat => {
        if (stat.player) {
            receivingStatsMap.set(stat.player, stat);
        }
    });
    const combinedData = playerStats.map(player => {
        const matchingRoute = receivingStatsMap.get(player.playerDisplayName);
        // Combine data, similar to your original logic
        const holder = {
            ...player,
            routes: matchingRoute?.routes || null,
            yprr: matchingRoute?.yprr || null,
            tprr: (matchingRoute?.targets && matchingRoute?.routes) ?
                (Number(matchingRoute.targets) / Number(matchingRoute.routes)) : null,
            firstDRR: (player.receivingFirstDowns && matchingRoute?.routes) ?
                (Number(player.receivingFirstDowns) / Number(matchingRoute.routes)) : null,
            adot: matchingRoute?.avgDepthOfTarget || null,
            routePercent: matchingRoute?.routeRate || null,
            yac: matchingRoute?.yardsPerReception || null,
            yacPerRec: matchingRoute?.yardsAfterCatchPerReception || null,
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
exports.default = dataWorker;
