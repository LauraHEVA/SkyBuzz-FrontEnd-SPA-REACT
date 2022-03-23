import { LoginData } from "../../types/userInterfaces";
import actionsType from "../actions/actionsType";
import userReducer from "./userReducer";

describe("Given a userReducer function", () => {
  describe("When it's called with a loginUser action with a userData", () => {
    test("Then it should return a new state with the userData as the new user", () => {
      const userToLogin: LoginData = {
        username: "Laura0",
        password: "Laura1234",
      };

      const action = {
        type: actionsType.loginUser,
        userData: userToLogin,
      };

      const initialUserData = {
        name: "",
        username: "",
        id: "",
        loggedIn: false,
      };

      const newState = userReducer(initialUserData, action);

      expect(newState).toEqual(userToLogin);
    });
  });

  describe("When it's called with a nonexistent action", () => {
    test("Then it should return a new state with the same current user", () => {
      const initialUserData = {
        name: "",
        username: "",
        id: "",
        loggedIn: false,
      };
      const action = {
        type: "some-incorrect-action",
        userData: initialUserData,
      };
      const newState = userReducer(initialUserData, action);

      expect(newState).toEqual(initialUserData);
    });
  });

  describe("When it's called with a LogoutUser action", () => {
    test("Then it should return a new state with the userData empty", () => {
      const initialUserData = {
        name: "Mari",
        username: "Mari0",
        id: "asdf1234",
        loggedIn: true,
      };

      const action = {
        type: actionsType.logoutUser,
        userData: initialUserData,
      };

      const newUserData = {
        name: "",
        username: "",
        id: "",
        loggedIn: false,
      };

      const newState = userReducer(initialUserData, action);

      expect(newState).toEqual(newUserData);
    });
  });
});
