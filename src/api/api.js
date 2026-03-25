import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dogsit-dashboard-backend.onrender.com/api",
  // "http://localhost:5000",

  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
