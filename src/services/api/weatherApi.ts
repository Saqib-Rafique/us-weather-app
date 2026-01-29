import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { StateWeatherResult } from "@domain/StateWeatherResult";
import type { CityWeatherSnapshot } from "@domain/CityWeatherSnapshot";
import { buildStateCatalog } from "@data/usStateCatalog";

type OwmForecastResponse = {
  list: Array<{
    dt: number;
    dt_txt?: string;
    main: { temp: number; pressure: number; humidity: number };
  }>;
};

const API_KEY = import.meta.env.VITE_OWM_API_KEY as string;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const rawBaseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: rawBaseQuery,
  endpoints: (builder) => ({
    getStateSnapshot: builder.query<StateWeatherResult, { stateCode: string }>({
      async queryFn({ stateCode }, api, extraOptions) {
        const catalog = buildStateCatalog();
        const st = catalog.find((s) => s.code === stateCode.toUpperCase());
        if (!st) {
          return {
            error: {
              status: "CUSTOM_ERROR",
              error: "Invalid state code",
            } as any,
          };
        }

        const cities = [...st.cities];
        const out: CityWeatherSnapshot[] = [];

        for (const city of cities) {
          const q = `${city},${stateCode},US`;

          const res = await rawBaseQuery(
            `forecast?q=${encodeURIComponent(q)}&units=metric&appid=${encodeURIComponent(API_KEY)}`,
            api,
            extraOptions
          );

          if ("error" in res)
            return { error: res.error as FetchBaseQueryError };

          const data = res.data as OwmForecastResponse;
          const first = data.list?.[0];
          if (!first) {
            return {
              error: {
                status: "CUSTOM_ERROR",
                error: `No forecast for ${q}`,
              } as any,
            };
          }

          out.push({
            city,
            tempC: first.main.temp,
            pressure: first.main.pressure,
            humidity: first.main.humidity,
            sampleTimeUtc:
              first.dt_txt ?? new Date(first.dt * 1000).toISOString(),
          });
        }

        return {
          data: {
            key: st.code,
            stateName: st.name,
            stateCode: st.code,
            createdAtIso: new Date().toISOString(),
            cities: out,
          },
        };
      },
    }),
  }),
});

export const { useGetStateSnapshotQuery } = weatherApi;
