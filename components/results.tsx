"use client";

import { useState } from "react";
import { PlayerStats, Result } from "@/lib/types";
import AgGridTable from "./ui/ag-grid-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { toast } from "sonner";

export const Results = ({
  results1,
  columns1,
  results2,
  columns2,
  query,
  sql,
}: {
  results1: Result[];
  columns1: string[];
  results2: Result[];
  columns2: string[];
  query: string;
  sql: string;
}) => {
  const [feedback, setFeedback] = useState<"yes" | "no" | null>(null);
  const [reason, setReason] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleFeedbackSubmit = async () => {
    console.log("Submit Feedback button pressed.");
    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        sql,
        isExpected: feedback === "yes",
        reason: feedback === "no" ? reason : "",
      }),
    });

    if (response.ok) {
      console.log("Feedback submitted successfully.");
      toast.success("Thank you for your feedback, it's greatly appreciated!");
      setFeedbackSubmitted(true);
    } else {
      console.error("Failed to submit feedback.");
      toast.error("Failed to submit feedback. Please try again.");
    }
  };

  const formatColumnTitle = (title: string) => {
    return title
      .split("_")
      .map((word, index) =>
        index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word
      )
      .join(" ")
      .replace(/'/g, "&apos;");
  };

  return (
    <div className="flex-grow flex flex-col">
      {!feedbackSubmitted && (
        <div className="p-4">
          <p className="mb-2">Is this data what was expected?</p>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="yes"
              name="feedback"
              value="yes"
              onChange={() => setFeedback("yes")}
              className="mr-2"
            />
            <label htmlFor="yes" className="mr-4">
              Yes
            </label>
            <input
              type="radio"
              id="no"
              name="feedback"
              value="no"
              onChange={() => setFeedback("no")}
              className="mr-2"
            />
            <label htmlFor="no">No</label>
          </div>
          {feedback === "no" && (
            <div className="mb-4">
              <label htmlFor="reason" className="block mb-2">
                Briefly describe why the data isn't as expected:
              </label>
              <textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
          )}
          <Button onClick={handleFeedbackSubmit}>Submit Feedback</Button>
        </div>
      )}
      {results2 && results2.length > 0 ? (
        <Tabs defaultValue="table1" className="w-full flex-grow flex flex-col">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="table1">Table 1</TabsTrigger>
            <TabsTrigger value="table2">Table 2</TabsTrigger>
          </TabsList>
          <TabsContent value="table1" className="flex-grow">
            <div className="sm:min-h-[10px] relative">
              <AgGridTable
                rowData={results1}
                columnDefs={columns1.map((col) => ({
                  headerName: formatColumnTitle(col),
                  field: col,
                }))}
              />
            </div>
          </TabsContent>
          <TabsContent value="table2" className="flex-grow">
            <div className="sm:min-h-[10px] relative">
              <AgGridTable
                rowData={results2}
                columnDefs={columns2.map((col) => ({
                  headerName: formatColumnTitle(col),
                  field: col,
                }))}
              />
            </div>
          </TabsContent>
        </Tabs>
      ) : (
        <Tabs defaultValue="table" className="w-full flex-grow flex flex-col">
          {/* <TabsList className="grid w-full grid-cols-1">
            <TabsTrigger value="table">Table</TabsTrigger>
          </TabsList> */}
          <TabsContent value="table" className="flex-grow">
            <div className="sm:min-h-[10px] relative">
              <AgGridTable
                rowData={results1}
                columnDefs={columns1.map((col) => ({
                  headerName: formatColumnTitle(col),
                  field: col,
                }))}
              />
            </div>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};
