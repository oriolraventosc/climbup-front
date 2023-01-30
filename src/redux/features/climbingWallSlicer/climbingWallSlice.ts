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
    lat: 0,
    lng: 0,
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
    loadClimbingWall: (initialState, action: PayloadAction<ClimbingWall>) => ({
      ...initialState,
      climbingWall: { ...action.payload },
    }),
  },
});

export const ClimbingWallReducer = climbingWallSlice.reducer;

export const {
  loadAllclimbingWalls: loadAllclimbingWallsActionCreator,
  loadClimbingWall: loadClimbingWallActionCreator,
} = climbingWallSlice.actions;
