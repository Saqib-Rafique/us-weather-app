import { useGetStateSnapshotQuery } from "@services/api/weatherApi";
import { CityMetricsChart } from "@components/charts/CityMetricsChart";
import { CityMetricsTable } from "@components/tables/CityMetricsTable";

type Props = {
  stateCode: string;
  stateName: string;
  searchedAtIso: string;
};

export function StateWeatherPanel({
  stateCode,
  stateName,
  searchedAtIso,
}: Props) {
  const { data, isLoading, isError, error } = useGetStateSnapshotQuery({
    stateCode,
  });

  return (
    <section className="card stateBlock">
      <div className="cardHeader">
        <div className="stateMeta">
          <h3 className="cardTitle">
            {stateName} <span className="small">({stateCode})</span>
          </h3>
          <span className="small">
            Searched: {new Date(searchedAtIso).toLocaleString()}
          </span>
        </div>
      </div>

      <div className="cardBody">
        {isLoading ? <div className="helper">Loading weather data…</div> : null}

        {isError ? <div className="error">{formatRtkError(error)}</div> : null}

        {data ? (
          <>
            <div className="chartWrap">
              <CityMetricsChart snapshots={data.cities} />
            </div>
            <CityMetricsTable snapshots={data.cities} />
          </>
        ) : null}
      </div>
    </section>
  );
}

function formatRtkError(err: unknown): string {
  if (!err) return "Unknown error";
  if (typeof err === "string") return err;

  const anyErr = err as any;
  if (anyErr?.error && typeof anyErr.error === "string") return anyErr.error;
  if (anyErr?.data?.message) return String(anyErr.data.message);
  if (anyErr?.status) return `Request failed (${anyErr.status}).`;
  return "Request failed.";
}
