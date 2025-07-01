"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformDataForMultiLineChart = transformDataForMultiLineChart;
function transformDataForMultiLineChart(data, chartConfig) {
    // console.log("Input data:", data);
    const { xKey, lineCategories, measurementColumn } = chartConfig;
    const fields = Object.keys(data[0]);
    // console.log("Fields:", fields);
    const xAxisField = xKey ?? 'year'; // Assuming 'year' is always the x-axis
    const lineField = fields.find(field => lineCategories?.includes(data[0][field])) || '';
    // console.log("X-axis field:", xAxisField);
    // console.log("Line field:", lineField);
    const xAxisValues = Array.from(new Set(data.map(item => String(item[xAxisField]))));
    // console.log("X-axis values:", xAxisValues);
    // console.log("Line categories:", lineCategories);
    const transformedData = xAxisValues.map(xValue => {
        const dataPoint = { [xAxisField]: xValue };
        lineCategories?.forEach(category => {
            const matchingItem = data.find(item => String(item[xAxisField]) === xValue && String(item[lineField]) === category);
            dataPoint[category] = matchingItem ? matchingItem[measurementColumn ?? ""] : null;
        });
        return dataPoint;
    });
    transformedData.sort((a, b) => Number(a[xAxisField]) - Number(b[xAxisField]));
    // console.log("Transformed data:", transformedData);
    return {
        data: transformedData,
        xAxisField,
        lineFields: lineCategories ?? []
    };
}
