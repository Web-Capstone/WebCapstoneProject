import { combineReducers } from "redux";
import googleAuthReducer from "./googleAuthReducer";
import authReducer from "./authReducer";
import productsReducer from "./productsReducer";
import relatedAds from "./ReatedAds";

export default combineReducers({
  googleAuthReducer,
  authReducer,
  productsReducer,
  relatedAds,
});
