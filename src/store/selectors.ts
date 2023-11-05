import { RootState } from ".";

export const selectFancyModeEnabled = (state: RootState) =>
  state.root.fancyModeEnabled;
