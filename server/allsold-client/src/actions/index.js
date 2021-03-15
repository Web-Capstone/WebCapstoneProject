import axios from "axios";
import { FETCH_GOOGLE_USER } from "./types";

export const fetchGoogleUser = () => async (dispatch) => {
  const response = await axios.get("/api/current_user");
  dispatch({ type: FETCH_GOOGLE_USER, payload: response.data });
};
