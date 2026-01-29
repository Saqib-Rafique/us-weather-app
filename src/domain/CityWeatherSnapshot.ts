import type { WeatherMetrics } from "./WeatherMetrics";

export interface CityWeatherSnapshot extends WeatherMetrics {
  city: string;
  sampleTimeUtc: string;
}
