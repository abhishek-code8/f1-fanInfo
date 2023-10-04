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

export interface SessionApiResponse {
  meta: Meta;
  results: Race[];
}

export interface SeasonsApiResponse {
    meta: Meta;
    results: seasonObj[];
}
