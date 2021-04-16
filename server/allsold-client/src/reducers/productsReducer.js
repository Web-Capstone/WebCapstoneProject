import {
  GET_ALL_PRODUCTS,
  GET_SINGLE_PRODUCT,
  GET_EXTRA_PRODUCTS,
} from "../actions/types";

export default function (state = { data: null }, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, data: action?.data };

    case GET_EXTRA_PRODUCTS:
      return { ...state, ExtraProductsdata: action?.data };

    case GET_SINGLE_PRODUCT:
      return { ...state, Singledata: action?.data };

    default:
      return state;
  }
}
