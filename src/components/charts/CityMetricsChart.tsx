import type { CityWeatherSnapshot } from "../../domain/CityWeatherSnapshot";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

type Props = { snapshots: CityWeatherSnapshot[] };

export function CityMetricsChart({ snapshots }: Props) {
  const data = snapshots.map((s) => ({
    city: s.city,
    tempC: round1(s.tempC),
    pressure: round0(s.pressure),
    humidity: round0(s.humidity),
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 10, right: 40, left: 10, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="city" interval={0} height={60} padding={{ left: 20, right: 20 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="tempC" name="Temperature (°C)" dot />
        <Line type="monotone" dataKey="pressure" name="Pressure (hPa)" dot />
        <Line type="monotone" dataKey="humidity" name="Humidity (%)" dot />
      </LineChart>
    </ResponsiveContainer>
  );
}

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}
function round0(n: number): number {
  return Math.round(n);
}
