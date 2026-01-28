import { useState } from "react";
import { StateSearchForm } from "../components/StateSearchForm";
import { StateWeatherPanel } from "../components/StateWeatherPanel";
import { buildStateCatalog } from "../data/usStateCatalog";
import { WeatherRepository } from "../services/WeatherRepository";
import { OpenWeatherMapClient } from "../services/openWeather/OpenWeatherMapClient";
import { StateCityResolver } from "../services/state/StateCityResolver";
import type { StateWeatherResult } from "../domain/StateWeatherResult";

const owmClient = new OpenWeatherMapClient({
  apiKey: import.meta.env.VITE_OWM_API_KEY as string | undefined,
});

const weatherRepo = new WeatherRepository(owmClient);
const stateResolver = new StateCityResolver(buildStateCatalog());

export default function App() {
  const [results, setResults] = useState<StateWeatherResult[]>([]);

  async function handleSearch(stateName: string) {
    const state = stateResolver.resolve(stateName);
    const fetched = await weatherRepo.getStateSnapshot(state);

    setResults((prev) => [fetched, ...prev.filter((p) => p.key !== fetched.key)]);
  }

  return (
    <div className="container">
      <header className="header">
        <div>
          <h1 className="title">US State Weather Dashboard</h1>
          <p className="subtitle">
            Search a US state to see Temperature, Pressure, and Humidity for major cities.
          </p>
        </div>
      </header>

      <section className="card">
        <div className="cardHeader">
          <h2 className="cardTitle">Search</h2>
          <span className="small">Example: California, Texas, New York</span>
        </div>
        <div className="cardBody">
          <StateSearchForm onSearch={handleSearch} />
          <p className="helper">
            New searches are added at the top. Searching the same state again refreshes and moves it to the
            top.
          </p>
        </div>
      </section>

      <div className="stack">
        {results.map((r) => (
          <StateWeatherPanel key={r.key} result={r} />
        ))}
      </div>
    </div>
  );
}
