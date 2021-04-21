import { GET_EXTRA_PRODUCTS } from "../actions/types";

export default function (state = { data: null }, action) {
  switch (action.type) {
    case GET_EXTRA_PRODUCTS:
      return { ...state, data: action?.data };

    default:
      return state;
  }
}
