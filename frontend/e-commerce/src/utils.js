import axios from "axios";

const API = axios.create({
  baseURL: "https://e-commerce-app-backend-b9yv.onrender.com",
  // baseURL: "http://localhost:5000",
  withCredentials: true
});

export default API;