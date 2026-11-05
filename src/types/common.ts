export type Coordinates = {
    lon: number,
    lat: number
}

export type Address = {
  road?: string;
  city_block?: string;
  quarter?: string;
  suburb?: string;
  city?: string;
  state?: string;
  "ISO3166-2-lvl4"?: string;
  postcode?: string;
  country?: string;
  country_code?: string;
};

export type PlaceOfLocation = {
  place_id?: number;
  licence?: string;
  osm_type?: string;
  osm_id?: number;
  lat?: string;
  lon?: string;
  "class"?: string;
  type?: string;
  place_rank?: number;
  importance?: number;
  addresstype?: string;
  name?: string;
  display_name?: string;
  address: Address;
  boundingbox?: [string, string, string, string];
};

export interface HourlyData {
    time: Date[];
    temperature_2m: Float32Array<ArrayBufferLike> | null;
    rain: Float32Array<ArrayBufferLike> | null;
    weather_code: Float32Array<ArrayBufferLike> | null;
}

export interface CurrentData {
    time: Date;
    temperature_2m: number | null;
    rain: number | null;
    showers: number | null;
    snowfall: number | null;
    cloud_cover: number | null;
    weather_code: number | null;
    apparent_temperature: number | null;
    relative_humidity_2m: number | null;
    wind_speed_10m: number | null;
    is_day: number | null;
    pressure_msl: number | null;
    wind_direction_10m: number | null;
}

export interface DailyData {
    time: Date[];
    temperature_2m_max: Float32Array<ArrayBufferLike> | null;
    temperature_2m_min: Float32Array<ArrayBufferLike> | null;
    weather_code: Float32Array<ArrayBufferLike> | null;
    sunrise: Array<Date> | null;
    sunset: Array<Date> | null;
}

export interface WeatherResponse {
    latitude: number;
    longitude: number;
    timezone: string | null;
    elevation: number;
    utcOffsetSeconds: number;
    timezoneAbbreviation: string | null;
    hourly: HourlyData;
    daily: DailyData;
    current: CurrentData;
}

export type AdditionalRow = {
    label: string;
    value: number;
}