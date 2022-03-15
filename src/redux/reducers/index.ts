import { combineReducers } from "redux";
import buzzsReducer from "./buzzsReducer";
import oneBuzzReducer from "./oneBuzzReducer";

const rootReducer = combineReducers({
  buzzs: buzzsReducer,
  oneBuzz: oneBuzzReducer,
});

export default rootReducer;
