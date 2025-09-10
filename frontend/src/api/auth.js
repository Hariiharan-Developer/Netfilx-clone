import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api/users", 
});

// Sign In
export const login = async (email, password) => {
  const { data } = await API.post("/login", { email, password });
  // Save token in localStorage
  localStorage.setItem("token", data.token);
  return data;
};

// Sign Up
export const signup = async (name, email, password) => {
  const { data } = await API.post("/register", { name, email, password });
  localStorage.setItem("token", data.token);
  return data;
};
