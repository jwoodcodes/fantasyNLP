import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting data seeding for byDownData...');

  const csvFilePath = path.join(__dirname, '../all_downs_offensive_stats_1_3_2017_2024.csv');
  const records: any[] = [];

  fs.createReadStream(csvFilePath)
    .pipe(parse({ columns: true, skip_empty_lines: true }))
    .on('data', (data) => records.push(data))
    .on('end', async () => {
      for (const record of records) {
        // Extract common fields
        const playerId = record.player_id;
        const season = parseInt(record.season);
        const player_name = record.player_name;
        const team = record.team;
        const position = record.position; // Player's overall position

        // Extract season-level stats
        const greenZoneCarries = parseInt(record.green_zone_carries);
        const teamTotalGreenZoneCarries = parseInt(record.team_green_zone_carries_all_games);
        const teamTotalGreenZoneCarriesInPlayedGames = parseInt(record.team_green_zone_carries_in_played_games);
        const pctTeamGreenZoneCarries = parseFloat(record.pct_team_green_zone_carries_all_games);
        const pctTeamGreenZoneCarriesInPlayedGames = parseFloat(record.pct_team_green_zone_carries_in_played_games);
        
        // HVTs for RBs only
        const HVTs = record.HVTs ? parseInt(record.HVTs) : null;
        const HVTsPerGame = record.HVTs_per_game ? parseFloat(record.HVTs_per_game) : null;

        // New RB HVT team stats
        const totalTeamRBHVTs = parseInt(record.total_team_RB_HVTs_all_games);
        const pctTeamRBHVTs = parseFloat(record.pct_team_RB_HVTs_all_games);
        const totalTeamRBHVTsInPlayedGames = parseInt(record.total_team_RB_HVTs_in_played_games);
        const pctTeamRBHVTsInPlayedGames = parseFloat(record.pct_team_RB_HVTs_in_played_games);

        // Unfiltered HVTs for verification
        const totalTeamHVTsUnfiltered = parseInt(record.total_team_HVTs_unfiltered);

        // Iterate through downs (1, 3)
        for (const downNumber of [1, 3]) {
          const downPrefix = `down_${downNumber}_`;

          const dataToInsert = {
            playerId: playerId,
            season: season,
            down: downNumber,
            position: position, // Add player's overall position
            greenZoneCarries: greenZoneCarries,
            teamTotalGreenZoneCarries: teamTotalGreenZoneCarries,
            teamTotalGreenZoneCarriesInPlayedGames: teamTotalGreenZoneCarriesInPlayedGames,
            pctTeamGreenZoneCarries: pctTeamGreenZoneCarries,
            pctTeamGreenZoneCarriesInPlayedGames: pctTeamGreenZoneCarriesInPlayedGames,
            HVTs: HVTs,
            HVTsPerGame: HVTsPerGame,
            totalTeamRBHVTs: totalTeamRBHVTs,
            pctTeamRBHVTs: pctTeamRBHVTs,
            totalTeamRBHVTsInPlayedGames: totalTeamRBHVTsInPlayedGames,
            pctTeamRBHVTsInPlayedGames: pctTeamRBHVTsInPlayedGames,
            totalTeamHVTsUnfiltered: totalTeamHVTsUnfiltered,

            // Down-specific stats (these are already prefixed in the CSV)
            attempts: parseInt(record[`${downPrefix}attempts`]),
            completions: parseInt(record[`${downPrefix}completions`]),
            passing_yards: parseFloat(record[`${downPrefix}passing_yards`]),
            passing_tds: parseInt(record[`${downPrefix}passing_tds`]),
            interceptions: parseInt(record[`${downPrefix}interceptions`]),
            sacks_taken: parseInt(record[`${downPrefix}sacks_taken`]),
            passing_first_downs: parseInt(record[`${downPrefix}passing_first_downs`]),
            carries: parseInt(record[`${downPrefix}carries`]),
            rushing_yards: parseFloat(record[`${downPrefix}rushing_yards`]),
            rushing_tds: parseInt(record[`${downPrefix}rushing_tds`]),
            fumbles: parseInt(record[`${downPrefix}fumbles`]),
            rushing_first_downs: parseInt(record[`${downPrefix}rushing_first_downs`]),
            targets: parseInt(record[`${downPrefix}targets`]),
            receptions: parseInt(record[`${downPrefix}receptions`]),
            receiving_yards: parseFloat(record[`${downPrefix}receiving_yards`]),
            receiving_tds: parseInt(record[`${downPrefix}receiving_tds`]),
            receiving_first_downs: parseInt(record[`${downPrefix}receiving_first_downs`]),
            total_first_downs: parseInt(record[`${downPrefix}total_first_downs`]),
            // position: record[`${downPrefix}position`], // This is the down-specific position, not needed here
            // team: record[`${downPrefix}team`], // This is the down-specific team, not needed here
            games_played: parseInt(record[`${downPrefix}games_played`]),
            team_carries_in_played_games: parseInt(record[`${downPrefix}team_carries_in_played_games`]),
            team_targets_in_played_games: parseInt(record[`${downPrefix}team_targets_in_played_games`]),
            team_receptions_in_played_games: parseInt(record[`${downPrefix}team_receptions_in_played_games`]),
            team_rush_fd_in_played_games: parseInt(record[`${downPrefix}team_rush_fd_in_played_games`]),
            team_rec_fd_in_played_games: parseInt(record[`${downPrefix}team_rec_fd_in_played_games`]),
            team_carries_all_games: parseInt(record[`${downPrefix}team_carries_all_games`]),
            // team_targets_all_games: parseInt(record[`${downPrefix}team_targets_all_games`]), // Removed
            team_receptions_all_games: parseInt(record[`${downPrefix}team_receptions_all_games`]),
            team_rush_fd_all_games: parseInt(record[`${downPrefix}team_rush_fd_all_games`]),
            team_rec_fd_all_games: parseInt(record[`${downPrefix}team_rec_fd_all_games`]),
            pct_team_carries_in_played_games: parseFloat(record[`${downPrefix}pct_team_carries_in_played_games`]),
            // pct_team_targets_in_played_games: parseFloat(record[`${downPrefix}pct_team_targets_in_played_games`]), // Removed
            pct_team_receptions_in_played_games: parseFloat(record[`${downPrefix}pct_team_receptions_in_played_games`]),
            pct_team_rush_fd_in_played_games: parseFloat(record[`${downPrefix}pct_team_rush_fd_in_played_games`]),
            pct_team_rec_fd_in_played_games: parseFloat(record[`${downPrefix}pct_team_rec_fd_in_played_games`]),
            yards_per_pass_attempt: parseFloat(record[`${downPrefix}yards_per_pass_attempt`]),
            yards_per_completion: parseFloat(record[`${downPrefix}yards_per_completion`]),
            yards_per_carry: parseFloat(record[`${downPrefix}yards_per_carry`]),
            yards_per_target: parseFloat(record[`${downPrefix}yards_per_target`]),
            yards_per_reception: parseFloat(record[`${downPrefix}yards_per_reception`]),
            pass_attempts_per_game: parseFloat(record[`${downPrefix}pass_attempts_per_game`]),
            completions_per_game: parseFloat(record[`${downPrefix}completions_per_game`]),
            passing_yards_per_game: parseFloat(record[`${downPrefix}passing_yards_per_game`]),
            passing_first_downs_per_game: parseFloat(record[`${downPrefix}passing_first_downs_per_game`]),
            carries_per_game: parseFloat(record[`${downPrefix}carries_per_game`]),
            rushing_yards_per_game: parseFloat(record[`${downPrefix}rushing_yards_per_game`]),
            rushing_first_downs_per_game: parseFloat(record[`${downPrefix}rushing_first_downs_per_game`]),
            targets_per_game: parseFloat(record[`${downPrefix}targets_per_game`]),
            receptions_per_game: parseFloat(record[`${downPrefix}receptions_per_game`]),
            receiving_yards_per_game: parseFloat(record[`${downPrefix}receiving_yards_per_game`]),
            receiving_first_downs_per_game: parseFloat(record[`${downPrefix}receiving_first_downs_per_game`]),
          };

          // Uncomment the following lines when you are ready to insert data into the database
          /*
          try {
            await prisma.byDownData.create({
              data: dataToInsert,
            });
            console.log(`Inserted data for player ${playerId}, season ${season}, down ${downNumber}`);
          } catch (error) {
            console.error(`Error inserting data for player ${playerId}, season ${season}, down ${downNumber}:`, error);
          }
          */
        }
      }
      console.log('Data preparation complete. No data was inserted into the database.');
      await prisma.$disconnect();
    });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });