import {
  closeLoadingActionCreator,
  openLoadingActionCreator,
} from "../../redux/features/uiSlicer/uiSlicer";
import { useAppDispatch } from "../../redux/hooks";
import { JwtPayloadCustom, UserStructure } from "../../types/types";
import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  userLoginActionCreator,
  userLogoutActionCreator,
} from "../../redux/features/userSlicer/userSlicer";
import jwtDecode from "jwt-decode";

const useUser = () => {
  const dispatch = useAppDispatch();
  const apiUrl = process.env.REACT_APP_URL;
  const navigate = useNavigate();
  const register = useCallback(
    async (userData: UserStructure) => {
      const url = `${apiUrl}/users/register`;
      try {
        dispatch(openLoadingActionCreator());
        await axios.post(url, userData);
        navigate("/home");
        dispatch(closeLoadingActionCreator());
      } catch {
        dispatch(closeLoadingActionCreator());
      }
    },
    [apiUrl, dispatch, navigate]
  );
  const login = async (userData: UserStructure) => {
    const url = `${apiUrl}/users/login`;
    try {
      dispatch(openLoadingActionCreator());
      const response = await axios.post(url, userData);

      const { accessToken, id } = await response.data;

      const loggedUser: JwtPayloadCustom = jwtDecode(accessToken);
      dispatch(
        userLoginActionCreator({
          ...loggedUser,
          accessToken: accessToken,
          id: id,
        })
      );

      window.localStorage.setItem("token", accessToken);
      dispatch(closeLoadingActionCreator());
      navigate("/home");
    } catch (error: unknown) {
      dispatch(closeLoadingActionCreator());
    }
  };
  const logout = () => {
    window.localStorage.removeItem("token");
    dispatch(userLogoutActionCreator());
  };
  return { register, login, logout };
};

export default useUser;
