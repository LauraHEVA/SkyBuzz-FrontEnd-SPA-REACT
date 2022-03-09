import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { loadAllBuzzsAction } from "../actions/actionsCreator";

export const loadAllBuzzsThunk = async (
  dispatch: ThunkDispatch<void, unknown, AnyAction>
) => {
  const response = await fetch(
    "https://skybuzz-laura-hernandez.onrender.com/buzzs/"
  );

  const buzzsListResponse = await response.json();
  const buzzListArray = buzzsListResponse.buzzs;
  dispatch(loadAllBuzzsAction(buzzListArray));
};
