import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { ClimbingWallReducer } from "./features/climbingWallSlicer/climbingWallSlice";
import { filterActionsReducer } from "./features/FIlterSlicer/FilterSlice";
import { uiActionsReducer } from "./features/uiSlicer/uiSlicer";
import { userActionsReducer } from "./features/userSlicer/userSlicer";

export const store = configureStore({
  reducer: {
    climbingWallsReducer: ClimbingWallReducer,
    uiReducer: uiActionsReducer,
    userReducer: userActionsReducer,
    filterReducer: filterActionsReducer,
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
