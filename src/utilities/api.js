import axios from "axios";
const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    crossdomain: true,
  },
});

request.interceptors.request.use((config) => {
  config.headers["x_secret_key"] = process.env.REACT_APP_SECRET_KEY;
  return config;
});
export default request;