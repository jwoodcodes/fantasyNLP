"use server";

import { Config, configSchema, explanationsSchema, Result } from "@/lib/types";
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
    
      
      system: `You are a SQL (postgres) and data visualization expert. Your job is to help the user write a SQL query to retrieve  all data (except headshot_url) for seasons or games that meet the query criteria. The user will ask a question about player stats, and you will need to determine whether they are asking about game-level stats or season-level stats.

      If the user's query implies game-level data (e.g., "games where a player scored more than 2 touchdowns"), use the "PlayerStat" table. If the query implies season-level data (e.g., "seasons where a player had over 1000 receiving yards"), use the "playerSeasons" table.

      when searching for a player by name, use the "player_display_name" column is querying the "PlayerStat" table. and the "player_name" column is querying the "playerSeasons" table.

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
      - "fantasy_points_avg": Float
      - "fantasy_points_ppr_avg": Float
      - "YPRR": Float
      - "routes": Float
      - "routes_per_game": Float
      - "TPRR": Float
      - "firstDPRR": Float

       .
    

    Guidelines:
    - Always wrap table and column names in double quotes (e.g., "playerSeasons", "player_name").
    - Use the snake_case column names provided in the schema.
    - Only retrieval queries (SELECT) are allowed.
    - For string comparisons, use the ILIKE operator and convert both the search term and the field to lowercase using LOWER().
    - When a user asks for data "over time", this should be interpreted as by season.
    - Every query must return quantitative data that can be plotted on a chart. This means at least two columns are required.
    - Every query must return all columns for the matched records except headshot_url, never return headshot_url.
    - if the players postion is QB and the user is asking for games then return colums for: - 
      - "player_name": String
      - "player_display_name": String
      - "position": String
      - "position_group": String
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
      - "fantasy_points": Float
      - "fantasy_points_ppr": Float
      - if the players postion is not QB then return colums for: - "id": String (UUID)
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
      - "fantasy_points": Float
      - "fantasy_points_ppr": Float
    -if the user ask for a player whose postion is QB and they are asking for seasons data return the columns for: - 
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
      - "fantasy_points_avg": Float
      - "fantasy_points_ppr_avg": Float

    - - if the players postion is RB, WR, or TE and the user is asking for games then return colums for: -  - 
      - "player_name": String
      - "player_display_name": String
      - "position": String
      - "position_group": String
      - "recent_team": String
      - "season": Int
      - "week": Int
      - "season_type": String
      - "opponent_team": String   
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
    -if the user ask for a player whose postion is RB, WR, or TE,  and they are asking for seasons data return the columns for: -  
      - "player_name": String
      - "season": Int
      - "games_played": Int
      - "position": String
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
      - "carries_avg": Float
      - "rushing_yards_avg": Float
      - "rushing_tds_avg": Float
      - "rushing_fumbles_avg": Float
      - "rushing_fumbles_lost_avg": Float
      - "rushing_first_downs_avg": Float
      - "rushing_epa_avg": Float
      - "fantasy_points_avg": Float
      - "fantasy_points_ppr_avg": Float

      if the user asks for multiple players and one has a postion of QB and the others postions is not QB return all columns except headshot_url
     - if the user ask for a stat per game in a season, return the avg version of that stat.
    - If the user asks for a rate, return it as a decimal (e.g., 10% should be 0.1).
    - All queries must limit the number of returned entries to 100.
    - if the user says, "show the top 10 players in a stat" return the top 10 players in that stat. change the limit from 100 to whatever number the user specifies as long as it's not greater than 100.
    
    `,
      prompt: `Generate the query necessary to retrieve the data the user wants: ${input}`,
      schema: z.object({
        query: z.string(),
      }),
      
      
    });
    console.log('original query', result.object.query)
    
  
    



    return result.object.query;
  } catch (e) {
    console.error(e);
    throw new Error("Failed to generate query: " + (e instanceof Error ? e.message : String(e)));
  }
};

