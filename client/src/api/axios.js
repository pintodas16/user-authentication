// src/api/axios.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://user-authentication-tawny-two.vercel.app/api/auth/", // your backend URL
});

// Attach JWT token to every request automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  // console.log("Request made with token:", token); // Debug log
  return req;
});

export default API;