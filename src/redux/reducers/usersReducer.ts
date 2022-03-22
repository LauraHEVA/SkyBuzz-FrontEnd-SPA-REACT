import { LoadAllUsersActionInterface } from "../../types/actionInterfaces";
import { UserData } from "../../types/userInterfaces";
import actionsType from "../actions/actionsType";

const usersReducer = (
  currentUsers: UserData[] = [],
  action: LoadAllUsersActionInterface = {
    type: "",
    users: [],
  }
) => {
  let newUsersList: UserData[];

  switch (action.type) {
    case actionsType.loadAllUsers:
      newUsersList = [...(action as LoadAllUsersActionInterface).users];
      break;

    default:
      newUsersList = [...currentUsers];
      break;
  }
  return newUsersList;
};

export default usersReducer;
