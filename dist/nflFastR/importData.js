"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../app/generated/prisma");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const prisma = new prisma_1.PrismaClient();
async function importPlayerStats() {
    const playerGamesDataPath = path.join(__dirname, './player_stats.csv');
    const csvData = fs.readFileSync(playerGamesDataPath, 'utf8');
    const rows = csvData.split('\n').map(row => row.split(','));
    const headers = rows[0].map(header => header.replace(/"/g, '').trim());
    const jsonData = rows.slice(1).map(row => {
        const obj = {};
        headers.forEach((header, index) => {
            let value = row[index]?.replace(/"/g, '').trim();
            if (value === 'NA' || value === '') {
                value = null;
            }
            else if (['season', 'week', 'completions', 'attempts', 'passing_tds', 'interceptions', 'sacks', 'sack_fumbles', 'sack_fumbles_lost', 'passing_first_downs', 'passing_2pt_conversions', 'carries', 'rushing_tds', 'rushing_fumbles', 'rushing_fumbles_lost', 'rushing_first_downs', 'rushing_2pt_conversions', 'receptions', 'targets', 'receiving_tds', 'receiving_fumbles', 'receiving_fumbles_lost', 'receiving_first_downs', 'receiving_2pt_conversions', 'special_teams_tds'].includes(header)) {
                value = value !== null ? parseInt(value, 10) : null;
            }
            else if (['passing_yards', 'sack_yards', 'passing_air_yards', 'passing_yards_after_catch', 'passing_epa', 'pacr', 'dakota', 'rushing_yards', 'rushing_epa', 'racr', 'receiving_yards', 'receiving_air_yards', 'receiving_yards_after_catch', 'receiving_epa', 'target_share', 'air_yards_share', 'wopr', 'fantasy_points', 'fantasy_points_ppr'].includes(header)) {
                value = value !== null ? parseFloat(value) : null;
            }
            obj[header] = value;
        });
        return obj;
    });
    console.log('Importing Player Stats...');
    for (const data of jsonData) {
        try {
            await prisma.playerStat.create({
                data: {
                    playerId: data.player_id,
                    playerName: data.player_name,
                    playerDisplayName: data.player_display_name,
                    position: data.position,
                    positionGroup: data.position_group,
                    headshotUrl: data.headshot_url,
                    recentTeam: data.recent_team,
                    season: data.season,
                    week: data.week,
                    seasonType: data.season_type,
                    opponentTeam: data.opponent_team,
                    completions: data.completions,
                    attempts: data.attempts,
                    passingYards: data.passing_yards,
                    passingTds: data.passing_tds,
                    interceptions: data.interceptions,
                    sacks: data.sacks,
                    sackYards: data.sack_yards,
                    sackFumbles: data.sack_fumbles,
                    sackFumblesLost: data.sack_fumbles_lost,
                    passingAirYards: data.passing_air_yards,
                    passingYardsAfterCatch: data.passing_yards_after_catch,
                    passingFirstDowns: data.passing_first_downs,
                    passingEpa: data.passing_epa,
                    passing2ptConversions: data.passing_2pt_conversions,
                    pacr: data.pacr,
                    dakota: data.dakota,
                    carries: data.carries,
                    rushingYards: data.rushing_yards,
                    rushingTds: data.rushing_tds,
                    rushingFumbles: data.rushing_fumbles,
                    rushingFumblesLost: data.rushing_fumbles_lost,
                    rushingFirstDowns: data.rushing_first_downs,
                    rushingEpa: data.rushing_epa,
                    rushing2ptConversions: data.rushing_2pt_conversions,
                    receptions: data.receptions,
                    targets: data.targets,
                    receivingYards: data.receiving_yards,
                    receivingTds: data.receiving_tds,
                    receivingFumbles: data.receiving_fumbles,
                    receivingFumblesLost: data.receiving_fumbles_lost,
                    receivingAirYards: data.receiving_air_yards,
                    receivingYardsAfterCatch: data.receiving_yards_after_catch,
                    receivingFirstDowns: data.receiving_first_downs,
                    receivingEpa: data.receiving_epa,
                    receiving2ptConversions: data.receiving_2pt_conversions,
                    racr: data.racr,
                    targetShare: data.target_share,
                    airYardsShare: data.air_yards_share,
                    wopr: data.wopr,
                    specialTeamsTds: data.special_teams_tds,
                    fantasyPoints: data.fantasy_points,
                    fantasyPointsPpr: data.fantasy_points_ppr,
                },
            });
        }
        catch (error) {
            console.error('Error importing player stat:', data, error);
        }
    }
    console.log('Player Stats import complete.');
}
async function importReceivingStats() {
    const wr24Wk1Withroutes = path.join(__dirname, './secondarySource/24-wk1-receiving_summary.csv');
    const wr24Wk1WithroutesData = fs.readFileSync(wr24Wk1Withroutes, 'utf8');
    const wr24Wk1WithroutesRows = wr24Wk1WithroutesData.split('\n').map(row => row.split(','));
    const wr24Wk1WithroutesHeaders = wr24Wk1WithroutesRows[0].map(header => header.replace(/"/g, '').trim());
    const wr24Wk1WithroutesJsonData = wr24Wk1WithroutesRows.slice(1).map(row => {
        const obj = {};
        wr24Wk1WithroutesHeaders.forEach((header, index) => {
            let value = row[index]?.replace(/"/g, '').trim();
            if (value === 'NA' || value === '') {
                value = null;
            }
            else if (['player_game_count', 'avoided_tackles', 'contested_receptions', 'contested_targets', 'declined_penalties', 'drops', 'first_downs', 'franchise_id', 'fumbles', 'inline_snaps', 'interceptions', 'longest', 'pass_blocks', 'pass_plays', 'penalties', 'receptions', 'routes', 'slot_snaps', 'targets', 'touchdowns', 'wide_snaps', 'yards', 'yards_after_catch'].includes(header)) {
                value = value !== null ? parseInt(value, 10) : null;
            }
            else if (['avg_depth_of_target', 'caught_percent', 'contested_catch_rate', 'drop_rate', 'grades_hands_drop', 'grades_hands_fumble', 'grades_offense', 'grades_pass_block', 'grades_pass_route', 'inline_rate', 'pass_block_rate', 'route_rate', 'slot_rate', 'targeted_qb_rating', 'targets', 'touchdowns', 'wide_rate', 'wide_snaps', 'yards', 'yards_after_catch_per_reception', 'yards_per_reception', 'yprr'].includes(header)) {
                value = value !== null ? parseFloat(value) : null;
            }
            obj[header] = value;
        });
        return obj;
    });
    console.log('Importing Receiving Stats...');
    for (const data of wr24Wk1WithroutesJsonData) {
        try {
            await prisma.receivingStat.create({
                data: {
                    player: data.player,
                    playerId: data.player_id,
                    position: data.position,
                    teamName: data.team_name,
                    playerGameCount: data.player_game_count,
                    avgDepthOfTarget: data.avg_depth_of_target,
                    avoidedTackles: data.avoided_tackles,
                    caughtPercent: data.caught_percent,
                    contestedCatchRate: data.contested_catch_rate,
                    contestedReceptions: data.contested_receptions,
                    contestedTargets: data.contested_targets,
                    declinedPenalties: data.declined_penalties,
                    dropRate: data.drop_rate,
                    drops: data.drops,
                    firstDowns: data.first_downs,
                    franchiseId: data.franchise_id,
                    fumbles: data.fumbles,
                    gradesHandsDrop: data.grades_hands_drop,
                    gradesHandsFumble: data.grades_hands_fumble,
                    gradesOffense: data.grades_offense,
                    gradesPassBlock: data.grades_pass_block,
                    gradesPassRoute: data.grades_pass_route,
                    inlineRate: data.inline_rate,
                    inlineSnaps: data.inline_snaps,
                    interceptions: data.interceptions,
                    longest: data.longest,
                    passBlockRate: data.pass_block_rate,
                    passBlocks: data.pass_blocks,
                    passPlays: data.pass_plays,
                    penalties: data.penalties,
                    receptions: data.receptions,
                    routeRate: data.route_rate,
                    routes: data.routes,
                    slotRate: data.slot_rate,
                    slotSnaps: data.slot_snaps,
                    targetedQbRating: data.targeted_qb_rating,
                    targets: data.targets,
                    touchdowns: data.touchdowns,
                    wideRate: data.wide_rate,
                    wideSnaps: data.wide_snaps,
                    yards: data.yards,
                    yardsAfterCatch: data.yards_after_catch,
                    yardsAfterCatchPerReception: data.yards_after_catch_per_reception,
                    yardsPerReception: data.yards_per_reception,
                    yprr: data.yprr,
                },
            });
        }
        catch (error) {
            console.error('Error importing receiving stat:', data, error);
        }
    }
    console.log('Receiving Stats import complete.');
}
async function main() {
    await importPlayerStats();
    await importReceivingStats();
}
main()
    .catch(e => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
