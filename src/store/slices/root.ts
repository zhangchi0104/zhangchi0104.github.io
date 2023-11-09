import { createSlice } from "@reduxjs/toolkit";
type SectionName = "about-me" | "home" | "projects";
interface AppState {
  fancyModeEnabled: boolean;
  activeSection: SectionName;
}

const initialState: AppState = {
  fancyModeEnabled: true,
  activeSection: "home"
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
