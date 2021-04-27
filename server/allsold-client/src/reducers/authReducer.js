import { AUTH, AUTH_FAIL, LOGOUT } from "../actions/types.js";

export default function (state = { authData: null }, action) {
  var login = true;
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return { ...state, authData: action?.data, login: true };

    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };

    case AUTH_FAIL:
      return { ...state, authData: action?.err.response.data, login: false };

    default:
      return state;
  }
}
