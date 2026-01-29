import { StateSearchForm } from "@components/StateSearchForm";
import { StateWeatherPanel } from "@components/StateWeatherPanel";
import { buildStateCatalog } from "@data/usStateCatalog";
import { StateCityResolver } from "@services/state/StateCityResolver";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { addOrMoveToTop } from "@services/state/searchHistorySlice";

const stateResolver = new StateCityResolver(buildStateCatalog());

export default function App() {
  const dispatch = useAppDispatch();
  const states = useAppSelector((s) => s.searchHistory.states);

  async function handleSearch(stateName: string) {
    const state = stateResolver.resolve(stateName);
    dispatch(addOrMoveToTop({ stateCode: state.code, stateName: state.name }));
  }

  return (
    <div className="container">
      <header className="header">
        <div>
          <h1 className="title">US State Weather Dashboard</h1>
          <p className="subtitle">
            Search a US state to see Temperature, Pressure, and Humidity for major cities (OpenWeatherMap forecast5).
          </p>
        </div>
        <span className="badge">TypeScript • Redux Toolkit + RTK Query • Recharts</span>
      </header>

      <section className="card">
        <div className="cardHeader">
          <h2 className="cardTitle">Search</h2>
          <span className="small">Example: California, Texas, New York</span>
        </div>
        <div className="cardBody">
          <StateSearchForm onSearch={handleSearch} />
          <p className="helper">New searches are added at the top. Searching the same state moves it to the top.</p>
        </div>
      </section>

      <div className="stack">
        {states.map((s) => (
          <StateWeatherPanel
            key={s.stateCode}
            stateCode={s.stateCode}
            stateName={s.stateName}
            searchedAtIso={s.searchedAtIso}
          />
        ))}
      </div>
    </div>
  );
}