export const runGenerateSQLQuery = async (query: string) => {
  "use server";
  // Check if the query is a SELECT statement
  if (
    !query.trim().toLowerCase().startsWith("select") ||
    query.trim().toLowerCase().includes("drop") ||
    query.trim().toLowerCase().includes("delete") ||
    query.trim().toLowerCase().includes("insert") ||
    query.trim().toLowerCase().includes("update") ||
    query.trim().toLowerCase().includes("alter") ||
    query.trim().toLowerCase().includes("truncate") ||
    query.trim().toLowerCase().includes("create") ||
    query.trim().toLowerCase().includes("grant") ||
    query.trim().toLowerCase().includes("revoke")
  ) {
    throw new Error("Only SELECT queries are allowed");
  }

  let data: any;
  try {
    data = await prisma.$queryRawUnsafe(query);
  } catch (e: any) {
    if (e.message.includes('relation "unicorns" does not exist')) {
      console.log(
        "Table does not exist, creating and seeding it with dummy data now...",
      );
      // throw error
      throw Error("Table does not exist");
    } else {
      throw e;
    }
  }

  return data as Result[];
};

export const explainQuery = async (input: string, sqlQuery: string) => {
  "use server";
  try {
    const result = await generateObject({
      // model: openai("gpt-4o"),
      // model: openai("gpt-4.1-nano"),

      // model: openrouter("mistralai/mistral-small-3.1-24b-instruct:free"),
      model: openrouter("mistralai/mistral-small-3.2-24b-instruct:free"),
      
      
      schema: z.object({
        explanations: explanationsSchema,
      }),
      system: `You are a SQL (postgres) expert. Your job is to explain to the user write a SQL query you wrote to retrieve the data they asked for. The table schema is as follows:

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
      - "fantasy_points_avg": Float
      - "fantasy_points_ppr_avg": Float
      - "YPRR": Float
      - "routes": Float
      - "routes_per_game": Float
      - "TPRR": Float
      - "firstDPRR": Float

    When you explain you must take a section of the query,             │
 │           and then explain it. Each "section" should be unique.              │
 │           So in a query like: "SELECT * FROM \"playerSeasons\"               │
 │           limit 20", the sections could be "SELECT *", "FROM                 │
 │           \"playerSeasons\"", "LIMIT 20". 
    If a section doesnt have any explanation, include it, but leave the explanation empty.

    `,
      prompt: `Explain the SQL query you generated to retrieve the data the user wanted. Assume the user is not an expert in SQL. Break down the query into steps. Be concise.

      User Query:
      ${input}

      Generated SQL Query:
      ${sqlQuery}`,
    });
    return result.object;
  } catch (e) {
    console.error(e);
    throw new Error("Failed to generate query");
  }
};

export const generateChartConfig = async (
  results: Result[],
  userQuery: string,
) => {
  "use server";
  const system = `You are a data visualization expert. `;

  try {
    const { object: config } = await generateObject({
        // model: openai("gpt-4o"),
        // model: openai("gpt-4.1-nano"),
      
      // model: openrouter("mistralai/mistral-small-3.1-24b-instruct:free"),
      model: openrouter("mistralai/mistral-small-3.2-24b-instruct:free"),
      // model: openrouter("mistralai/mistral-nemo:free"),
      
      system,
      prompt: `Given the following data from a SQL query result, generate the chart config that best visualises the data and answers the users query.
      For multiple groups use multi-lines.

      Here is an example complete config:
      export const chartConfig = {
        type: "pie",
        xKey: "month",
        yKeys: ["sales", "profit", "expenses"],
        colors: {
          sales: "#4CAF50",    // Green for sales
          profit: "#2196F3",   // Blue for profit
          expenses: "#F44336"  // Red for expenses
        },
        legend: true
      }

      User Query:
      ${userQuery}

      Data:
      ${JSON.stringify(results, null, 2)}`,
      schema: configSchema,
    });

    const colors: Record<string, string> = {};
    config.yKeys.forEach((key, index) => {
      colors[key] = `hsl(var(--chart-${index + 1}))`;
    });

    const updatedConfig: Config = { ...config, colors };
    return { config: updatedConfig };
  } catch (e) {
    // @ts-expect-errore
    console.error(e.message);
    throw new Error("Failed to generate chart suggestion");
  }
};
