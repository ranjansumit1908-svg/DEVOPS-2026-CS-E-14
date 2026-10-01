import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

// Attach the JWT to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Turn any failure into a readable message
export const getErrorMessage = (err) =>
  err.response?.data?.message ||
  (err.request
    ? "Cannot reach the server. Please check that the backend is running."
    : "Something went wrong. Please try again.");

export const saveSession = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("currentUser", JSON.stringify(user));
  localStorage.setItem("userRole", user.role);
};

export const clearSession = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("currentUser");
  localStorage.removeItem("userRole");
};

export const getCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem("currentUser"));
  } catch {
    return null;
  }
};

export default api;
