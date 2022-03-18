import {
  LoginUserActionInterface,
  SomeActionInterface,
} from "../../types/actionInterfaces";
import { LoginData } from "../../types/userInterfaces";
import actionsType from "../actions/actionsType";

const userReducer = (
  currentUser: LoginData = {
    username: "",
    password: "",
  },
  action: SomeActionInterface | LoginUserActionInterface = {
    type: "",
  }
) => {
  let newUser;
  switch (action.type) {
    case actionsType.loginUser:
      newUser = { ...(action as LoginUserActionInterface).user };
      break;

    default:
      newUser = { ...currentUser };
  }
  return newUser;
};

export default userReducer;
