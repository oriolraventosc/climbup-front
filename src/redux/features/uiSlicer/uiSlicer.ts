import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  loading: boolean;
}

export const uiInitialState: UiState = {
  loading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    openLoading: (initialState) => ({
      ...initialState,
      loading: true,
    }),
    closeLoading: (initialState) => ({
      ...initialState,
      loading: false,
    }),
  },
});

export const uiActionsReducer = uiSlice.reducer;

export const {
  openLoading: openLoadingActionCreator,
  closeLoading: closeLoadingActionCreator,
} = uiSlice.actions;
