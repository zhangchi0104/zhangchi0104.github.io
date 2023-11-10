import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export type SectionName = "about-me" | "home" | "projects";
interface AppState {
  fancyModeEnabled: boolean;

  activeSection: SectionName;
  locale: string;
}

const initialState: AppState = {
  fancyModeEnabled: true,
  activeSection: "home",
  locale: "en"
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
    },
    setActiveSectionName: (state, action: PayloadAction<SectionName>) => {
      state.activeSection = action.payload;
    }
  }
});

export const {
  enableFancyMode,
  disableFancyMode,
  toggleFancyMode,
  setActiveSectionName
} = rootSlice.actions;

export default rootSlice.reducer;
