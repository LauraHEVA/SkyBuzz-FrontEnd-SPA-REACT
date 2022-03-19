import jwtDecode from "jwt-decode";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { DecodedToken, LoginData, UserData } from "../../types/userInterfaces";
import { loginUserAction } from "../actions/actionsCreator";

export const loginUserThunk =
  (user: LoginData | UserData) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_API}users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    if (response.ok) {
      const token = await response.json();
      const decodedToken: DecodedToken = await jwtDecode(token.token);
      localStorage.setItem("UserToken", token.token);
      const loggedUser = {
        username: user.username,
        password: (user as LoginData).password,
        id: decodedToken.id,
        token: token.token,
        loggedIn: true,
      };
      dispatch(loginUserAction(loggedUser));
    }
  };
