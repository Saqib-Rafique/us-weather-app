import type { CityWeatherSnapshot } from "./CityWeatherSnapshot";

export interface StateWeatherResult {
  key: string;
  stateName: string;
  stateCode: string;
  createdAtIso: string;
  cities: CityWeatherSnapshot[];
}
