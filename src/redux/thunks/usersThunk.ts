import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { loadAllUsersAction } from "../actions/actionsCreator";

export const loadAllUsersThunk = async (
  dispatch: ThunkDispatch<void, unknown, AnyAction>
) => {
  const response = await fetch(`${process.env.REACT_APP_PUBLIC_API}users/all`);
  const usersListResponse = await response.json();
  const usersListArray = usersListResponse.users;
  dispatch(loadAllUsersAction(usersListArray));
};
