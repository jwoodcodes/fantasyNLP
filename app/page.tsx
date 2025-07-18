"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  generateQuery,
  runGenerateSQLQuery,
} from "./actions";
import { Result } from "@/lib/types";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Results } from "@/components/results";
import { SuggestedQueries } from "@/components/suggested-queries";
import { Search } from "@/components/search";
import { Header } from "@/components/header";
import { FeedbackDisplay } from "@/components/feedback-display";


export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [results1, setResults1] = useState<Result[]>([]);
  const [columns1, setColumns1] = useState<string[]>([]);
  const [results2, setResults2] = useState<Result[]>([]);
  const [columns2, setColumns2] = useState<string[]>([]);
  const [activeQuery, setActiveQuery] = useState("");
  const [activeSQL, setActiveSQL] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(1);

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
      const { generatedQuery, originalQuestion } = await generateQuery(question);
      if (generatedQuery === undefined) {
        toast.error("An error occurred. Please try again.");
        setLoading(false);
        return;
      }
      let dualResults;

      if (typeof generatedQuery === 'string') {
        setActiveQuery(originalQuestion);
        setActiveSQL(generatedQuery);
        dualResults = await runGenerateSQLQuery({ query1: generatedQuery, query2: '' });
      } else if ('query' in generatedQuery) {
        setActiveQuery(originalQuestion);
        setActiveSQL(generatedQuery.query);
        dualResults = await runGenerateSQLQuery({ query1: generatedQuery.query, query2: '' });
      } else {
        setActiveQuery(originalQuestion);
        setActiveSQL(generatedQuery.query1);
        dualResults = await runGenerateSQLQuery({ query1: generatedQuery.query1, query2: generatedQuery.query2 });
      }

      // Ensure to handle the results correctly
      if ('table1Data' in dualResults) {
        setResults1(dualResults.table1Data);
        setColumns1(dualResults.table1Data.length > 0 ? Object.keys(dualResults.table1Data[0]) : []);
        setResults2(dualResults.table2Data);
        setColumns2(dualResults.table2Data.length > 0 ? Object.keys(dualResults.table2Data[0]) : []);
      } else {
        // Handle the case where dualResults is not as expected
        toast.error("Unexpected results format.");
      }
    } catch (e) {
      console.log(e);
      if (e instanceof Error && e.message === 'RATE_LIMIT_EXCEEDED') {
        toast.error('Rate limit exceeded. Please try again later.');
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
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
  };

  const handleClear = () => {
    setSubmitted(false);
    setInputValue("");
    clearExistingData();
  };

  return (
    <div className="dark:bg-gray-950">
      <div className="w-full max-w-90% min-h-dvh sm:min-h-0 flex flex-col ">
        <motion.div
          className="bg-card rounded-xl sm:border sm:border-border flex-grow flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="p-6 sm:p-8 flex flex-col flex-grow min-h-dvh dark:bg-gray-950">
            <Header handleClear={handleClear} />
            <h2 className="text-l sm:text-xl ml-auto mr-auto mb-20 text-foreground text-center flex items-center tracking-wide text-sky-400">
              <i>Use simple, natural language, to find complex football data</i>
            </h2>
            <Search
              handleClear={handleClear}
              handleSubmit={handleSubmit}
              inputValue={inputValue}
              setInputValue={setInputValue}
              submitted={submitted}
            />
            <div id="main-container" className="flex-grow flex flex-col sm:min-h-[420px]">
              <div className="flex-grow h-full">
                <AnimatePresence mode="wait">
                  {loading ? ( // Check if loading
                    <div className="flex justify-center items-center h-full">
                      <Loader2 className="animate-spin" /> {/* Display loading spinner */}
                    </div>
                  ) : !submitted ? (
                    <SuggestedQueries handleSuggestionClick={handleSuggestionClick} />
                  ) : (
                    <Results
                      results1={results1}
                      columns1={columns1}
                      results2={results2}
                      columns2={columns2}
                      query={activeQuery}
                      sql={activeSQL}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

