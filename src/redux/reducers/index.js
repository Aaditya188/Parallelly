import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
  alluser: userReducer
});

export default reducers;
