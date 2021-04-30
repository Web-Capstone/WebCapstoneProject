import {
  GET_ALL_PRODUCTS,
  GET_SINGLE_PRODUCT,
  POST_CARS_ADD,
  POST_MOBILES_ADD,
  POST_ELECTRONICS_ADD,
} from "../actions/types";

export default function (state = { data: null }, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, data: action?.data };

    case GET_SINGLE_PRODUCT:
      return { ...state, Singledata: action?.data };

    case POST_MOBILES_ADD:
      return { ...state, postMobilesdata: action.data };

    case POST_ELECTRONICS_ADD:
      return { ...state, postElectronicsdata: action.data };

    case POST_CARS_ADD:
      return { ...state, postCarsdata: action?.data };

    default:
      return state;
  }
}
