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

// Route to login User
export const login = (formData) =>
  API.post("users/login", formData)
  .catch((err) => {
    if (err.response) {
      console.log(err.response.data);
    }
  });
// Route to Register User
export const register = (formData) => API.post("users/register", formData);
// Route to get All Products
export const getAllProducts = () => API.get("products");
// Route to get single Product
export const getSingleProduct = (id) => API.get("products/" + id);
// Route to get All extra products
export const getExtraProducts = () => API.get("extraProducts");
