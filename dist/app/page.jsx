"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Page;
const react_1 = require("react");
const framer_motion_1 = require("framer-motion");
const actions_1 = require("./actions");
const lucide_react_1 = require("lucide-react");
const sonner_1 = require("sonner");
const project_info_1 = require("@/components/project-info");
const results_1 = require("@/components/results");
const suggested_queries_1 = require("@/components/suggested-queries");
const query_viewer_1 = require("@/components/query-viewer");
const search_1 = require("@/components/search");
const header_1 = require("@/components/header");
function Page() {
    const [inputValue, setInputValue] = (0, react_1.useState)("");
    const [submitted, setSubmitted] = (0, react_1.useState)(false);
    const [results, setResults] = (0, react_1.useState)([]);
    const [columns, setColumns] = (0, react_1.useState)([]);
    const [activeQuery, setActiveQuery] = (0, react_1.useState)("");
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [loadingStep, setLoadingStep] = (0, react_1.useState)(1);
    const [chartConfig, setChartConfig] = (0, react_1.useState)(null);
    const handleSubmit = async (suggestion) => {
        const question = suggestion ?? inputValue;
        if (inputValue.length === 0 && !suggestion)
            return;
        clearExistingData();
        if (question.trim()) {
            setSubmitted(true);
        }
        setLoading(true);
        setLoadingStep(1);
        setActiveQuery("");
        try {
            const query = await (0, actions_1.generateQuery)(question);
            if (query === undefined) {
                sonner_1.toast.error("An error occurred. Please try again.");
                setLoading(false);
                return;
            }
            setActiveQuery(query);
            setLoadingStep(2);
            const companies = await (0, actions_1.runGenerateSQLQuery)(query);
            const columns = companies.length > 0 ? Object.keys(companies[0]) : [];
            setResults(companies);
            setColumns(columns);
            setLoading(false);
            const generation = await (0, actions_1.generateChartConfig)(companies, question);
            setChartConfig(generation.config);
        }
        catch (e) {
            sonner_1.toast.error("An error occurred. Please try again.");
            setLoading(false);
        }
    };
    const handleSuggestionClick = async (suggestion) => {
        setInputValue(suggestion);
        try {
            await handleSubmit(suggestion);
        }
        catch (e) {
            sonner_1.toast.error("An error occurred. Please try again.");
        }
    };
    const clearExistingData = () => {
        setActiveQuery("");
        setResults([]);
        setColumns([]);
        setChartConfig(null);
    };
    const handleClear = () => {
        setSubmitted(false);
        setInputValue("");
        clearExistingData();
    };
    return (<div className="bg-neutral-50 dark:bg-neutral-900 flex items-start justify-center p-0 sm:p-8">
      <div className="w-full max-w-4xl min-h-dvh sm:min-h-0 flex flex-col ">
        <framer_motion_1.motion.div className="bg-card rounded-xl sm:border sm:border-border flex-grow flex flex-col" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut" }}>
          <div className="p-6 sm:p-8 flex flex-col flex-grow">
            <header_1.Header handleClear={handleClear}/>
            <search_1.Search handleClear={handleClear} handleSubmit={handleSubmit} inputValue={inputValue} setInputValue={setInputValue} submitted={submitted}/>
            <div id="main-container" className="flex-grow flex flex-col sm:min-h-[420px]">
              <div className="flex-grow h-full">
                <framer_motion_1.AnimatePresence mode="wait">
                  {!submitted ? (<suggested_queries_1.SuggestedQueries handleSuggestionClick={handleSuggestionClick}/>) : (<framer_motion_1.motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} layout className="sm:h-full min-h-[400px] flex flex-col">
                      {activeQuery.length > 0 && (<query_viewer_1.QueryViewer activeQuery={activeQuery} inputValue={inputValue}/>)}
                      {loading ? (<div className="h-full absolute bg-background/50 w-full flex flex-col items-center justify-center space-y-4">
                          <lucide_react_1.Loader2 className="h-12 w-12 animate-spin text-muted-foreground"/>
                          <p className="text-foreground">
                            {loadingStep === 1
                    ? "Generating SQL query..."
                    : "Running SQL query..."}
                          </p>
                        </div>) : results.length === 0 ? (<div className="flex-grow flex items-center justify-center">
                          <p className="text-center text-muted-foreground">
                            No results found.
                          </p>
                        </div>) : (<results_1.Results results={results} chartConfig={chartConfig} columns={columns}/>)}
                    </framer_motion_1.motion.div>)}
                </framer_motion_1.AnimatePresence>
              </div>
            </div>
          </div>
          <project_info_1.ProjectInfo />
        </framer_motion_1.motion.div>
      </div>
    </div>);
}
