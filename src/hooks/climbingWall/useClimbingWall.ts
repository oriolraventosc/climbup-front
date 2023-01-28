import axios from "axios";
import { useCallback } from "react";
import {
  loadAllclimbingWallsActionCreator,
  loadClimbingWallActionCreator,
} from "../../redux/features/climbingWallSlicer/climbingWallSlice";
import {
  closeLoadingActionCreator,
  openLoadingActionCreator,
} from "../../redux/features/uiSlicer/uiSlicer";
import { useAppDispatch } from "../../redux/hooks";

const useClimbingWall = () => {
  const dispatch = useAppDispatch();
  const apiUrl = process.env.REACT_APP_URL;
  const loadAllClimbingWalls = useCallback(
    async (location = "", activity = "", installation = "", limit = 6) => {
      const urlWithNoFilter = `${apiUrl}/climbingWalls/loadAllClimbingWalls?location&installation&activity&limit=${limit}`;
      const urlInstallation = `${apiUrl}/climbingWalls/loadAllClimbingWalls?location&installation=${installation}&activity&limit=${limit}`;
      const urlActivity = `${apiUrl}/climbingWalls/loadAllClimbingWalls?location&installation&activity=${activity}&limit=${limit}`;
      const urlLocation = `${apiUrl}/climbingWalls/loadAllClimbingWalls?location=${location}&installation&activity&limit=${limit}`;
      const urlLocationAndInstallation = `${apiUrl}/climbingWalls/loadAllClimbingWalls?location=${location}&installation=${installation}&activity&limit=${limit}`;
      const urlLocationAndActivity = `${apiUrl}/climbingWalls/loadAllClimbingWalls?location=${location}&installation&activity=${activity}&limit=${limit}`;
      const urlActivityAndInstallation = `${apiUrl}/climbingWalls/loadAllClimbingWalls?location&installation=${installation}&activity=${activity}&limit=${limit}`;
      const urlActivityLocationInstallation = `${apiUrl}/climbingWalls/loadAllClimbingWalls?location=${location}&installation=${installation}&activity=${activity}&limit=${limit}`;
      try {
        if (location === "" && activity === "" && installation === "") {
          dispatch(openLoadingActionCreator());
          const response = await axios.get(urlWithNoFilter);
          const apiResponse = response.data;
          dispatch(
            loadAllclimbingWallsActionCreator(apiResponse.climbingWalls)
          );
          dispatch(closeLoadingActionCreator());
        }

        if (location === "" && activity === "" && installation !== "") {
          dispatch(openLoadingActionCreator());
          const response = await axios.get(urlInstallation);
          const apiResponse = response.data;
          dispatch(
            loadAllclimbingWallsActionCreator(apiResponse.climbingWalls)
          );
          dispatch(closeLoadingActionCreator());
        }

        if (location === "" && activity !== "" && installation === "") {
          dispatch(openLoadingActionCreator());
          const response = await axios.get(urlActivity);
          const apiResponse = response.data;
          dispatch(
            loadAllclimbingWallsActionCreator(apiResponse.climbingWalls)
          );
          dispatch(closeLoadingActionCreator());
        }

        if (location !== "" && activity === "" && installation === "") {
          const response = await axios.get(urlLocation);
          const apiResponse = response.data;
          dispatch(
            loadAllclimbingWallsActionCreator(apiResponse.climbingWalls)
          );
        }

        if (location !== "" && activity === "" && installation !== "") {
          const response = await axios.get(urlLocationAndInstallation);
          const apiResponse = response.data;
          dispatch(
            loadAllclimbingWallsActionCreator(apiResponse.climbingWalls)
          );
        }

        if (location !== "" && activity !== "" && installation === "") {
          const response = await axios.get(urlLocationAndActivity);
          const apiResponse = response.data;
          dispatch(
            loadAllclimbingWallsActionCreator(apiResponse.climbingWalls)
          );
        }

        if (location === "" && activity !== "" && installation !== "") {
          dispatch(openLoadingActionCreator());
          const response = await axios.get(urlActivityAndInstallation);
          const apiResponse = response.data;
          dispatch(
            loadAllclimbingWallsActionCreator(apiResponse.climbingWalls)
          );
          dispatch(closeLoadingActionCreator());
        }

        if (location !== "" && activity !== "" && installation !== "") {
          const response = await axios.get(urlActivityLocationInstallation);
          const apiResponse = response.data;
          dispatch(
            loadAllclimbingWallsActionCreator(apiResponse.climbingWalls)
          );
        }
      } catch {
        dispatch(closeLoadingActionCreator());
      }
    },
    [dispatch, apiUrl]
  );

  const loadClimbingWall = useCallback(
    async (id: string) => {
      const url = `${apiUrl}/climbingWalls/${id}`;
      try {
        dispatch(openLoadingActionCreator());
        const response = await axios.get(url);
        const apiResponse = response.data;
        dispatch(loadClimbingWallActionCreator(apiResponse.climbingWall));
        dispatch(closeLoadingActionCreator());
      } catch {
        dispatch(closeLoadingActionCreator());
      }
    },
    [apiUrl, dispatch]
  );

  return { loadAllClimbingWalls, loadClimbingWall };
};

export default useClimbingWall;
