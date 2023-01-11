import { climbingWallsMock } from "../../../mocks/climbingWalls/climbingWallMock";
import {
  loadAllclimbingWallsActionCreator,
  ClimbingWallReducer,
  ClimbingWallInitialState,
} from "./climbingWallSlice";

describe("Given a climbingWall reducer", () => {
  describe("When it is invoked with the method loadAllClimbingWallsActionCreator", () => {
    test("Then it should return a list of climbing walls", () => {
      const action = loadAllclimbingWallsActionCreator(climbingWallsMock);
      const expectedState = {
        privateClimbingWalls: [],
        climbingWalls: climbingWallsMock,
        climbingWall: {
          name: "",
          city: "",
          address: "",
          email: "",
          telephone: 34,
          description: "",
          prices: "",
          installations: [],
          schedule: "",
          activities: [],
          website: "",
          id: "",
          picture1: "",
          picture2: "",
          picture3: "",
          picture4: "",
        },
      };

      const newState = ClimbingWallReducer(ClimbingWallInitialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
