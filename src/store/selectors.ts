import { RootState } from ".";

export const selectFancyModeEnabled = (state: RootState) =>
  state.root.fancyModeEnabled;

export const selectActiveSectionName = (state: RootState) =>
  state.root.activeSection.name;

export const selectActiveSection = (state: RootState) =>
  state.root.activeSection;
