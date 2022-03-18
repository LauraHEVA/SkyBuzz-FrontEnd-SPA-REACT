import {
  LoginUserActionInterface,
  SomeActionInterface,
} from "../../types/actionInterfaces";
import { LoginData } from "../../types/userInterfaces";
import actionsType from "../actions/actionsType";

const usersReducer = (
  currentUser: LoginData = {
    username: "",
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

export default usersReducer;
