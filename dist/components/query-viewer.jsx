"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryViewer = void 0;
const react_1 = require("react");
const button_1 = require("./ui/button");
const query_with_tooltips_1 = require("./ui/query-with-tooltips");
const actions_1 = require("@/app/actions");
const lucide_react_1 = require("lucide-react");
const QueryViewer = ({ activeQuery, inputValue, }) => {
    const activeQueryCutoff = 100;
    const [queryExplanations, setQueryExplanations] = (0, react_1.useState)();
    const [loadingExplanation, setLoadingExplanation] = (0, react_1.useState)(false);
    const [queryExpanded, setQueryExpanded] = (0, react_1.useState)(activeQuery.length > activeQueryCutoff);
    const handleExplainQuery = async () => {
        setQueryExpanded(true);
        setLoadingExplanation(true);
        const { explanations } = await (0, actions_1.explainQuery)(inputValue, activeQuery);
        setQueryExplanations(explanations);
        setLoadingExplanation(false);
    };
    if (activeQuery.length === 0)
        return null;
    return (<div className="mb-4 relative group">
      <div className={`bg-muted rounded-md p-4 ${queryExpanded ? "" : "text-muted-foreground"}`}>
        <div className="font-mono text-sm">
          {queryExpanded ? (queryExplanations && queryExplanations.length > 0 ? (<>
                <query_with_tooltips_1.QueryWithTooltips query={activeQuery} queryExplanations={queryExplanations}/>
                <p className="font-sans mt-4 text-base">
                  Generated explanation! Hover over different parts of the SQL
                  query to see explanations.
                </p>
              </>) : (<div className="flex justify-between items-center">
                <span className="">{activeQuery}</span>
                <button_1.Button variant="ghost" size="icon" onClick={handleExplainQuery} className="h-fit hover:text-muted-foreground hidden sm:inline-block" aria-label="Explain query" disabled={loadingExplanation}>
                  {loadingExplanation ? (<lucide_react_1.Loader2 className="h-10 w-10 p-2 animate-spin "/>) : (<lucide_react_1.CircleHelp className="h-10 w-10 p-2 "/>)}
                </button_1.Button>
              </div>)) : (<span>
              {activeQuery.slice(0, activeQueryCutoff)}
              {activeQuery.length > activeQueryCutoff ? "..." : ""}
            </span>)}
        </div>
      </div>
      {!queryExpanded && (<button_1.Button variant="secondary" size="sm" onClick={() => setQueryExpanded(true)} className="absolute inset-0 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          Show full query
        </button_1.Button>)}
    </div>);
};
exports.QueryViewer = QueryViewer;
