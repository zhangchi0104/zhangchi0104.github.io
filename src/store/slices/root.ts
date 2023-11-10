import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export type SectionName = "about-me" | "home" | "projects";
interface AppState {
  fancyModeEnabled: boolean;
  activeSection: {
    name: SectionName;
    shouldScrollTo: boolean;
  };
}

const initialState: AppState = {
  fancyModeEnabled: true,
  activeSection: {
    name: "home",
    shouldScrollTo: false
  }
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
      state.activeSection.name = action.payload;
      state.activeSection.shouldScrollTo = false;
    },
    scrollToSection: (state, action: PayloadAction<SectionName>) => {
      state.activeSection.name = action.payload;
      state.activeSection.shouldScrollTo = true;
    }
  }
});

export const {
  enableFancyMode,
  disableFancyMode,
  toggleFancyMode,
  setActiveSectionName,
  scrollToSection
} = rootSlice.actions;

export default rootSlice.reducer;
