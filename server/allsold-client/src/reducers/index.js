import { combineReducers } from "redux";
import googleAuthReducer from "./googleAuthReducer";
import authReducer from "./authReducer";

export default combineReducers({
  googleAuthReducer,
  authReducer,
});
