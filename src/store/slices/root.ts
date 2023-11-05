import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  fancyModeEnabled: boolean;
}

const initialState: AppState = {
  fancyModeEnabled: true
};

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    enableFancyMode: (state) => {
      state.fancyModeEnabled = true;
    },
    disableFancyMode: (state) => {
      state.fancyModeEnabled = false;
    },
    toggleFancyMode: (state) => {
      state.fancyModeEnabled = !state.fancyModeEnabled;
    }
  }
});

export const { enableFancyMode, disableFancyMode, toggleFancyMode } =
  rootSlice.actions;

export default rootSlice.reducer;
