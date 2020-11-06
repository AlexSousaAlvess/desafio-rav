import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:8081",
  baseURL: "https://part-system-rav.herokuapp.com",
});

export default api;
