import type { CityWeatherSnapshot } from "@domain/CityWeatherSnapshot";

type Props = { snapshots: CityWeatherSnapshot[] };

export function CityMetricsTable({ snapshots }: Props) {
  return (
    <table className="table" aria-label="City weather metrics table">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
          <th>Sample time (UTC)</th>
        </tr>
      </thead>
      <tbody>
        {snapshots.map((s) => (
          <tr key={s.city}>
            <td>{s.city}</td>
            <td>
              <span className="kv">
                <b>{Math.round(s.tempC * 10) / 10}</b>°C
              </span>
            </td>
            <td>
              <span className="kv">
                <b>{Math.round(s.pressure)}</b>hPa
              </span>
            </td>
            <td>
              <span className="kv">
                <b>{Math.round(s.humidity)}</b>%
              </span>
            </td>
            <td>{s.sampleTimeUtc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
