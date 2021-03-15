import { FETCH_GOOGLE_USER } from "../actions/types";

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_GOOGLE_USER:
      return action.payload || false;
    default:
      return state;
  }
}
