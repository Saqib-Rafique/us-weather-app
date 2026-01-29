import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "@services/api/weatherApi";
import searchHistoryReducer from "@services/state/searchHistorySlice";

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    searchHistory: searchHistoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
