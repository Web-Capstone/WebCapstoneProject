import axios from "axios";
import {
  FETCH_GOOGLE_USER,
  AUTH,
  AUTH_FAIL,
  LOGOUT,
  GET_ALL_PRODUCTS,
  GET_SINGLE_PRODUCT,
  GET_EXTRA_PRODUCTS,
  POST_CARS_ADD,
  POST_MOBILES_ADD,
  POST_ELECTRONICS_ADD,
} from "./types";
import * as api from "../API";

export const fetchGoogleUser = () => async (dispatch) => {
  const response = await axios.get("/api/current_user");
  dispatch({ type: FETCH_GOOGLE_USER, payload: response.data });
};

// Login User
export const loginUser = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch({ type: AUTH, data });
    setTimeout(() => {
      history.push("/");
      window.location.reload();
    }, 800);
  } catch (err) {
    dispatch({ type: AUTH_FAIL, err });
  }
};

// Logout User
export const logoutUser = (history) => (dispatch) => {
  dispatch({ type: LOGOUT });
  history.push("/");
};

// Register User
export const registerUser = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
    //window.location.reload();
  } catch (err) {
    dispatch({ type: AUTH_FAIL, err });
  }
};

// Get All Products
export const getAllProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getAllProducts();
    dispatch({ type: GET_ALL_PRODUCTS, data });
  } catch (error) {
    console.log(error);
  }
};

// Get single Product
export const getSingleProduct = (history, id) => async (dispatch) => {
  try {
    const { data } = await api.getSingleProduct(id);
    dispatch({ type: GET_SINGLE_PRODUCT, data });
    history.push("/productDetails/" + id);
  } catch (error) {
    console.log(error);
  }
};

// Get extra Products
export const getExtraProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getExtraProducts();
    dispatch({ type: GET_EXTRA_PRODUCTS, data });
  } catch (error) {
    console.log(error);
  }
};

export const handleToken = (token) => async (dispatch) => {
  const response = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_GOOGLE_USER, payload: response.data });
  dispatch({ type: AUTH, payload: response.data });
};

// Post Add Cars
export const postCarsAdd = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.getSingleProduct(formData);
    dispatch({ type: POST_CARS_ADD, data });

    history.push("/");
  } catch (err) {
    console.log(err);
  }
};
