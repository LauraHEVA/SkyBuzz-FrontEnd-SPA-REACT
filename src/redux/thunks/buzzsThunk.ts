import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { BuzzBasic } from "../../types/buzzInterfaces";
import {
  addNewBuzzAction,
  deleteBuzzAction,
  loadAllBuzzsAction,
} from "../actions/actionsCreator";

export const loadAllBuzzsThunk = async (
  dispatch: ThunkDispatch<void, unknown, AnyAction>
) => {
  const response = await fetch(`${process.env.REACT_APP_PUBLIC_API}buzzs/`);

  const buzzsListResponse = await response.json();
  const buzzListArray = buzzsListResponse.buzzs;
  dispatch(loadAllBuzzsAction(buzzListArray));
};

export const deleteBuzzThunk =
  (id: string) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_API}buzzs/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      dispatch(deleteBuzzAction(id));
    }
  };

export const addNewBuzzThunk =
  (buzz: BuzzBasic) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_API}buzzs/new`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(buzz),
      }
    );
    if (response.ok) {
      const newBuzz = await response.json();
      dispatch(addNewBuzzAction(newBuzz));
    }
  };
