import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SearchedState = {
  stateCode: string;
  stateName: string;
  searchedAtIso: string;
};

type SearchHistoryState = {
  states: SearchedState[];
};

const initialState: SearchHistoryState = {
  states: [],
};

const slice = createSlice({
  name: "searchHistory",
  initialState,
  reducers: {
    addOrMoveToTop(
      state,
      action: PayloadAction<{ stateCode: string; stateName: string }>
    ) {
      const code = action.payload.stateCode.toUpperCase();
      const name = action.payload.stateName;

      const idx = state.states.findIndex((s) => s.stateCode === code);
      if (idx !== -1) state.states.splice(idx, 1);

      state.states.unshift({
        stateCode: code,
        stateName: name,
        searchedAtIso: new Date().toISOString(),
      });
    },
  },
});

export const { addOrMoveToTop } = slice.actions;
export default slice.reducer;
