"use server";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateChartConfig = exports.explainQuery = exports.runGenerateSQLQuery = exports.generateQuery = void 0;
const types_1 = require("@/lib/types");
const ai_sdk_provider_1 = require("@openrouter/ai-sdk-provider");
// import { sql } from "@vercel/postgres";
const prisma_1 = require("../app/generated/prisma");
const prisma = new prisma_1.PrismaClient();
const ai_1 = require("ai");
const zod_1 = require("zod");
const openrouter = (0, ai_sdk_provider_1.createOpenRouter)({
    // Optionally pass your OpenRouter API key here, or rely on env vars
    apiKey: process.env.OPENROUTER_API_KEY,
});
const generateQuery = async (input) => {
    "use server";
    try {
        const result = await (0, ai_1.generateObject)({
            // model: openai("gpt-4o"),
            // model: openai("gpt-4.1-nano"),
            // model: openrouter("mistralai/mistral-small-3.1-24b-instruct:free"),
            model: openrouter("mistralai/mistral-small-3.2-24b-instruct:free"),
            system: `You are a SQL (postgres) and data visualization expert. Your job is to help the user write a SQL query to retrieve the data they need. The table schema is as follows:

      unicorns (
      id SERIAL PRIMARY KEY,
      company VARCHAR(255) NOT NULL UNIQUE,
      valuation DECIMAL(10, 2) NOT NULL,
      date_joined DATE,
      country VARCHAR(255) NOT NULL,
      city VARCHAR(255) NOT NULL,
      industry VARCHAR(255) NOT NULL,
      select_investors TEXT NOT NULL
    );

    Only retrieval queries are allowed.

    For things like industry, company names and other string fields, use the ILIKE operator and convert both the search term and the field to lowercase using LOWER() function. For example: LOWER(industry) ILIKE LOWER('%search_term%').

    Note: select_investors is a comma-separated list of investors. Trim whitespace to ensure you're grouping properly. Note, some fields may be null or have only one value.
    When answering questions about a specific field, ensure you are selecting the identifying column (ie. what is Vercel's valuation would select company and valuation').

    The industries available are:
    - healthcare & life sciences
    - consumer & retail
    - financial services
    - enterprise tech
    - insurance
    - media & entertainment
    - industrials
    - health

    If the user asks for a category that is not in the list, infer based on the list above.

    Note: valuation is in billions of dollars so 10b would be 10.0.
    Note: if the user asks for a rate, return it as a decimal. For example, 0.1 would be 10%.

    If the user asks for 'over time' data, return by year.

    When searching for UK or USA, write out United Kingdom or United States respectively.

    EVERY QUERY SHOULD RETURN QUANTITATIVE DATA THAT CAN BE PLOTTED ON A CHART! There should always be at least two columns. If the user asks for a single column, return the column and the count of the column. If the user asks for a rate, return the rate as a decimal. For example, 0.1 would be 10%.

    

    
    

   
    `,
            prompt: `Generate the query necessary to retrieve the data the user wants: ${input}`,
            schema: zod_1.z.object({
                query: zod_1.z.string(),
            }),
        });
        console.log('original query', result.object.query);
        return result.object.query;
    }
    catch (e) {
        console.error(e);
        throw new Error("Failed to generate query: " + (e instanceof Error ? e.message : String(e)));
    }
};
exports.generateQuery = generateQuery;
const runGenerateSQLQuery = async (query) => {
    "use server";
    // Check if the query is a SELECT statement
    if (!query.trim().toLowerCase().startsWith("select") ||
        query.trim().toLowerCase().includes("drop") ||
        query.trim().toLowerCase().includes("delete") ||
        query.trim().toLowerCase().includes("insert") ||
        query.trim().toLowerCase().includes("update") ||
        query.trim().toLowerCase().includes("alter") ||
        query.trim().toLowerCase().includes("truncate") ||
        query.trim().toLowerCase().includes("create") ||
        query.trim().toLowerCase().includes("grant") ||
        query.trim().toLowerCase().includes("revoke")) {
        throw new Error("Only SELECT queries are allowed");
    }
    let data;
    try {
        data = await prisma.$queryRawUnsafe(query);
    }
    catch (e) {
        if (e.message.includes('relation "unicorns" does not exist')) {
            console.log("Table does not exist, creating and seeding it with dummy data now...");
            // throw error
            throw Error("Table does not exist");
        }
        else {
            throw e;
        }
    }
    return data;
};
exports.runGenerateSQLQuery = runGenerateSQLQuery;
const explainQuery = async (input, sqlQuery) => {
    "use server";
    try {
        const result = await (0, ai_1.generateObject)({
            // model: openai("gpt-4o"),
            // model: openai("gpt-4.1-nano"),
            // model: openrouter("mistralai/mistral-small-3.1-24b-instruct:free"),
            model: openrouter("mistralai/mistral-small-3.2-24b-instruct:free"),
            schema: zod_1.z.object({
                explanations: types_1.explanationsSchema,
            }),
            system: `You are a SQL (postgres) expert. Your job is to explain to the user write a SQL query you wrote to retrieve the data they asked for. The table schema is as follows:
    unicorns (
      id SERIAL PRIMARY KEY,
      company VARCHAR(255) NOT NULL UNIQUE,
      valuation DECIMAL(10, 2) NOT NULL,
      date_joined DATE,
      country VARCHAR(255) NOT NULL,
      city VARCHAR(255) NOT NULL,
      industry VARCHAR(255) NOT NULL,
      select_investors TEXT NOT NULL
    );

    When you explain you must take a section of the query, and then explain it. Each "section" should be unique. So in a query like: "SELECT * FROM unicorns limit 20", the sections could be "SELECT *", "FROM UNICORNS", "LIMIT 20".
    If a section doesnt have any explanation, include it, but leave the explanation empty.

    `,
            prompt: `Explain the SQL query you generated to retrieve the data the user wanted. Assume the user is not an expert in SQL. Break down the query into steps. Be concise.

      User Query:
      ${input}

      Generated SQL Query:
      ${sqlQuery}`,
        });
        return result.object;
    }
    catch (e) {
        console.error(e);
        throw new Error("Failed to generate query");
    }
};
exports.explainQuery = explainQuery;
const generateChartConfig = async (results, userQuery) => {
    "use server";
    const system = `You are a data visualization expert. `;
    try {
        const { object: config } = await (0, ai_1.generateObject)({
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
            schema: types_1.configSchema,
        });
        const colors = {};
        config.yKeys.forEach((key, index) => {
            colors[key] = `hsl(var(--chart-${index + 1}))`;
        });
        const updatedConfig = { ...config, colors };
        return { config: updatedConfig };
    }
    catch (e) {
        // @ts-expect-errore
        console.error(e.message);
        throw new Error("Failed to generate chart suggestion");
    }
};
exports.generateChartConfig = generateChartConfig;
