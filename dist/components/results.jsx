"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Results = void 0;
const dynamic_chart_1 = require("./dynamic-chart");
const skeleton_card_1 = require("./skeleton-card");
const table_1 = require("./ui/table");
const tabs_1 = require("./ui/tabs");
const Results = ({ results, columns, chartConfig, }) => {
    const formatColumnTitle = (title) => {
        return title
            .split("_")
            .map((word, index) => index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word)
            .join(" ");
    };
    const formatCellValue = (column, value) => {
        if (column.toLowerCase().includes("valuation")) {
            const parsedValue = parseFloat(value);
            if (isNaN(parsedValue)) {
                return "";
            }
            const formattedValue = parsedValue.toFixed(2);
            const trimmedValue = formattedValue.replace(/\.?0+$/, "");
            return `$${trimmedValue}B`;
        }
        if (column.toLowerCase().includes("rate")) {
            const parsedValue = parseFloat(value);
            if (isNaN(parsedValue)) {
                return "";
            }
            const percentage = (parsedValue * 100).toFixed(2);
            return `${percentage}%`;
        }
        if (value instanceof Date) {
            return value.toLocaleDateString();
        }
        return String(value);
    };
    return (<div className="flex-grow flex flex-col">
      <tabs_1.Tabs defaultValue="table" className="w-full flex-grow flex flex-col">
        <tabs_1.TabsList className="grid w-full grid-cols-2">
          <tabs_1.TabsTrigger value="table">Table</tabs_1.TabsTrigger>
          <tabs_1.TabsTrigger value="charts" disabled={Object.keys(results[0] || {}).length <= 1 || results.length < 2}>
            Chart
          </tabs_1.TabsTrigger>
        </tabs_1.TabsList>
        <tabs_1.TabsContent value="table" className="flex-grow">
          <div className="sm:min-h-[10px] relative">
            <table_1.Table className="min-w-full divide-y divide-border">
              <table_1.TableHeader className="bg-secondary sticky top-0 shadow-sm">
                <table_1.TableRow>
                  {columns.map((column, index) => (<table_1.TableHead key={index} className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {formatColumnTitle(column)}
                    </table_1.TableHead>))}
                </table_1.TableRow>
              </table_1.TableHeader>
              <table_1.TableBody className="bg-card divide-y divide-border">
                {results.map((company, index) => (<table_1.TableRow key={index} className="hover:bg-muted">
                    {columns.map((column, cellIndex) => (<table_1.TableCell key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                        {formatCellValue(column, company[column])}
                      </table_1.TableCell>))}
                  </table_1.TableRow>))}
              </table_1.TableBody>
            </table_1.Table>
          </div>
        </tabs_1.TabsContent>
        <tabs_1.TabsContent value="charts" className="flex-grow overflow-auto">
          <div className="mt-4">
            {chartConfig && results.length > 0 ? (<dynamic_chart_1.DynamicChart chartData={results} chartConfig={chartConfig}/>) : (<skeleton_card_1.SkeletonCard />)}
          </div>
        </tabs_1.TabsContent>
      </tabs_1.Tabs>
    </div>);
};
exports.Results = Results;
