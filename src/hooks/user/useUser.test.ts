import { renderHook } from "@testing-library/react";
import ProviderWrapper from "../../mocks/providerWrapper";
import {
  closeLoadingActionCreator,
  openLoadingActionCreator,
} from "../../redux/features/uiSlicer/uiSlicer";
import { userLogoutActionCreator } from "../../redux/features/userSlicer/userSlicer";
import { store } from "../../redux/store";
import useUser from "./useUser";

const dispatch = jest.spyOn(store, "dispatch");

describe("Given a useUser hook", () => {
  describe("When it is invoked with the method login", () => {
    test("Then it should call it's dispatch method with the openLoading and closeLoading", async () => {
      const {
        result: {
          current: { login },
        },
      } = renderHook(() => useUser(), { wrapper: ProviderWrapper });
      const user = { email: "admin@gmail.com", password: "admin" };

      await login(user);

      expect(dispatch).toHaveBeenCalledWith(openLoadingActionCreator());
      expect(dispatch).toHaveBeenCalledWith(closeLoadingActionCreator());
    });

    test("Then it should call it's dispatch method with the closeLoading", async () => {
      const {
        result: {
          current: { login },
        },
      } = renderHook(() => useUser(), { wrapper: ProviderWrapper });
      const user = { email: "admin@gmail.com", password: "admin" };

      await login(user);

      expect(dispatch).toHaveBeenCalledWith(closeLoadingActionCreator());
    });
  });

  describe("When it is invoked with the method register", () => {
    test("Then it should call it's dispatch with the method openLoading and closeLoading", async () => {
      const {
        result: {
          current: { register },
        },
      } = renderHook(() => useUser(), { wrapper: ProviderWrapper });
      const user = { email: "user@gmail.com", password: "climber" };

      await register(user);

      expect(dispatch).toHaveBeenCalledWith(openLoadingActionCreator());
      expect(dispatch).toHaveBeenCalledWith(closeLoadingActionCreator());
    });

    test("Then it should call it's dispatch with the method closeLoading", async () => {
      const {
        result: {
          current: { register },
        },
      } = renderHook(() => useUser(), { wrapper: ProviderWrapper });
      const user = { email: "user@gmail.com", password: "climber" };

      await register(user);

      expect(dispatch).toHaveBeenCalledWith(openLoadingActionCreator());
      expect(dispatch).toHaveBeenCalledWith(closeLoadingActionCreator());
    });
  });

  describe("When it is invoked with the method logout", () => {
    test("Then it should call it's dispatch with userLogoutActionCreator", async () => {
      const {
        result: {
          current: { logout },
        },
      } = renderHook(() => useUser(), { wrapper: ProviderWrapper });

      await logout();

      expect(dispatch).toHaveBeenCalledWith(userLogoutActionCreator());
    });
  });
});
