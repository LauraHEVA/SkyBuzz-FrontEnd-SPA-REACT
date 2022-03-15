import { combineReducers } from "redux";
import buzzsReducer from "./buzzsReducer";
import oneBuzzReducer from "./oneBuzzReducer";

const rootReducer = combineReducers({
  buzzs: buzzsReducer,
  buzz: oneBuzzReducer,
});

export default rootReducer;
