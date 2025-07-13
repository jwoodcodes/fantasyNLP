"use server";

import { Result } from "@/lib/types";
import { openai } from "@ai-sdk/openai";
import { mistral } from '@ai-sdk/mistral';

import { createOpenRouter } from '@openrouter/ai-sdk-provider'

// import { sql } from "@vercel/postgres";
import { PrismaClient } from "../app/generated/prisma";
const prisma = new PrismaClient();
import { generateObject } from "ai";
import { object, z } from "zod";

const openrouter = createOpenRouter({
  // Optionally pass your OpenRouter API key here, or rely on env vars
  apiKey: process.env.OPENROUTER_API_KEY,
});

export const generateQuery = async (input: string) => {
  "use server";
  try {
    const result = await generateObject({
      // model: openai("gpt-4o"),
      // model: openai("gpt-4.1-nano"),
      
      
      
      // model: openrouter("mistralai/mistral-small-3.1-24b-instruct:free"),
      model: openrouter("mistralai/mistral-small-3.2-24b-instruct:free"),
    
      
      system: `You are a SQL (postgres) and data visualization expert. Your job is to help the user write SQL queries to retrieve data.
      Your output MUST be a JSON object, and nothing else. Do NOT include any conversational text or markdown formatting outside of the JSON object itself.
      If the user's query is in the format "show two tables, one for X and one for Y", you must generate two separate SQL queries, one for X and one for Y. Both query1 and query2 MUST be valid SELECT statements. Return these as an object with keys 'query1' and 'query2'.
      Otherwise, if the user asks for a single set of data, generate a single SQL query and return it as an object with a 'query' key.

      -If the user's query implies game-level data (e.g., "games where a player scored more than 2 touchdowns"), use the "PlayerStat" table. If the query implies season-level data (e.g., "seasons where a player had over 1000 receiving yards"), use the "playerSeasons" table.

      -If the user's query implies game-level data (e.g., "games where a player scored more than 2 touchdowns"), use the "PlayerStat" table. If the query implies season-level data (e.g., "seasons where a player had over 1000 receiving yards"), use the "playerSeasons" table.

      -When the user asks for games, only search the "PlayerStat" table. When the user asks for seasons, only search the "playerSeasons" table.

      -when searching for a player by name, use the "player_display_name" column if querying the "PlayerStat" table. and the "player_name" column is querying the "playerSeasons" table.

    - CRITICAL RULE: Your primary job is to determine the correct table ("PlayerStat" or "playerSeasons") and build the "WHERE", "ORDER BY", and "LIMIT" clauses based on the user's request. The SELECT clause MUST ALWAYS be "SELECT *". My application code is responsible for filtering the columns based on player position after the query is run.

       -Stats that should be considered "passing stats" in playerSeasons are:  "completions_total" ,"attempts_total","passing_yards_total","passing_tds_total","interceptions_total","passing_first_downs_total", "completions_avg","attempts_avg","passing_yards_avg","passing_tds_avg","interceptions_avg","passing_air_yards_avg","passing_yards_after_catch_avg","passing_first_downs_avg"

       - If at least one of the players that is returned has a position of "QB", include the columns above considered passing stats for the given dataset (PlayerStat or playerSeasons).

       -if all of the players that are returned have a position of "RB","WR", or "TE", do not return or include the columns above considered passing stats for the given dataset (PlayerStat or playerSeasons).

       -stats that should be considered "recieving stats" in PlayerStat are: "receptions","targets","receiving_yards","receiving_tds","receiving_fumbles","receiving_fumbles_lost","receiving_air_yards","receiving_yards_after_catch","receiving_first_downs","receiving_epa","receiving_2pt_conversions","racr","target_share","air_yards_share","wopr"

       -stats that should be considered "recieving stats" in playerSeasons are: "targets_total","receiving_yards_total","receiving_tds_total","receiving_air_yards_total","receiving_yards_after_catch_total","receiving_first_downs_total","receptions_avg","targets_avg","receiving_yards_avg","receiving_tds_avg","receiving_air_yards_avg","receiving_yards_after_catch_avg","receiving_first_downs_avg","receiving_epa_avg","racr_avg","target_share_avg","air_yards_share_avg","wopr_avg","YPRR","routes","routes_per_game","TPRR","firstDPRR"

       - If all of the players that are returned has a position of "QB", do not include the columns above considered recieving stats for the given dataset (PlayerStat or playerSeasons).
       
       -the above limitations based on player position should be the only thing that limits what columns are returned and displayed. columns should never be filtred out simply by the users question. return and display all columns that aren't filtred out by the position limits above. 

      Table Schemas:

      "PlayerStat" (for game-level data):
      - "id": String (UUID)
      - "player_id": String
      - "player_name": String
      - "player_display_name": String
      - "position": String
      - "position_group": String
      - "headshot_url": String
      - "recent_team": String
      - "season": Int
      - "week": Int
      - "season_type": String
      - "opponent_team": String
      - "completions": Int
      - "attempts": Int
      - "passing_yards": Float
      - "passing_tds": Int
      - "interceptions": Int
      - "sacks": Int
      - "sack_yards": Float
      - "sack_fumbles": Int
      - "sack_fumbles_lost": Int
      - "passing_air_yards": Float
      - "passing_yards_after_catch": Float
      - "passing_first_downs": Int
      - "passing_epa": Float
      - "passing_2pt_conversions": Int
      - "pacr": Float
      - "dakota": Float
      - "carries": Int
      - "rushing_yards": Float
      - "rushing_tds": Int
      - "rushing_fumbles": Int
      - "rushing_fumbles_lost": Int
      - "rushing_first_downs": Int
      - "rushing_epa": Float
      - "rushing_2pt_conversions": Int
      - "receptions": Int
      - "targets": Int
      - "receiving_yards": Float
      - "receiving_tds": Int
      - "receiving_fumbles": Int
      - "receiving_fumbles_lost": Int
      - "receiving_air_yards": Float
      - "receiving_yards_after_catch": Float
      - "receiving_first_downs": Int
      - "receiving_epa": Float
      - "receiving_2pt_conversions": Int
      - "racr": Float
      - "target_share": Float
      - "air_yards_share": Float
      - "wopr": Float
      - "special_teams_tds": Int
      - "fantasy_points": Float
      - "fantasy_points_ppr": Float

      "playerSeasons" (for season-level data):
      - "player_id": String
      - "player_name": String
      - "season": Int
      - "games_played": Int
      - "position": String
      - "completions_total": Float
      - "attempts_total": Float
      - "passing_yards_total": Float
      - "passing_tds_total": Float
      - "interceptions_total": Float
      - "passing_first_downs_total": Float
      - "carries_total": Float
      - "rushing_yards_total": Float
      - "rushing_tds_total": Float
      - "rushing_fumbles_total": Float
      - "rushing_fumbles_lost_total": Float
      - "rushing_first_downs_total": Float
      - "targets_total": Float
      - "receiving_yards_total": Float
      - "receiving_tds_total": Float
      - "receiving_air_yards_total": Float
      - "receiving_yards_after_catch_total": Float
      - "receiving_first_downs_total": Float
      - "fantasy_points_total": Float
      - "completions_avg": Float
      - "attempts_avg": Float
      - "passing_yards_avg": Float
      - "passing_tds_avg": Float
      - "interceptions_avg": Float
      - "passing_air_yards_avg": Float
      - "passing_yards_after_catch_avg": Float
      - "passing_first_downs_avg": Float
      - "carries_avg": Float
      - "rushing_yards_avg": Float
      - "rushing_tds_avg": Float
      - "rushing_fumbles_avg": Float
      - "rushing_fumbles_lost_avg": Float
      - "rushing_first_downs_avg": Float
      - "rushing_epa_avg": Float
      - "receptions_avg": Float
      - "targets_avg": Float
      - "receiving_yards_avg": Float
      - "receiving_tds_avg": Float
      - "receiving_air_yards_avg": Float
      - "receiving_yards_after_catch_avg": Float
      - "receiving_first_downs_avg": Float
      - "receiving_epa_avg": Float
      - "racr_avg": Float
      - "target_share_avg": Float
      - "air_yards_share_avg": Float
      - "wopr_avg": Float
      - "YPRR": Float
      - "routes": Float
      - "routes_per_game": Float
      - "TPRR": Float
      - "firstDPRR": Float
      - "fantasy_points_avg": Float
      - "fantasy_points_ppr_avg": Float
       .
    
    - When a user asks for games where player A played and player B did not play, return data for all the games that player A played but player B did not and not return the games where player B played. To achieve this, use a "NOT EXISTS" clause on the "PlayerStat" table, joining on both "season" and "week" to identify games where player B was present. For example, for 'Show games where Xavier Worthy played and Rashee Rice did not play', the query should look like: SELECT * FROM "PlayerStat" AS A WHERE LOWER(A."player_display_name") = LOWER('Xavier Worthy') AND NOT EXISTS (SELECT 1 FROM "PlayerStat" AS B WHERE LOWER(B."player_display_name") = LOWER('Rashee Rice') AND B."season" = A."season" AND B."week" = A."week") LIMIT 100.

    Guidelines:
    - CRITICAL: NEVER use aliases for column names in the SELECT statement. The column names in the output MUST be the exact names from the table schema (e.g., "player_name", "season"). For example, SELECT "player_name" FROM "playerSeasons" is CORRECT. SELECT "player_name" AS "Player" FROM "playerSeasons" is INCORRECT.
    - Always wrap table and column names in double quotes (e.g., "playerSeasons", "player_name").
    - Use the snake_case column names provided in the schema.
    - All generated queries MUST be valid SELECT statements and adhere to security guidelines (no DDL or DML statements).
      - Only retrieval queries (SELECT) are allowed.
    - For string comparisons, use the ILIKE operator and convert both the search term and the field to lowercase using LOWER().
    -when returning games, only return and use player_display_name, not player_name
    - When a user asks for data "over time", this should be interpreted as by season.
    - if the user ask for a stat per game in a season, return the avg version of that stat.
    - If the user asks for a rate, return it as a decimal (e.g., 10% should be 0.1).
    - All queries must limit the number of returned entries to 100.
    - if the user says, "show the top 10 players in a stat" return the top 10 players in that stat. change the limit from 100 to whatever number the user specifies as long as it's not greater than 100.
    - if user says in... then puts a year, like "in 2024" or "in 2002", this means where season is equal to that year
    - never return duplicate rows. each unique row should only appear in a table once
    - never return id, player_id, headshot_url, position_group, passing_2pt_conversions, rushing_fumbles_lost, rushing_2pt_conversions, special_teams_tds, Receiving_fumbles, Receiving_fumbles_lost, receiving_2pt_conversions, or any column with the word "sack" in it
    -if user says, show games for [player A] with [player B], this means "show games where player A played and player B also played". To achieve this, use an "EXISTS" clause on the "PlayerStat" table, joining on both "season" and "week" to ensure player B was present in the same game as player A. For example, for 'show games for devon achane when he and tua tagovailoa both played', the query should look like: SELECT * FROM "PlayerStat" AS A WHERE LOWER(A."player_display_name") = LOWER('Devon Achane') AND EXISTS (SELECT 1 FROM "PlayerStat" AS B WHERE LOWER(B."player_display_name") = LOWER('Tua Tagovailoa') AND B."season" = A."season" AND B."week" = A."week") LIMIT 100. Do not include games where player B did not play, just games for player A where player B also played in that game.
    - if the user says percent, for example, "show me running backs with greater than 20% target share" , use the decimel value, .2 in this example

    IMPORTANT: Before finalizing the query, double-check the player positions in the potential result set. If no players are QBs, you MUST exclude all passing-related columns from the SELECT statement. If all players are QBs, you MUST exclude all receiving-related columns. Reference above for what is considered a passing-related column and what is considered a receiving-related column!

    IMPORTANT: ONLY INCLUDE "PASSING STATS" IF ONE OF THE PLAYERS RETURNED HAS A POSTION EQUAL TO "QB", OTHERWISE DO NOT RETURN ANY "PASSING STATS"
   
    `,
      prompt: `Generate the query necessary to retrieve the data the user wants: ${input}`,
      schema: z.union([
        z.object({ query: z.string() }),
        z.object({ query1: z.string(), query2: z.string().optional() }),
      ]),
    });
    console.log('Generated query result:', result.object);
    // Ensure query2 is set to an empty string if not used
    const resultObject = result.object as { query1: string; query2?: string }; // Type assertion
    resultObject.query2 = resultObject.query2 || '';
    return { generatedQuery: result.object, originalQuestion: input };
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      if (e.message.includes('Rate limit exceeded') || e.message.includes('Too Many Requests')) {
        // Throw a specific error message that can be caught by the frontend to display a toast.
        throw new Error('RATE_LIMIT_EXCEEDED');
      }
      throw new Error("Failed to generate query: " + e.message);
    }
    throw new Error("Failed to generate query: " + String(e));
  }
};

