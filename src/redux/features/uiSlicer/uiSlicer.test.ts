import {
  uiActionsReducer,
  openLoadingActionCreator,
  closeLoadingActionCreator,
  uiInitialState,
} from "./uiSlicer";

describe("Given a uiReducer", () => {
  describe("When it is invoked with the method openLoading", () => {
    test("Then it should change the propery 'loading' to true", () => {
      const action = openLoadingActionCreator();
      const expectedState = {
        loading: true,
      };

      const newState = uiActionsReducer(uiInitialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it is invoked with the method closeLoading", () => {
    test("Then it should change the propery 'loading' to false", () => {
      const action = closeLoadingActionCreator();
      const initialState = { loading: true };
      const expectedState = {
        loading: false,
      };

      const newState = uiActionsReducer(initialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
