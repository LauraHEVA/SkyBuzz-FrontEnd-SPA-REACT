import { combineReducers } from "redux";
import buzzsReducer from "./buzzsReducer";
import oneBuzzReducer from "./oneBuzzReducer";
import userReducer from "./userReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  buzzs: buzzsReducer,
  oneBuzz: oneBuzzReducer,
  user: userReducer,
  users: usersReducer,
});

export default rootReducer;
