import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/" });

// sending the jwt token as headers to the backend
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

// Route for login User
export const login = (formData) => API.post("users/login", formData);
// Route for Register User
export const register = (formData) => API.post("users/register", formData);
// Route to get All Products
export const getAllProducts = () => API.get("products");
