import axios from "axios";

const request = axios.create({
  baseURL: "https://quant-backend-api.onrender.com/",
});

export default request;
