import { combineReducers } from "redux";
import buzzsReducer from "./buzzsReducer";

const rootReducer = combineReducers({
  buzzs: buzzsReducer,
});

export default rootReducer;
