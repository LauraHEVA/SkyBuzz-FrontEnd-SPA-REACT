import { combineReducers } from "redux";

const rootReducer = combineReducers({
  buzzs: buzzsReducer,
});

export default rootReducer;
