export interface Session {
  id: number;
  session_name: string;
  date: string; // Timestamp in ISO 8601 Format
}

export interface Race {
  race_id: number;
  name: string;
  country: string;
  status: "Confirmed" | "Postponed" | "Cancelled" | "Complete";
  season: number;
  start_date: string; // UTC Date in YYYY-MM-DD format
  end_date: string; // UTC Date in YYYY-MM-DD format
  track: string;
  sessions: Session[];
}

export interface Meta {
  title: string;
  description: string;
  fields: {
    race_id: string;
    name: string;
    country: string;
    status: string;
    season: string;
    start_date: string;
    end_date: string;
    track: string;
    session_array: {
      id: string;
      session_name: string;
      date: string;
    };
  };
}

export interface seasonObj {
  season: string;
}

export interface RaceApiResponse {
  meta: Meta;
  results: Race[];
}

export interface SeasonsApiResponse {
  meta: Meta;
  results: seasonObj[];
}

export interface Constructor {
  team_id: number;
  team_name: string;
  season: number;
}

export interface ConstructorApiResponse {
  meta: {
    title: string;
    description: string;
    fields: {
      team_id: string;
      team_name: string;
      season: string;
    };
  };
  results: Constructor[];
}

export interface ConstructorStanding {
  position: number;
  points: number;
  team_id: number;
  team_name: string;
  season: number;
}

export interface Driver {
  driver_id: number;
  driver_name: string;
  team_id: number;
  team_name: string;
  nationality: string;
  is_reserve: number;
  updated: string; // You can use a Date type here if needed
  season: number;
}

export interface DriverList {
  meta: {
    title: string;
    description: string;
    fields: {
      driver_id: string;
      driver_name: string;
      team_id: string;
      team_name: string;
      nationality: string;
      is_reserve: string;
      updated: string;
      season: string;
    };
  };
  results: Driver[];
}
export interface ConstructorStandingsApiResponse {
  meta: {
    title: string;
    description: string;
    fields: {
      position: string;
      points: string;
      team_id: string;
      team_name: string;
      season: string;
    };
  };
  results: ConstructorStanding[];
}

export interface DriverStanding {
  position: number;
  points: number;
  driver_id: number;
  driver_name: string;
  team_id: number;
  team_name: string;
  nationality: string;
  is_reserve: number;
  updated: string; // Timestamp in ISO 8601 Format UTC timezone
  season: number;
}

export interface DriverStandingsApiResponse {
  meta: {
    title: string;
    description: string;
    fields: {
      position: string;
      points: string;
      driver_id: string;
      driver_name: string;
      team_id: string;
      team_name: string;
      nationality: string;
      is_reserve: string;
      updated: string;
      season: string;
    };
  };
  results: DriverStanding[];
}

export interface GenericApiResponse{
    meta: any,
    results: any,

}
