import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000/api'});


// rotue for login 
export const login = (formData) => API.post('users/login', formData);
// route for register
export const register = (formData) => API.post('users/register', formData);