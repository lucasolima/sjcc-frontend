import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Authorization": `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
    "Content-Type": "application/json",
  },
});

export default api;