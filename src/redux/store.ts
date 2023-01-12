import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { ClimbingWallReducer } from "./features/climbingWallSlicer/climbingWallSlice";
import { uiActionsReducer } from "./features/uiSlicer/uiSlicer";

export const store = configureStore({
  reducer: {
    climbingWallsReducer: ClimbingWallReducer,
    uiReducer: uiActionsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
