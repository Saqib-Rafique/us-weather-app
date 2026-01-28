import type { StateCatalogEntry } from "../domain/StateCatalog";
import type { CityWeatherSnapshot } from "../domain/CityWeatherSnapshot";
import type { StateWeatherResult } from "../domain/StateWeatherResult";
import { OpenWeatherMapClient } from "./openWeather/OpenWeatherMapClient";

export class WeatherRepository {
  constructor(private readonly client: OpenWeatherMapClient) {}

  async getStateSnapshot(state: StateCatalogEntry): Promise<StateWeatherResult> {
    const cities = [...state.cities];

    const concurrency = 3;
    let i = 0;
    const out: CityWeatherSnapshot[] = [];

    const workers = Array.from({ length: Math.min(concurrency, cities.length) }, async () => {
      while (i < cities.length) {
        const city = cities[i++];
        const sample = await this.client.getForecastByCity({ city, stateCode: state.code });
        out.push({ city, ...sample });
      }
    });

    await Promise.all(workers);
    out.sort((a, b) => cities.indexOf(a.city) - cities.indexOf(b.city));

    return {
      key: state.code.toUpperCase(),
      stateName: state.name,
      stateCode: state.code.toUpperCase(),
      createdAtIso: new Date().toISOString(),
      cities: out,
    };
  }
}
