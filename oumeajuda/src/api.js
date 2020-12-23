import axios from "axios";

const api = axios.create({
  baseURL: "localhost:7000",
});

export default api;
