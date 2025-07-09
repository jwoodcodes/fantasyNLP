"use client";

import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry, ColDef } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);

// Define a type for your column fields
type ColumnField = 'player_name' | 'player_display_name' | 'fantasy_points_ppr' | 'fantasy_points' | 'position' | 'recent_team' | 'season_type' | 'opponent_team' | 'week' | 'season' | 'carries' | 'rushing_yards' | 'rushing_tds' | 'rushing_fumbles' | 'rushing_fumbles_lost' | 'rushing_first_downs';

interface CustomColDef extends ColDef {
  field: ColumnField; // Ensure field is one of the defined ColumnField types
}

const AgGridTable = ({ rowData, columnDefs }: { rowData: any[]; columnDefs: CustomColDef[]; }) => {
  const headerNameMapping: Record<ColumnField, string> = {
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
    'rushing_first_downs': 'Ru. 1Ds',
    'week': 'Week',
    'season': 'Season',
    'carries': 'Carries',
  };

  const columnWidthMapping: Record<ColumnField, number> = {
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
    'rushing_first_downs': 100,
  };

  const processedColumnDefs = useMemo(() => {
    const pinnedColumnFields: ColumnField[] = ['player_name', 'player_display_name', 'week', 'season'];
    const fantasyPointsFields: ColumnField[] = ['position', 'recent_team', 'fantasy_points', 'fantasy_points_ppr'];

    const pinnedColumns: CustomColDef[] = [];
    const fantasyPointsColumns: CustomColDef[] = [];
    const otherColumns: CustomColDef[] = [];

    columnDefs.forEach(colDef => {
      const newColDef: CustomColDef = { ...colDef };
      if (newColDef.field && headerNameMapping[newColDef.field]) {
        newColDef.headerName = headerNameMapping[newColDef.field];
      }
      if (newColDef.field && columnWidthMapping[newColDef.field]) {
        newColDef.width = columnWidthMapping[newColDef.field];
      }

      if (pinnedColumnFields.includes(newColDef.field)) {
        pinnedColumns.push({ ...newColDef, pinned: 'left' });
      } else if (fantasyPointsFields.includes(newColDef.field)) {
        fantasyPointsColumns.push(newColDef);
      } else {
        otherColumns.push(newColDef);
      }
    });

    const sortedColumnDefs = [...pinnedColumns, ...fantasyPointsColumns, ...otherColumns];

    return sortedColumnDefs.map(col => ({
      ...col,
      sortable: true,
      filter: true,
      cellClass: 'ag-center-aligned-cell',
      headerClass: 'ag-center-aligned-cell'
    }));
  }, [columnDefs]);

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
        columnDefs={processedColumnDefs}
        modules={[AllCommunityModule]}
        domLayout="normal"
      />
    </div>
  );
};

export default AgGridTable;