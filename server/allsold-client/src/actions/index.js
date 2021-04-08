import axios from "axios";
import { FETCH_GOOGLE_USER, AUTH, LOGOUT } from "./types";
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

// Logout User
export const logoutUser = (history) => (dispatch) => {
  dispatch({ type: LOGOUT });
  history.push("/");
};
