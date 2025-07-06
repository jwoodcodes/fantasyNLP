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

  return (
    <div className="ag-theme-alpine-dark" style={{ height: 400, width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs.map(col => ({ ...col, sortable: true, filter: true }))}
        modules={[AllCommunityModule]}
        theme={theme}
      />
    </div>
  );
};

export default AgGridTable;
