import axios from "axios";
import {
  FETCH_GOOGLE_USER,
  AUTH,
} from "./types";
import * as api from '../API';

export const fetchGoogleUser = () => async (dispatch) => {
  const response = await axios.get("/api/current_user");
  dispatch({ type: FETCH_GOOGLE_USER, payload: response.data });
};

// Login User
export const loginUser = (formData, history) => async (dispatch) => {
  try {
    // login the user
    const {data}  = await api.login(formData);
    dispatch({type:AUTH ,data});
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

// Register User
export const registerUser = (formData, history) => async (dispatch) => {
  try {
    // Register the user
    const {data}  = await api.register(formData);
    dispatch({type:AUTH ,data});
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
