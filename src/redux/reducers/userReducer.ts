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
  currentUser: UserData = initialUserData,
  action: SomeActionInterface | LoginUserActionInterface = {
    type: "",
  }
) => {
  let newUserData;
  switch (action.type) {
    case actionsType.loginUser:
      newUserData = { ...(action as LoginUserActionInterface).user };
      break;

    case actionsType.logoutUser:
      newUserData = null;
      break;

    default:
      newUserData = { ...currentUser };
  }
  return newUserData;
};

export default userReducer;
