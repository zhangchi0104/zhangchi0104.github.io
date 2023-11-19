import { RootState } from ".";

export const selectFancyModeEnabled = (state: RootState) =>
  state.root.fancyModeEnabled;

export const selectActiveSectionName = (state: RootState) =>
  state.root.activeSection;

export const selectActiveSection = (state: RootState) =>
  state.root.activeSection;

export const selectLocale = (state: RootState) => state.root.locale;
