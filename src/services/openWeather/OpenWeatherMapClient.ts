import { ApiError, ValidationError } from "../../utils/errors";

type OwmForecastResponse = {
  list: Array<{
    dt: number;
    dt_txt?: string;
    main: { temp: number; pressure: number; humidity: number };
  }>;
};

export interface ForecastSample {
  sampleTimeUtc: string;
  tempC: number;
  pressure: number;
  humidity: number;
}

export interface OpenWeatherMapClientOptions {
  apiKey?: string;
  baseUrl?: string;
}

export class OpenWeatherMapClient {
  private readonly baseUrl: string;

  constructor(private readonly opts: OpenWeatherMapClientOptions) {
    this.baseUrl = opts.baseUrl ?? "https://api.openweathermap.org/data/2.5";
  }

  async getForecastByCity(params: {
    city: string;
    stateCode: string;
  }): Promise<ForecastSample> {
    const apiKey = this.opts.apiKey?.trim();
    if (!apiKey) {
      throw new ValidationError(
        "Missing API key. Add VITE_OWM_API_KEY to your .env (see .env.example)."
      );
    }

    const q = `${params.city},${params.stateCode},US`;
    const url = new URL(`${this.baseUrl}/forecast`);
    url.searchParams.set("q", q);
    url.searchParams.set("appid", apiKey);
    url.searchParams.set("units", "metric");

    const res = await fetch(url.toString());
    if (!res.ok)
      throw new ApiError(
        `OpenWeatherMap failed for "${q}" (HTTP ${res.status}).`
      );

    const data = (await res.json()) as OwmForecastResponse;
    const first = data.list?.[0];
    if (!first) throw new ApiError(`No forecast samples returned for "${q}".`);

    return {
      sampleTimeUtc: first.dt_txt ?? new Date(first.dt * 1000).toISOString(),
      tempC: first.main.temp,
      pressure: first.main.pressure,
      humidity: first.main.humidity,
    };
  }
}
