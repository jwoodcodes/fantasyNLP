"use client";

import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import {
  AllCommunityModule,
  ModuleRegistry,
  createGrid,
  themeAlpine,
  ColDef,
} from "ag-grid-community";
import { Result } from "@/lib/types";
ModuleRegistry.registerModules([AllCommunityModule]);


const AgGridTable = ({ rowData, columnDefs }: { rowData: Result[]; columnDefs: ColDef[]; }) => {
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
  }, [myTheme]);

  const processedColumnDefs = useMemo(() => {
    const pinnedColumnFields = ['player_name', 'player_display_name', 'week', 'season'];
    const fantasyPointsFields = ['position', 'recent_team', 'fantasy_points', 'fantasy_points_ppr', 'fantasy_points_avg', 'fantasy_points_ppr_avg'];

    const headerNameMapping: Record<string, string> = {
      'player_name': 'Name',
      'player_display_name': 'Name',
      'fantasy_points_ppr': 'PPR',
      'fantasy_points': '1/2 PPR',
      'position': 'Pos',
      'recent_team': 'Team',
      'season_type': 'Game Type',
      'opponent_team': 'Opp',
      'passing_yards': 'Pa. Yards',
      'passing_tds': 'Pa. TDs',
      'passing_yards_after_catch': 'Pa. YAC',
      'rushing_yards': 'Ru. Yrds',
      'rushing_tds': 'Ru. TDs',
      'rushing_fumbles': 'Fumbles',
      'rushing_fumbles_lost': 'Fum. Lost',
      'rushing_first_downs': 'Ru. 1Ds'
    };

    const columnWidthMapping: Record<string, number> = {
      'player_name': 140,
      'player_display_name': 140,
      'season': 95,
      'week': 90,
      'fantasy_points': 100,
      'fantasy_points_ppr': 100,
      'position': 80,
      'recent_team': 90,
      'season_type': 120,
      'opponent_team': 90,
      'carries': 90,
      'rushing_yards': 100,
      'rushing_tds': 100,
      'rushing_fumbles': 100,
      'rushing_fumbles_lost': 110,
      'rushing_first_downs': 100
    };

    const pinnedColumns: ColDef[] = [];
    const fantasyPointsColumns: ColDef[] = [];
    const otherColumns: ColDef[] = [];

    columnDefs.forEach(colDef => {
      const newColDef = { ...colDef };
      if (typeof newColDef.field === 'string' && headerNameMapping[newColDef.field]) {
        newColDef.headerName = headerNameMapping[newColDef.field];
      }
      if (typeof newColDef.field === 'string' && columnWidthMapping[newColDef.field]) {
        newColDef.width = columnWidthMapping[newColDef.field];
      }

      if (typeof newColDef.field === 'string' && pinnedColumnFields.includes(newColDef.field)) {
        pinnedColumns.push({ ...newColDef, pinned: 'left' as const });
      } else if (typeof newColDef.field === 'string' && fantasyPointsFields.includes(newColDef.field)) {
        fantasyPointsColumns.push(newColDef);
      } else {
        otherColumns.push(newColDef);
      }
    });

    const sortedColumnDefs = [...pinnedColumns, ...fantasyPointsColumns, ...otherColumns];

    const finalDefs = sortedColumnDefs.map(col => ({
      ...col,
      sortable: true,
      filter: true,
      cellClass: 'ag-center-aligned-cell',
      headerClass: 'ag-center-aligned-cell'
    }));

    const rowNumberColDef: ColDef = {
      headerName: '#',
      pinned: 'left' as const,
      width: 50,
      sortable: false,
      filter: false,
      cellClass: 'ag-row-number-cell',
      headerClass: 'ag-center-aligned-cell'
    };

    return [rowNumberColDef, ...finalDefs] as ColDef[];
  }, [columnDefs]);

  const pinnedBottomRowData = useMemo(() => {
    if (!rowData || rowData.length === 0) {
      return [{}];
    }

    const averages: { [key: string]: any } = {};
    
    const filteredRowData = rowData.filter(row => typeof row.fantasy_points_ppr === 'number' && row.fantasy_points_ppr >= 1);
    const rowCount = filteredRowData.length;

    // Initialize sums and count for numeric columns
    columnDefs.forEach(col => {
      const field = col.field;
      if (typeof field === 'string' && rowData.length > 0 && typeof rowData[0][field] === 'number') {
        averages[field] = 0;
      }
    });

    filteredRowData.forEach(row => {
      for (const key in averages) {
        if (typeof row[key] === 'number') {
          averages[key] += row[key] as number;
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
    if (columnDefs.length > 0 && typeof columnDefs[0].field === 'string') {
      averages[columnDefs[0].field as string] = 'Average';
    }

    return [averages];
  }, [rowData, columnDefs]);

  return (
    <div className="ag-theme-alpine-dark ag-grid-wrapper" style={{ height: '600px', width: '100%', maxHeight: '800px' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={processedColumnDefs}
        modules={[AllCommunityModule]}
        theme={theme}
        pinnedBottomRowData={pinnedBottomRowData}
        domLayout="normal"
      />
    </div>
  );
};

export default AgGridTable;