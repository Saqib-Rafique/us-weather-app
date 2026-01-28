import type { StateWeatherResult } from "../domain/StateWeatherResult";
import { CityMetricsChart } from "./charts/CityMetricsChart";
import { CityMetricsTable } from "./tables/CityMetricsTable";

type Props = { result: StateWeatherResult };

export function StateWeatherPanel({ result }: Props) {
  return (
    <section className="card stateBlock">
      <div className="cardHeader">
        <div className="stateMeta">
          <h3 className="cardTitle">
            {result.stateName} <span className="small">({result.stateCode})</span>
          </h3>
          <span className="small">Fetched: {new Date(result.createdAtIso).toLocaleString()}</span>
        </div>
      </div>
      <div className="cardBody">
        <div className="chartWrap">
          <CityMetricsChart snapshots={result.cities} />
        </div>
        <CityMetricsTable snapshots={result.cities} />
      </div>
    </section>
  );
}
