import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserStructure } from "../../../types/types";

interface UserState extends UserStructure {
  isLogged: boolean;
}

export const UserInitialState: UserState = {
  email: "",
  password: "",
  isLogged: false,
  accessToken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: UserInitialState,
  reducers: {
    userLogin: (initialState, action: PayloadAction<UserStructure>) => ({
      ...initialState,
      isLogged: true,
    }),
    userLogout: (initialState) => ({
      ...initialState,
      isLogged: false,
      accessToken: "",
      email: "",
      password: "",
    }),
  },
});

export const userActionsReducer = userSlice.reducer;

export const {
  userLogin: userLoginActionCreator,
  userLogout: userLogoutActionCreator,
} = userSlice.actions;
