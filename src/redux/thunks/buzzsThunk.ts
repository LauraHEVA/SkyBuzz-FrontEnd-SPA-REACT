import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { loadAllBuzzsAction } from "../actions/actionsCreator";

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
      dispatch(deleteBuzzThunk(id));
    }
  };
