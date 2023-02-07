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

      await result.current.loadAllClimbingWalls("", "", "Cafeteria", 6);

      expect(dispatch).toHaveBeenCalledWith(openLoadingActionCreator());
      expect(dispatch).toHaveBeenCalledWith(closeLoadingActionCreator());
    });

    test("Then it should call it's dispatch method with the value 'Grupos' at activity", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadAllClimbingWalls("", "Grupos", "", 6);

      expect(dispatch).toHaveBeenCalledWith(openLoadingActionCreator());
      expect(dispatch).toHaveBeenCalledWith(closeLoadingActionCreator());
    });

    test("Then it should call it's dispatch method with the value 'terrassa' at location", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadAllClimbingWalls("terrassa", "", "", 6);

      expect(dispatch).toHaveBeenCalled();
    });

    test("Then it should call it's dispatch method with the value 'rubí' at location and 'Cafeteria' at installation", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadAllClimbingWalls("rubí", "", "Cafeteria", 6);

      expect(dispatch).toHaveBeenCalled();
    });

    test("Then it should call it's dispatch method with the value 'rubí' at location and 'Grupos' at activity", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadAllClimbingWalls("rubí", "Grupos", "", 6);

      expect(dispatch).toHaveBeenCalled();
    });

    test("Then it should call it's dispatch method with the value 'Grupos' at activity and 'Cafeteria' at installation", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadAllClimbingWalls("", "Grupos", "Cafeteria", 6);

      expect(dispatch).toHaveBeenCalledWith(openLoadingActionCreator());
      expect(dispatch).toHaveBeenCalledWith(closeLoadingActionCreator());
    });

    test("Then it should call it's dispatch method with the value 'rubí' at location and 'Grupos' at activity and 'Cafeteria' at installation", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadAllClimbingWalls(
        "rubí",
        "Grupos",
        "Cafeteria",
        6
      );

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

  describe("When it is invoked with the method loadClimbingWall", () => {
    test("Then it should call it's dispatch method with openLoadingActionCreator and closeLoadingActionCreator", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadClimbingWall("1234");

      expect(dispatch).toHaveBeenCalledWith(openLoadingActionCreator());
      expect(dispatch).toHaveBeenCalledWith(closeLoadingActionCreator());
    });

    test("Then when an error happens it should call it's dispatch method with closeLoadingActionCreator", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadClimbingWall("1234");

      expect(dispatch).toHaveBeenCalledWith(closeLoadingActionCreator());
    });
  });

  describe("When it is invoked with the method loadUserClimbingWalls", () => {
    test("Then it should call it's dispatch method", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadUserClimbingWalls(
        "",
        "",
        "",
        6,
        "63c1aaf5a6eb84d57beb72b7"
      );

      expect(dispatch).toHaveBeenCalledWith(openLoadingActionCreator());
      expect(dispatch).toHaveBeenCalledWith(closeLoadingActionCreator());
    });

    test("Then it should call it's dispatch method with the value 'Campus' at installation", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadUserClimbingWalls(
        "Campus",
        "",
        "",
        6,
        "63c1aaf5a6eb84d57beb72b7"
      );

      expect(dispatch).toHaveBeenCalledWith(openLoadingActionCreator());
      expect(dispatch).toHaveBeenCalledWith(closeLoadingActionCreator());
    });

    test("Then it should call it's dispatch method with the value 'Grupos' at activity", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadUserClimbingWalls(
        "",
        "Grupos",
        "",
        6,
        "63c1aaf5a6eb84d57beb72b7"
      );

      expect(dispatch).toHaveBeenCalledWith(openLoadingActionCreator());
      expect(dispatch).toHaveBeenCalledWith(closeLoadingActionCreator());
    });

    test("Then it should call it's dispatch method with the value 'terrassa' at location", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadUserClimbingWalls(
        "",
        "",
        "rubí",
        6,
        "63c1aaf5a6eb84d57beb72b7"
      );

      expect(dispatch).toHaveBeenCalled();
    });

    test("Then it should call it's dispatch method with the value 'rubí' at location and 'Campus' at installation", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadUserClimbingWalls(
        "Campus",
        "",
        "rubí",
        6,
        "63c1aaf5a6eb84d57beb72b7"
      );

      expect(dispatch).toHaveBeenCalled();
    });

    test("Then it should call it's dispatch method with the value 'rubí' at location and 'Grupos' at activity", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadUserClimbingWalls(
        "",
        "Grupos",
        "rubí",
        6,
        "63c1aaf5a6eb84d57beb72b7"
      );

      expect(dispatch).toHaveBeenCalled();
    });

    test("Then it should call it's dispatch method with the value 'Grupos' at activity and 'Campus' at installation", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadUserClimbingWalls(
        "Campus",
        "Grupos",
        "",
        6,
        "63c1aaf5a6eb84d57beb72b7"
      );

      expect(dispatch).toHaveBeenCalledWith(openLoadingActionCreator());
      expect(dispatch).toHaveBeenCalledWith(closeLoadingActionCreator());
    });

    test("Then it should call it's dispatch method with the value 'rubí' at location and 'Grupos' at activity and 'Campus' at installation", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadUserClimbingWalls(
        "Campus",
        "Grupos",
        "rubí",
        6,
        "63c1aaf5a6eb84d57beb72b7"
      );

      expect(dispatch).toHaveBeenCalled();
    });

    test("Then it should call it's dispatch method with an error", async () => {
      const { result } = renderHook(() => useClimbingWall(), {
        wrapper: ProviderWrapper,
      });

      await result.current.loadUserClimbingWalls(
        "",
        "",
        "",
        6,
        "63c1aaf5a6eb84d57beb72b7"
      );

      expect(dispatch).toHaveBeenCalledWith(closeLoadingActionCreator());
    });
  });
});
