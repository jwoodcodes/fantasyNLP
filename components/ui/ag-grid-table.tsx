"use client";

import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import {
  AllCommunityModule,
  ModuleRegistry,
  createGrid,
  themeAlpine,
} from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);



const AgGridTable = ({ rowData, columnDefs }: { rowData: any[]; columnDefs: any[]; }) => {
  const myTheme = themeAlpine.withParams({
    backgroundColor: "hsl(210deg, 15%, 25%)",
    foregroundColor: "hsl(210deg, 20%, 77%)",
    headerTextColor: "hsl(210deg, 20%, 77%)",
    headerBackgroundColor: "hsl(210deg, 15%, 20%)",
    oddRowBackgroundColor: "hsl(210deg, 10%, 40%)",
    headerColumnResizeHandleColor: "hsl(210deg, 19%, 10%)",
  });

  const theme = useMemo(() => {
    return myTheme;
  }, []);

  const pinnedBottomRowData = useMemo(() => {
    if (!rowData || rowData.length === 0) {
      return [{}];
    }

    const averages: { [key: string]: any } = {};
    
    const filteredRowData = rowData.filter(row => row.fantasy_points_ppr >= 1);
    const rowCount = filteredRowData.length;

    // Initialize sums and count for numeric columns
    columnDefs.forEach(col => {
      const field = col.field;
      if (field && rowData.length > 0 && typeof rowData[0][field] === 'number') {
        averages[field] = 0;
      }
    });

    filteredRowData.forEach(row => {
      for (const key in averages) {
        if (typeof row[key] === 'number') {
          averages[key] += row[key];
        }
      }
    });

    // Calculate averages and round to 2 decimal places
    for (const key in averages) {
      if (rowCount > 0) {
        averages[key] = parseFloat((averages[key] / rowCount).toFixed(2));
      } else {
        averages[key] = 0;
      }
    }

    // Add a label for the average row
    if (columnDefs.length > 0) {
      averages[columnDefs[0].field] = 'Average';
    }

    return [averages];
  }, [rowData, columnDefs]);

  return (
    <div className="ag-theme-alpine-dark ag-grid-wrapper" style={{ height: '600px', width: '100%', maxHeight: '800px' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs.map(col => ({ ...col, sortable: true, filter: true }))}
        modules={[AllCommunityModule]}
        theme={theme}
        pinnedBottomRowData={pinnedBottomRowData}
        domLayout="normal"
      />
    </div>
  );
};

export default AgGridTable;
