import { Axios, axios } from "axios";

export const api: Axios = axios.create({
  baseURL: "http://localhost:8080/api",
});
