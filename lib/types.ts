import { z } from "zod";

export type Unicorn = {
  id: number;
  company: string;
  valuation: number;
  date_joined: Date | null;
  country: string;
  city: string;
  industry: string;
  select_investors: string;
};

export type Result = Record<string, string | number>;

export type PlayerStats = {
  player_name: string;
  player_display_name: string;
  fantasy_points_ppr: number;
  fantasy_points: number;
  position: string;
  recent_team: string;
  season_type?: string;
  opponent_team?: string;
  passing_yards?: number;
  passing_tds?: number;
  passing_yards_after_catch?: number;
  rushing_yards?: number;
  rushing_tds?: number;
  rushing_fumbles?: number;
  rushing_fumbles_lost?: number;
  rushing_first_downs?: number;
  week?: number;
  season?: number;
  fantasy_points_avg?: number;
  fantasy_points_ppr_avg?: number;
  carries?: number;
  [key: string]: string | number | undefined;
};
