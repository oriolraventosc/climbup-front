import {
  addActivityActionCreator,
  addInstallationActionCreator,
  addLocationActionCreator,
  filterActionsReducer,
  increaseLimitActionCreator,
  filterInitialState,
} from "./FilterSlice";

describe("Given a filterReducer", () => {
  describe("When it is invoked with the method addActivity", () => {
    test("Then it should return an object with the property activity with the value 'Grupos'", () => {
      const action = addActivityActionCreator("Grupos");
      const expectedState = {
        installation: "",
        activity: "Grupos",
        location: "",
        limit: 6,
      };

      const newState = filterActionsReducer(filterInitialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it is invoked with the method addInstallation", () => {
    test("Then it should return an object with the property installation with the value 'Campus'", () => {
      const action = addInstallationActionCreator("Campus");
      const expectedState = {
        installation: "Campus",
        activity: "",
        location: "",
        limit: 6,
      };

      const newState = filterActionsReducer(filterInitialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it is invoked with the method addLocation", () => {
    test("Then it should return an object with the property location with the value 'terrassa'", () => {
      const action = addLocationActionCreator("terrassa");
      const expectedState = {
        installation: "",
        activity: "",
        location: "terrassa",
        limit: 6,
      };

      const newState = filterActionsReducer(filterInitialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it is invoked with the method increaseLimit", () => {
    test("Then it should return an object with the property activity with the value 'Grupos'", () => {
      const action = increaseLimitActionCreator();
      const expectedState = {
        installation: "",
        activity: "",
        location: "",
        limit: 12,
      };

      const newState = filterActionsReducer(filterInitialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
