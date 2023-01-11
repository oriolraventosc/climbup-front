import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClimbingWall } from "../../../types/types";

interface ClimbingWallState {
  privateClimbingWalls: ClimbingWall[];
  climbingWalls: ClimbingWall[];
  climbingWall: ClimbingWall;
}

export const ClimbingWallInitialState: ClimbingWallState = {
  privateClimbingWalls: [],
  climbingWalls: [],
  climbingWall: {
    name: "",
    city: "",
    address: "",
    email: "",
    telephone: 34,
    description: "",
    prices: "",
    installations: [],
    schedule: "",
    activities: [],
    website: "",
    id: "",
    picture1: "",
    picture2: "",
    picture3: "",
    picture4: "",
  },
};

const climbingWallSlice = createSlice({
  name: "climbingWall",
  initialState: ClimbingWallInitialState,
  reducers: {
    loadAllclimbingWalls: (
      initialState,
      action: PayloadAction<ClimbingWall[]>
    ) => ({
      ...initialState,
      climbingWalls: [...action.payload],
    }),
  },
});

export const ClimbingWallReducer = climbingWallSlice.reducer;

export const { loadAllclimbingWalls: loadAllclimbingWallsActionCreator } =
  climbingWallSlice.actions;
