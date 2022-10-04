import axios from "axios";

const request = axios.create({
  baseURL: "http://167.99.205.232:7070",
  headers: {
    "Content-Type": "application/json",
    crossdomain: true,
  },
});

/*
request.interceptors.request.use((config) => {
  let token = localStorage.getItem("token");
  if (token) {
    config.headers["x-access-token"] = `${token}`;
  }
  return config;
});
*/
export default request;
