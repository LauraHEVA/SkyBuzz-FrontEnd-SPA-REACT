import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { BuzzBasic } from "../../types/buzzInterfaces";
import {
  addNewBuzzAction,
  deleteBuzzAction,
  incrementLikesAction,
  loadAllBuzzsAction,
  loadDetailBuzzAction,
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
    const userToken = localStorage.getItem("UserToken");
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_API}buzzs/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    if (response.ok) {
      dispatch(deleteBuzzAction(id));
    }
  };

export const addNewBuzzThunk =
  (buzz: BuzzBasic) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const userToken = localStorage.getItem("UserToken");
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_API}buzzs/new`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(buzz),
      }
    );
    const newBuzz = await response.json();
    dispatch(addNewBuzzAction(newBuzz));
  };

export const incrementLikesThunk =
  (id: string) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_API}buzzs/${id}/like`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      dispatch(incrementLikesAction(id));
    }
  };

export const loadDetailBuzzThunk =
  (id: string) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_API}buzzs/${id}`
    );

    const buzzDetailResponse = await response.json();
    const buzzDetail = buzzDetailResponse.buzz;
    dispatch(loadDetailBuzzAction(buzzDetail));
  };
