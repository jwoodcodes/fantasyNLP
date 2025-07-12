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
    const fantasyPointsFields = ['position', 'recent_team', 'opponent_team', 'season_type', 'fantasy_points', 'fantasy_points_ppr', 'fantasy_points_avg', 'fantasy_points_ppr_avg', ];

    const headerNameMapping: Record<string, string> = {
      'player_name': 'Name',
      'player_display_name': 'Name',
      'fantasy_points_ppr': 'PPR/G',
      'fantasy_points': '1/2 PPR/G',
      'position': 'Pos',
      'recent_team': 'Team',
      'season_type': 'Type',
      'opponent_team': 'Opp',
      'passing_yards': 'Pa. Yards',
      'passing_tds': 'Pa. TDs',
      'passing_yards_after_catch': 'Pa. YAC',
      'rushing_yards': 'Ru. Yrds',
      'rushing_tds': 'Ru. TDs',
      'rushing_fumbles': 'Fum',
      'rushing_fumbles_lost': 'Fum. Lost',
      'rushing_first_downs': 'Ru. 1Ds',
      'rushing_epa': 'Ru. EPA',
      'receptions': 'Recs',
      'receiving_yards': 'Rec Yrds',
      'receiving_tds': 'Rec TDs',
      'receiving_air_yards': 'Air Yrds',
      'receiving_yards_after_catch': 'YAC',
      'receiving_first_downs': 'Rec 1Ds',
      'receiving_epa': 'Rec EPA',
      'racr': 'RACR',
      'target_share': 'Target %',
      'air_yards_share': 'Air Yrds %',
      'wopr': 'WOPR',
      'fantasy_points_avg': '1/2 PPR Avg',
      'fantasy_points_ppr_avg': 'PPR Avg',
      'games_played': 'G',
      'carries_total': 'Carries',
      'rushing_yards_total': 'Rush Yrds',
      'rushing_tds_total': 'Rush TDs',
      'rushing_fumbles_total': 'Fum',
      'rushing_fumbles_lost_total': 'Fum L',
      'rushing_first_downs_total': 'Ru 1Ds',
      'targets_total': 'Targets',
      'receiving_yards_total': 'Rec Yrds',
      'receiving_tds_total': 'Rec TDs',
      'receiving_air_yards_total': 'Air Yards',      
      'receiving_yards_after_catch_total': 'YAC',
      'receiving_first_downs_total': 'Rec. 1Ds',
      'fantasy_points_total': '1/2 PPR',   
    'completions_avg': 'comp/G',
    'attempts_avg': 'Att/G',
    'passing_yards_avg': 'Pa Yrds/G',
    'passing_tds_avg': 'Pa TDs/G',
    'interceptions_avg': 'INTs/G',
    'passing_air_yards_avg': 'Pa. Air Yrds/G',
    'passing_yards_after_catch_avg': 'Pa. YAC/G',
    'passing_first_downs_avg': 'Pa. 1Ds/G',    
      'carries_avg': 'Carries/G',
      'rushing_yards_avg': 'Ru. Yrds/g',
      'rushing_tds_avg': 'Ru. TDs/G',
      'rushing_fumbles_avg': 'Fum/G',
      'rushing_fumbles_lost_avg': 'Fum L/G',    
      'rushing_first_downs_avg': 'Ru. 1Ds/G',
      'rushing_epa_avg': 'Ru. EPA/G',
      'receptions_avg': 'Recs/G',
      'targets_avg': 'Targets/G',
      'receiving_yards_avg': 'Rec. Yrds/G',        
      'receiving_tds_avg': 'Rec TDs/G',
      'receiving_air_yards_avg': 'Air Yrds/G',        
      'receiving_yards_after_catch_avg': 'YAC/G',
      'receiving_first_downs_avg': 'Rec 1Ds/G',   
      'receiving_epa_avg': 'Rec EPA/G',
      'racr_avg': 'RACR',
      'target_share_avg': 'Target %', 
      'air_yards_share_avg': 'Air Yrds %',
      'wopr_avg': 'WOPR',  
      'routes_per_game': 'Routes/G',
      'firstDPRR': '1D/RR',
      'receptions_total': 'Recs',
    };

    const columnWidthMapping: Record<string, number> = {
      'player_name': 140,
      'player_display_name': 140,
      'season': 95,
      'week': 85,
      'fantasy_points': 100,
      'fantasy_points_avg': 130,
      'fantasy_points_ppr': 90,
      'fantasy_points_ppr_avg': 120,
      'position': 80,
      'recent_team': 90,
      'season_type': 80,
      'opponent_team': 80,
      'carries': 90,
      'rushing_yards': 100,
      'rushing_tds': 95,
      'rushing_fumbles': 80,
      'rushing_fumbles_lost': 110,
      'rushing_first_downs': 100,
      'rushing_epa': 100,
      'receptions': 80,
      'targets': 95,
      'receiving_yards': 100,
      'receiving_tds': 100,
      'receiving_air_yards': 100,
      'receiving_yards_after_catch': 80,
      'receiving_first_downs': 100,
      'receiving_epa': 100,
      'racr': 90,
      'target_share': 110,
      'air_yards_share': 120,
      'wopr': 90,
      'games_played': 70,
      'carries_total': 90,
      'rushing_yards_total': 110,
      'rushing_tds_total': 110,
      'rushing_fumbles_total': 75,
      'rushing_fumbles_lost_total': 85,
      'rushing_first_downs_total': 95,
      'targets_total': 95,
      'receiving_yards_total': 100,
      'receiving_tds_total': 100,
      'receiving_air_yards_total': 105,
      'receiving_yards_after_catch_total': 75,
      'receiving_first_downs_total': 100,
      'carries_avg': 110,
      'fantasy_points_total': 100,
      'rushing_yards_avg': 115,
      'rushing_tds_avg': 110,
      'rushing_fumbles_avg': 90,
      'rushing_fumbles_lost_avg': 100,
      'rushing_first_downs_avg': 110,
      'rushing_epa_avg': 110,
      'receptions_avg': 95,
      'targets_avg': 110,
      'receiving_yards_avg': 120,
      'receiving_tds_avg': 115,
      'receiving_air_yards_avg': 115,
      'receiving_yards_after_catch_avg': 115, 
      'receiving_first_downs_avg': 115,
      'receiving_epa_avg': 115,
      'racr_avg': 85,
      'target_share_avg': 105,
      'air_yards_share_avg': 120,
      'wopr_avg': 90,
      'YPRR': 90,
      'routes': 90,
      'routes_per_game': 110,
      'TPRR': 90,
      'firstDPRR': 90,
      'receptions_total': 80
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

    const allPlayersAreWRs = rowData.every(row => row.position === 'WR');

    let sortedOtherColumns = otherColumns;

    if (allPlayersAreWRs) {
      const receivingStatsFields = [
        'receptions', 'targets', 'receiving_yards', 'receiving_tds', 'receiving_air_yards',
        'receiving_yards_after_catch', 'receiving_first_downs', 'receiving_epa',
        'racr', 'target_share', 'air_yards_share', 'wopr'
      ];
      const rushingStatsFields = [
        'carries', 'rushing_yards', 'rushing_tds', 'rushing_fumbles',
        'rushing_fumbles_lost', 'rushing_first_downs', 'rushing_epa'
      ];

      const receivingColumns: ColDef[] = [];
      const rushingColumns: ColDef[] = [];
      const remainingOtherColumns: ColDef[] = [];

      otherColumns.forEach(col => {
        if (typeof col.field === 'string' && receivingStatsFields.includes(col.field)) {
          receivingColumns.push(col);
        } else if (typeof col.field === 'string' && rushingStatsFields.includes(col.field)) {
          rushingColumns.push(col);
        } else {
          remainingOtherColumns.push(col);
        }
      });
      sortedOtherColumns = [...receivingColumns, ...rushingColumns, ...remainingOtherColumns];
    }
    
    const sortedColumnDefs = [...pinnedColumns, ...fantasyPointsColumns, ...sortedOtherColumns];

    const finalDefs = sortedColumnDefs.map(col => ({
      ...col,
      sortable: true,
      filter: true,
      cellClass: 'ag-center-aligned-cell',
      headerClass: 'ag-center-aligned-cell'
    }));

    const rowNumberColDef: ColDef = {
      headerName: '#',
      valueGetter: 'node.rowIndex + 1',
      pinned: 'left' as const,
      width: 50,
      sortable: false,
      filter: false,
      cellClass: 'ag-row-number-cell',
      headerClass: 'ag-center-aligned-cell'
    };

    return [rowNumberColDef, ...finalDefs] as ColDef[];
  }, [columnDefs, rowData]);

  const pinnedBottomRowData = useMemo(() => {
    if (!rowData || rowData.length === 0) {
      return [];
    }

    const averages: { [key: string]: any } = {};
    const counts: { [key: string]: number } = {};

    // Initialize averages and counts for all columns defined in columnDefs
    processedColumnDefs.forEach(colDef => {
      if (colDef.field) {
        averages[colDef.field] = 0;
        counts[colDef.field] = 0;
      }
    });

    // Iterate over each row to sum values and count valid entries for each column
    rowData.forEach(row => {
      for (const key in row) {
        if (averages.hasOwnProperty(key) && typeof row[key] === 'number') {
          averages[key] += row[key] as number;
          counts[key]++;
        }
      }
    });

    // Calculate the average for each column independently
    for (const key in averages) {
      if (counts[key] > 0) {
        averages[key] = parseFloat((averages[key] / counts[key]).toFixed(2));
      } else {
        averages[key] = null; // or 0, or 'N/A' depending on desired output
      }
    }

    // Add a label for the average row
    const firstColumnField = processedColumnDefs.length > 1 ? processedColumnDefs[1].field : null;
    if (firstColumnField) {
      averages[firstColumnField] = 'Average';
    }

    return [averages];
  }, [rowData, processedColumnDefs]);

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