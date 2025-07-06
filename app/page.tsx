"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  generateChartConfig,
  generateQuery,
  runGenerateSQLQuery,
} from "./actions";
import { Config, Result } from "@/lib/types";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { ProjectInfo } from "@/components/project-info";
import { Results } from "@/components/results";
import { SuggestedQueries } from "@/components/suggested-queries";
import { QueryViewer } from "@/components/query-viewer";
import { Search } from "@/components/search";
import { Header } from "@/components/header";


export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [results1, setResults1] = useState<Result[]>([]);
  const [columns1, setColumns1] = useState<string[]>([]);
  const [results2, setResults2] = useState<Result[]>([]);
  const [columns2, setColumns2] = useState<string[]>([]);
  const [activeQuery, setActiveQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(1);
  const [chartConfig, setChartConfig] = useState<Config | null>(null);

  const handleSubmit = async (suggestion?: string) => {
    const question = suggestion ?? inputValue;
    if (inputValue.length === 0 && !suggestion) return;
    clearExistingData();
    if (question.trim()) {
      setSubmitted(true);
    }
    setLoading(true);
    setLoadingStep(1);
    setActiveQuery("");
    try {
      const query = await generateQuery(question);
      if (query === undefined) {
        toast.error("An error occurred. Please try again.");
        setLoading(false);
        return;
      }
      setActiveQuery(query);
      setLoadingStep(2);
      if (typeof query === 'string') {
        const companies = await runGenerateSQLQuery(query);
        const cols = companies.length > 0 ? Object.keys(companies[0]) : [];
        setResults1(companies as Result[]);
        setColumns1(cols);
        setResults2([]);
        setColumns2([]);
        if (companies.length > 0) {
          const generation = await generateChartConfig(companies as Result[], question);
          setChartConfig(generation.config);
        } else {
          setChartConfig(null);
        }
      } else {
        const dualResults = await runGenerateSQLQuery(query as { query1: string; query2: string });
        setResults1(dualResults.table1Data);
        setColumns1(dualResults.table1Data.length > 0 ? Object.keys(dualResults.table1Data[0]) : []);
        setResults2(dualResults.table2Data);
        setColumns2(dualResults.table2Data.length > 0 ? Object.keys(dualResults.table2Data[0]) : []);
        setChartConfig(null);
      }
    } catch (e) {
      if (e instanceof Error && e.message.includes('Rate limit exceeded')) {
        toast.error('Rate limit exceeded. Please try again later.');
      } else {
        toast.error("An error occurred. Please try again.");
      }
      setLoading(false);
    }
  };

  const handleSuggestionClick = async (suggestion: string) => {
    setInputValue(suggestion);
    try {
      await handleSubmit(suggestion);
    } catch (e) {
      toast.error("An error occurred. Please try again.");
    }
  };

  const clearExistingData = () => {
    setActiveQuery("");
    setResults1([]);
    setColumns1([]);
    setResults2([]);
    setColumns2([]);
    setChartConfig(null);
  };

  const handleClear = () => {
    setSubmitted(false);
    setInputValue("");
    clearExistingData();
  };

  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 flex items-start justify-center p-0 sm:p-8">
      <div className="w-full max-w-90% min-h-dvh sm:min-h-0 flex flex-col ">
        <motion.div
          className="bg-card rounded-xl sm:border sm:border-border flex-grow flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="p-6 sm:p-8 flex flex-col flex-grow min-h-dvh">
            <Header handleClear={handleClear} />
            <Search
              handleClear={handleClear}
              handleSubmit={handleSubmit}
              inputValue={inputValue}
              setInputValue={setInputValue}
              submitted={submitted}
            />
            <div
              id="main-container"
              className="flex-grow flex flex-col sm:min-h-[420px]"
            >
              <div className="flex-grow h-full">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <SuggestedQueries
                      handleSuggestionClick={handleSuggestionClick}
                    />
                    // <div>
                    //   <p>
                    //     enter query to display data
                    //   </p>
                    // </div>
                  ) : (
                    <motion.div
                      key="results"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      layout
                      className="sm:h-full min-h-[400px] flex flex-col"
                    >
                      {activeQuery.length > 0 && (
                        <QueryViewer
                          activeQuery={activeQuery}
                          inputValue={inputValue}
                        />
                      )}
                      {loading ? (
                        <div className="h-full absolute bg-background/50 w-full flex flex-col items-center justify-center space-y-4">
                          <Loader2 className="h-12 w-12 animate-spin text-muted-foreground" />
                          <p className="text-foreground">
                            {loadingStep === 1
                              ? "fetching data..."
                              : "Returning data..."}
                          </p>
                        </div>
                      ) : results1.length === 0 ? (
                        <div className="flex-grow flex items-center justify-center">
                          <p className="text-center text-muted-foreground">
                            No results found.
                          </p>
                        </div>
                      ) : (
                        <Results
                          results1={results1}
                          columns1={columns1}
                          results2={results2}
                          columns2={columns2}
                          chartConfig={chartConfig}
                        />
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          {/* <ProjectInfo /> */}
        </motion.div>
      </div>
    </div>
  );
}
