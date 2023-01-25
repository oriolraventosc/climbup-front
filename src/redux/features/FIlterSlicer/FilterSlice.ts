import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Filter {
  installation: string;
  activity: string;
  location: string;
  limit: number;
}

const filterInitialState: Filter = {
  installation: "",
  activity: "",
  location: "",
  limit: 6,
};

const FilterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    addInstallation: (initialState, action: PayloadAction<string>) => ({
      ...initialState,
      installation: action.payload,
    }),
    addActivity: (initialState, action: PayloadAction<string>) => ({
      ...initialState,
      activity: action.payload,
    }),
    addLocation: (initialState, action: PayloadAction<string>) => ({
      ...initialState,
      location: action.payload,
    }),
    increaseLimit: (initialState) => ({
      ...initialState,
      limit: initialState.limit + 6,
    }),
  },
});

export const filterActionsReducer = FilterSlice.reducer;
export const {
  addActivity: addActivityActionCreator,
  addInstallation: addInstallationActionCreator,
  addLocation: addLocationActionCreator,
  increaseLimit: increaseLimitActionCreator,
} = FilterSlice.actions;
