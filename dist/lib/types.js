"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configSchema = exports.explanationsSchema = exports.explanationSchema = void 0;
const zod_1 = require("zod");
exports.explanationSchema = zod_1.z.object({
    section: zod_1.z.string(),
    explanation: zod_1.z.string(),
});
exports.explanationsSchema = zod_1.z.array(exports.explanationSchema);
// Define the schema for chart configuration
exports.configSchema = zod_1.z
    .object({
    description: zod_1.z
        .string()
        .describe("Describe the chart. What is it showing? What is interesting about the way the data is displayed?"),
    takeaway: zod_1.z.string().describe("What is the main takeaway from the chart?"),
    type: zod_1.z.enum(["bar", "line", "area", "pie"]).describe("Type of chart"),
    title: zod_1.z.string(),
    xKey: zod_1.z.string().describe("Key for x-axis or category"),
    yKeys: zod_1.z.array(zod_1.z.string()).describe("Key(s) for y-axis values this is typically the quantitative column"),
    multipleLines: zod_1.z.boolean().describe("For line charts only: whether the chart is comparing groups of data.").optional(),
    measurementColumn: zod_1.z.string().describe("For line charts only: key for quantitative y-axis column to measure against (eg. values, counts etc.)").optional(),
    lineCategories: zod_1.z.array(zod_1.z.string()).describe("For line charts only: Categories used to compare different lines or data series. Each category represents a distinct line in the chart.").optional(),
    colors: zod_1.z
        .record(zod_1.z.string().describe("Any of the yKeys"), zod_1.z.string().describe("Color value in CSS format (e.g., hex, rgb, hsl)"))
        .describe("Mapping of data keys to color values for chart elements")
        .optional(),
    legend: zod_1.z.boolean().describe("Whether to show legend"),
})
    .describe("Chart configuration object");
