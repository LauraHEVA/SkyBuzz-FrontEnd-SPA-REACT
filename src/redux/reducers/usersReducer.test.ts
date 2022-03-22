import { BuzzObject } from "../../types/buzzInterfaces";
import { UserData } from "../../types/userInterfaces";
import actionsType from "../actions/actionsType";
import buzzsReducer from "./buzzsReducer";
import usersReducer from "./usersReducer";

describe("Given a usersReducer function", () => {
  describe("When it's called with a loadAllUsers action with an array of users", () => {
    test("Then it should return a new state with the array of users", () => {
      const currentUsers: UserData[] = [];
      const usersToLoad: UserData[] = [
        {
          name: "Laura",
          username: "Laura0",
          id: "623245decaa7d69f96f10a95",
        },
        {
          name: "Luis",
          username: "Luis0",
          id: "623392bccaa7d69f96f10aa2",
        },
      ];

      const action = {
        type: actionsType.loadAllUsers,
        users: usersToLoad,
      };

      const newState = usersReducer(currentUsers, action);

      expect(newState).toEqual(usersToLoad);
    });
  });

  describe("When it's called with a nonexistent action", () => {
    test("Then it should return a new state with the current state (initial state)", () => {
      const currentUsers: UserData[] = [
        {
          name: "Laura",
          username: "Laura0",
          id: "623245decaa7d69f96f10a95",
        },
        {
          name: "Luis",
          username: "Luis0",
          id: "623392bccaa7d69f96f10aa2",
        },
      ];

      const action = {
        type: "none",
        users: currentUsers,
      };

      const newState = buzzsReducer(currentUsers, action);

      expect(newState).toEqual(currentUsers);
    });
  });
});