const validateQuery = (query: string | undefined) => {
    if (!query || typeof query !== 'string') return false;
    const trimmedQuery = query.trim().toLowerCase();
    return trimmedQuery.startsWith("select") &&
           !trimmedQuery.includes("drop") &&
           !trimmedQuery.includes("delete") &&
           !trimmedQuery.includes("insert") &&
           !trimmedQuery.includes("update") &&
           !trimmedQuery.includes("alter") &&
           !trimmedQuery.includes("truncate") &&
           !trimmedQuery.includes("create") &&
           !trimmedQuery.includes("grant") &&
           !trimmedQuery.includes("revoke");
};

const processData = (data: any[], query: string) => {
  const roundedData = (data as any[]).map((row) => {
    const newRow: Record<string, any> = { ...row };
    for (const key in newRow) {
      const value = newRow[key];
      if (typeof value === 'number') {
        newRow[key] = Math.round((value + Number.EPSILON) * 100) / 100;
      } else if (value !== null && typeof value === 'object' && value.hasOwnProperty('d')) {
        // Handle Decimal-like objects from Prisma
        try {
          newRow[key] = Number(value.d.join(''));
        } catch (e) {
          console.error(`Could not convert decimal for key: ${key}`, e);
          newRow[key] = null; // or some other default value
        }
      }
    }
    return newRow;
  });

  const tableName = query.toLowerCase().includes('from "playerstat"') ? 'PlayerStat' : 'playerSeasons';
  const passingStatsPlayerStat = ["completions", "attempts", "passing_yards", "passing_tds", "interceptions", "passing_air_yards", "passing_yards_after_catch", "passing_first_downs", "passing_epa", "passing_2pt_conversions" , "pacr", "dakota"];
  const passingStatsPlayerSeasons = ["completions_total" ,"attempts_total","passing_yards_total","passing_tds_total","interceptions_total","passing_first_downs_total", "completions_avg","attempts_avg","passing_yards_avg","passing_tds_avg","interceptions_avg","passing_air_yards_avg","passing_yards_after_catch_avg","passing_first_downs_avg"];
  const receivingStatsPlayerStat = ["receptions","targets","receiving_yards","receiving_tds","receiving_fumbles","receiving_fumbles_lost","receiving_air_yards","receiving_yards_after_catch","receiving_first_downs","receiving_epa","receiving_2pt_conversions","racr","target_share","air_yards_share","wopr"];
  const receivingStatsPlayerSeasons = ["targets_total","receiving_yards_total","receiving_tds_total","receiving_air_yards_total","receiving_yards_after_catch_total","receiving_first_downs_total","receptions_avg","targets_avg","receiving_yards_avg","receiving_tds_avg","receiving_air_yards_avg","receiving_yards_after_catch_avg","receiving_first_downs_avg","receiving_epa_avg","racr_avg","target_share_avg","air_yards_share_avg","wopr_avg","YPRR","routes","routes_per_game","TPRR","firstDPRR"];

  const passingStats = tableName === 'PlayerStat' ? passingStatsPlayerStat : passingStatsPlayerSeasons;
  const receivingStats = tableName === 'PlayerStat' ? receivingStatsPlayerStat : receivingStatsPlayerSeasons;

  const hasQB = roundedData.some(row => row.position && row.position.toUpperCase() === 'QB');
  const allQB = roundedData.every(row => row.position && row.position.toUpperCase() === 'QB');

  const columnsToExclude = new Set(['id', 'player_id', 'headshot_url', 'position_group', 'rushing_fumbles_lost', 'rushing_2pt_conversion', 'special_teams_tds', 'receiving_fumbles', 'receiving_fumbles_lost', 'sack_fumbles', 'sack_fumbles_lost', 'sacks', 'sack_yards']);

  if (!hasQB) {
    passingStats.forEach(stat => columnsToExclude.add(stat));
  }
  if (allQB) {
    receivingStats.forEach(stat => columnsToExclude.add(stat));
  }

  const finalData = roundedData.map(row => {
    const newRow: Record<string, any> = {};
    for (const key in row) {
      if (!columnsToExclude.has(key)) {
        newRow[key] = row[key];
      }
    }
    return newRow;
  });

  return finalData as Result[];
};



