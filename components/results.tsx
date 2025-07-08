"use client";

import { Result } from "@/lib/types";
import AgGridTable from './ui/ag-grid-table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export const Results = ({
  results1,
  columns1,
  results2,
  columns2,
}: {
  results1: Result[];
  columns1: string[];
  results2: Result[];
  columns2: string[];
}) => {
  const formatColumnTitle = (title: string) => {
    return title
      .split("_")
      .map((word, index) =>
        index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word,
      )
      .join(" ");
  };

  

  return (
    <div className="flex-grow flex flex-col">
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
