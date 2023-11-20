import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export type SectionName = "about-me" | "home" | "projects";
interface AppState {
  fancyModeEnabled: boolean;
  scrolled: boolean;
  activeSection: SectionName;
  locale: string;
}

const initialState: AppState = {
  fancyModeEnabled: true,
  activeSection: "home",
  locale: "en",
  scrolled: false
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
    },
    setScrolled: (state, action: PayloadAction<boolean>) => {
      state.scrolled = action.payload;
    }
  }
});

export const {
  enableFancyMode,
  disableFancyMode,
  toggleFancyMode,
  setActiveSectionName,
  setScrolled
} = rootSlice.actions;

export default rootSlice.reducer;
