import {
  LoginUserActionInterface,
  SomeActionInterface,
} from "../../types/actionInterfaces";
import { UserData } from "../../types/userInterfaces";
import actionsType from "../actions/actionsType";

const initialUserData = {
  name: "",
  username: "",
  id: "",
  loggedIn: false,
};

const userReducer = (
  userData: UserData = initialUserData,
  action: SomeActionInterface | LoginUserActionInterface = {
    type: "",
  }
) => {
  let newUserData;
  switch (action.type) {
    case actionsType.loginUser:
      newUserData = { ...(action as LoginUserActionInterface).userData };
      break;

    case actionsType.logoutUser:
      newUserData = { ...initialUserData };
      break;

    default:
      newUserData = { ...userData };
  }
  return newUserData;
};

export default userReducer;
