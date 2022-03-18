import jwtDecode from "jwt-decode";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { DecodedToken, LoginData } from "../../types/userInterfaces";

export const loginUserThunk =
  (user: LoginData) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users/login`,
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
      const { id, username }: DecodedToken = await jwtDecode(token.token);
      localStorage.setItem("UserToken", token.token);
      dispatch(loginUserAction({ id, username, token: token.token }));
    }
  };