export const runGenerateSQLQuery = async (query: string | { query1: string; query2?: string }) => {
  "use server";
  let data: any;
  if (typeof query === 'string') {
    // Check if the query is a SELECT statement
    if (!validateQuery(query)) {
      throw new Error("Only SELECT queries are allowed");
    }
    console.log('Executing single query:', query);
    try {
      data = await prisma.$queryRawUnsafe(query);
    } catch (e: any) {
      if (e.message.includes('relation "unicorns" does not exist')) {
        console.log(
          "Table does not exist, creating and seeding it with dummy data now...",
        );
        throw Error("Table does not exist");
      } else {
        throw e;
      }
    }
    return processData(data, query);
  } else {
    // Handle two queries
    const query1 = query.query1;
    const query2 = query.query2;

    // Validate query1
    console.log('Validating query1:', query1);
    if (!validateQuery(query1)) {
        throw new Error("Only SELECT queries are allowed for query1");
    }

    // Validate query2 only if it exists
    if (query2) {
      console.log('Validating query2:', query2);
      if (!validateQuery(query2)) {
          throw new Error("Only SELECT queries are allowed for query2");
      }
    }

    let data1: any;
    let data2: any;

    console.log('Executing query1:', query1);
    try {
      data1 = await prisma.$queryRawUnsafe(query1);
    } catch (e: any) {
      console.error('Error executing query1:', e);
      if (e.message.includes('relation "unicorns" does not exist')) {
        console.log(
          "Table does not exist, creating and seeding it with dummy data now...",
        );
        throw Error("Table does not exist for query1");
      } else {
        throw e;
      }
    }

    if (query2) {
      console.log('Executing query2:', query2);
      try {
        data2 = await prisma.$queryRawUnsafe(query2);
      } catch (e: any) {
        console.error('Error executing query2:', e);
        if (e.message.includes('relation "unicorns" does not exist')) {
          console.log(
            "Table does not exist, creating and seeding it with dummy data now...",
          );
          throw Error("Table does not exist for query2");
        } else {
          throw e;
        }
      }
    } else {
      data2 = [];
    }

    console.log('Results for query1:', data1);
    console.log('Results for query2:', data2);

    if (data1.length === 0 && data2.length === 0) {
        console.log('No results found for both queries.');
        return { table1Data: [], table2Data: [] };
    }

    if (data1.length === 0) {
        console.log('No results found for query1.');
    }

    if (data2.length === 0) {
        console.log('No results found for query2.');
    }

    const filteredData1 = processData(data1, query1);
    const filteredData2 = query2 ? processData(data2, query2) : [];

    return { table1Data: filteredData1 as Result[], table2Data: filteredData2 as Result[] };
  }
};






// show two tables, one for games where xavier worthy played and rashee rice also player and one for games where xavier worthy played and rashee rice did not play