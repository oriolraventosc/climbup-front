import {
  userLoginActionCreator,
  userLogoutActionCreator,
  UserInitialState,
  userActionsReducer,
} from "./userSlicer";

describe("Given a userActionsReducer", () => {
  describe("When it is invoked with the method userLoginActionCreator", () => {
    test("Then it should change the property isLogged to true", () => {
      const action = userLoginActionCreator({
        email: "admin@gmail.com",
        password: "admin",
        accessToken: "",
        id: "12345",
      });
      const expectedState = {
        isLogged: true,
        email: "",
        password: "",
        accessToken: "",
        id: "12345",
      };

      const newState = userActionsReducer(UserInitialState, action);

      expect(newState).toStrictEqual(expectedState);
    });

    test("Then it should change the property isLogged to false", () => {
      const action = userLogoutActionCreator();
      const expectedState = {
        isLogged: false,
        email: "",
        password: "",
        accessToken: "",
        id: "",
      };

      const newState = userActionsReducer(UserInitialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
