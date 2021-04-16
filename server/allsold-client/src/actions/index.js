import axios from "axios";
import { FETCH_GOOGLE_USER, AUTH, LOGOUT, GET_ALL_PRODUCTS } from "./types";
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
    history.push("/");
    window.location.reload();
  } catch (error) {
    console.log(error);
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
  } catch (error) {
    console.log(error);
  }
};

// Get All Users
export const getAllProducts = (history, id) => async (dispatch) => {
  try {
    const { data } = await api.getAllProducts();
    dispatch({ type: GET_ALL_PRODUCTS, data });
  } catch (error) {
    console.log(error);
  }
};

export const handleToken = (token) => async (dispatch) => {
  const response = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_GOOGLE_USER, payload: response.data });
  dispatch({ type: AUTH, payload: response.data });
};
