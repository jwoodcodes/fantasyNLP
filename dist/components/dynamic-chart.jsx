"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicChart = DynamicChart;
const recharts_1 = require("recharts");
const chart_1 = require("@/components/ui/chart");
const recharts_2 = require("recharts");
const rechart_format_1 = require("@/lib/rechart-format");
function toTitleCase(str) {
    return str
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
const colors = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "hsl(var(--chart-5))",
    "hsl(var(--chart-6))",
    "hsl(var(--chart-7))",
    "hsl(var(--chart-8))",
];
function DynamicChart({ chartData, chartConfig, }) {
    const renderChart = () => {
        if (!chartData || !chartConfig)
            return <div>No chart data</div>;
        const parsedChartData = chartData.map((item) => {
            const parsedItem = {};
            for (const [key, value] of Object.entries(item)) {
                parsedItem[key] = isNaN(Number(value)) ? value : Number(value);
            }
            return parsedItem;
        });
        chartData = parsedChartData;
        const processChartData = (data, chartType) => {
            if (chartType === "bar" || chartType === "pie") {
                if (data.length <= 8) {
                    return data;
                }
                const subset = data.slice(0, 20);
                return subset;
            }
            return data;
        };
        chartData = processChartData(chartData, chartConfig.type);
        // console.log({ chartData, chartConfig });
        switch (chartConfig.type) {
            case "bar":
                return (<recharts_1.BarChart data={chartData}>
            <recharts_1.CartesianGrid strokeDasharray="3 3"/>
            <recharts_1.XAxis dataKey={chartConfig.xKey}>
              <recharts_2.Label value={toTitleCase(chartConfig.xKey)} offset={0} position="insideBottom"/>
            </recharts_1.XAxis>
            <recharts_1.YAxis>
              <recharts_2.Label value={toTitleCase(chartConfig.yKeys[0])} angle={-90} position="insideLeft"/>
            </recharts_1.YAxis>
            <chart_1.ChartTooltip content={<chart_1.ChartTooltipContent />}/>
            {chartConfig.legend && <recharts_1.Legend />}
            {chartConfig.yKeys.map((key, index) => (<recharts_1.Bar key={key} dataKey={key} fill={colors[index % colors.length]}/>))}
          </recharts_1.BarChart>);
            case "line":
                const { data, xAxisField, lineFields } = (0, rechart_format_1.transformDataForMultiLineChart)(chartData, chartConfig);
                const useTransformedData = chartConfig.multipleLines &&
                    chartConfig.measurementColumn &&
                    chartConfig.yKeys.includes(chartConfig.measurementColumn);
                // console.log(useTransformedData, "useTransformedData");
                // const useTransformedData = false;
                return (<recharts_1.LineChart data={useTransformedData ? data : chartData}>
            <recharts_1.CartesianGrid strokeDasharray="3 3"/>
            <recharts_1.XAxis dataKey={useTransformedData ? chartConfig.xKey : chartConfig.xKey}>
              <recharts_2.Label value={toTitleCase(useTransformedData ? xAxisField : chartConfig.xKey)} offset={0} position="insideBottom"/>
            </recharts_1.XAxis>
            <recharts_1.YAxis>
              <recharts_2.Label value={toTitleCase(chartConfig.yKeys[0])} angle={-90} position="insideLeft"/>
            </recharts_1.YAxis>
            <chart_1.ChartTooltip content={<chart_1.ChartTooltipContent />}/>
            {chartConfig.legend && <recharts_1.Legend />}
            {useTransformedData
                        ? lineFields.map((key, index) => (<recharts_1.Line key={key} type="monotone" dataKey={key} stroke={colors[index % colors.length]}/>))
                        : chartConfig.yKeys.map((key, index) => (<recharts_1.Line key={key} type="monotone" dataKey={key} stroke={colors[index % colors.length]}/>))}
          </recharts_1.LineChart>);
            case "area":
                return (<recharts_1.AreaChart data={chartData}>
            <recharts_1.CartesianGrid strokeDasharray="3 3"/>
            <recharts_1.XAxis dataKey={chartConfig.xKey}/>
            <recharts_1.YAxis />
            <chart_1.ChartTooltip content={<chart_1.ChartTooltipContent />}/>
            {chartConfig.legend && <recharts_1.Legend />}
            {chartConfig.yKeys.map((key, index) => (<recharts_1.Area key={key} type="monotone" dataKey={key} fill={colors[index % colors.length]} stroke={colors[index % colors.length]}/>))}
          </recharts_1.AreaChart>);
            case "pie":
                return (<recharts_1.PieChart>
            <recharts_1.Pie data={chartData} dataKey={chartConfig.yKeys[0]} nameKey={chartConfig.xKey} cx="50%" cy="50%" outerRadius={120}>
              {chartData.map((_, index) => (<recharts_1.Cell key={`cell-${index}`} fill={colors[index % colors.length]}/>))}
            </recharts_1.Pie>
            <chart_1.ChartTooltip content={<chart_1.ChartTooltipContent />}/>
            {chartConfig.legend && <recharts_1.Legend />}
          </recharts_1.PieChart>);
            default:
                return <div>Unsupported chart type: {chartConfig.type}</div>;
        }
    };
    return (<div className="w-full flex flex-col justify-center items-center">
      <h2 className="text-lg font-bold mb-2">{chartConfig.title}</h2>
      {chartConfig && chartData.length > 0 && (<chart_1.ChartContainer config={chartConfig.yKeys.reduce((acc, key, index) => {
                acc[key] = {
                    label: key,
                    color: colors[index % colors.length],
                };
                return acc;
            }, {})} className="h-[320px] w-full">
          {renderChart()}
        </chart_1.ChartContainer>)}
      <div className="w-full">
        <p className="mt-4 text-sm">{chartConfig.description}</p>
        <p className="mt-4 text-sm">{chartConfig.takeaway}</p>
      </div>
    </div>);
}
