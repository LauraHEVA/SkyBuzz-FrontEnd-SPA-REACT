import { combineReducers } from "redux";
import buzzsReducer from "./buzzsReducer";
import oneBuzzReducer from "./oneBuzzReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  buzzs: buzzsReducer,
  oneBuzz: oneBuzzReducer,
  user: userReducer,
});

export default rootReducer;
