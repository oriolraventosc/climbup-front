import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { ClimbingWallReducer } from "./features/climbingWallSlicer/climbingWallSlice";

export const store = configureStore({
  reducer: {
    climbingWallsReducer: ClimbingWallReducer,
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
