import useClimbingWall from "./useClimbingWall";
import { store } from "../../redux/store";
import { renderHook } from "@testing-library/react";
import ProviderWrapper from "../../mocks/providerWrapper";
import {
  closeLoadingActionCreator,
  openLoadingActionCreator,
} from "../../redux/features/uiSlicer/uiSlicer";

const dispatch = jest.spyOn(store, "dispatch");

describe("Given a useClimbingWall custom hook", () => {
  describe("When it is invoked with the method loadAllClimbingWalls", () => {
    test("Then it should call it's dispatch method", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadAllClimbingWalls();

      expect(dispatch).toHaveBeenCalledWith(openLoadingActionCreator());
      expect(dispatch).toHaveBeenCalledWith(closeLoadingActionCreator());
    });

    test("Then it should call it's dispatch method with the value 'Cafeteria' at installation", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadAllClimbingWalls("", "", "Cafeteria");

      expect(dispatch).toHaveBeenCalledWith(openLoadingActionCreator());
      expect(dispatch).toHaveBeenCalledWith(closeLoadingActionCreator());
    });

    test("Then it should call it's dispatch method with the value 'Grupos' at activity", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadAllClimbingWalls("", "Grupos", "");

      expect(dispatch).toHaveBeenCalledWith(openLoadingActionCreator());
      expect(dispatch).toHaveBeenCalledWith(closeLoadingActionCreator());
    });

    test("Then it should call it's dispatch method with the value 'terrassa' at location", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadAllClimbingWalls("terrassa", "", "");

      expect(dispatch).toHaveBeenCalled();
    });

    test("Then it should call it's dispatch method with the value 'rubí' at location and 'Cafeteria' at installation", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadAllClimbingWalls("rubí", "", "Cafeteria");

      expect(dispatch).toHaveBeenCalled();
    });

    test("Then it should call it's dispatch method with the value 'rubí' at location and 'Grupos' at activity", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadAllClimbingWalls("rubí", "Grupos", "");

      expect(dispatch).toHaveBeenCalled();
    });

    test("Then it should call it's dispatch method with the value 'Grupos' at activity and 'Cafeteria' at installation", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadAllClimbingWalls("", "Grupos", "Cafeteria");

      expect(dispatch).toHaveBeenCalledWith(openLoadingActionCreator());
      expect(dispatch).toHaveBeenCalledWith(closeLoadingActionCreator());
    });

    test("Then it should call it's dispatch method with the value 'rubí' at location and 'Grupos' at activity and 'Cafeteria' at installation", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadAllClimbingWalls("rubí", "Grupos", "Cafeteria");

      expect(dispatch).toHaveBeenCalled();
    });

    test("Then it should call it's dispatch method with an error", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadAllClimbingWalls();

      expect(dispatch).toHaveBeenCalledWith(closeLoadingActionCreator());
    });
  });
});
