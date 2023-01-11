import axios from "axios";
import { useCallback } from "react";
import { loadAllclimbingWallsActionCreator } from "../../redux/features/climbingWallSlicer/climbingWallSlice";
import { useAppDispatch } from "../../redux/hooks";

const useClimbingWall = () => {
  const dispatch = useAppDispatch();
  const apiUrl = process.env.REACT_APP_URL;
  const loadAllClimbingWalls = useCallback(async () => {
    const url = `${apiUrl}/climbingWalls/loadAllClimbingWalls`;
    const response = await axios.get(url);
    const apiResponse = response.data;
    dispatch(loadAllclimbingWallsActionCreator(apiResponse.climbingWalls));
  }, [apiUrl, dispatch]);
  return { loadAllClimbingWalls };
};

export default useClimbingWall;
