import axios from "axios";
import { useCallback } from "react";
import { loadAllclimbingWallsActionCreator } from "../../redux/features/climbingWallSlicer/climbingWallSlice";
import {
  closeLoadingActionCreator,
  openLoadingActionCreator,
} from "../../redux/features/uiSlicer/uiSlicer";
import { useAppDispatch } from "../../redux/hooks";

const useClimbingWall = () => {
  const dispatch = useAppDispatch();
  const apiUrl = process.env.REACT_APP_URL;
  const loadAllClimbingWalls = useCallback(async () => {
    const url = `${apiUrl}/climbingWalls/loadAllClimbingWalls`;
    try {
      dispatch(openLoadingActionCreator());
      const response = await axios.get(url);
      const apiResponse = response.data;
      dispatch(loadAllclimbingWallsActionCreator(apiResponse.climbingWalls));
      dispatch(closeLoadingActionCreator());
    } catch {
      dispatch(closeLoadingActionCreator());
    }
  }, [dispatch, apiUrl]);

  return { loadAllClimbingWalls };
};

export default useClimbingWall;
