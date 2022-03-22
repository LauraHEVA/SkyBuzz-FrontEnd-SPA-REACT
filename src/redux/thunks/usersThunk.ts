import { toast } from "react-toastify";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { loadAllUsersAction } from "../actions/actionsCreator";

export const loadAllUsersThunk = async (
  dispatch: ThunkDispatch<void, unknown, AnyAction>
) => {
  const userToken = localStorage.getItem("UserToken");
  const response = await fetch(`${process.env.REACT_APP_PUBLIC_API}users/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  });
  const usersListResponse = await response.json();
  const usersListArray = usersListResponse.users;
  if (response.ok) {
    dispatch(loadAllUsersAction(usersListArray));
  } else {
    toast.error(
      "Something went wrong. Remember you need to be logged in to have permissions"
    );
  }
};
