import axios from "axios";

export const productsInstance = axios.create({
  baseURL: "http://localhost:4000/",
});
