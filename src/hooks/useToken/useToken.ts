import { useCallback } from "react";
import { userLoginActionCreator } from "../../redux/features/userSlicer/userSlicer";

import { useAppDispatch } from "../../redux/hooks";
import decodeToken from "../../utils/decodeToken";

const useToken = () => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const accessToken = window.localStorage.getItem("token");

    if (!accessToken) {
      return;
    }
    const user = decodeToken(accessToken);
    dispatch(userLoginActionCreator({ ...user, accessToken }));
  }, [dispatch]);

  return { getToken };
};

export default useToken;
