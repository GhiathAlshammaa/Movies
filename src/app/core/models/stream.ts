export interface Stream {
  display_priority?: number;
  logo_path?: string;
  provider_name?: string;
  provider_id: number;
  url?: string;
}

export interface StreamCountry {
  link?: string;
  flatrate?: Stream[];
}

export interface StreamStatus {
  countryCode: StreamCountry[];
}
