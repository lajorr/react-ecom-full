import axios from "axios";

const baseUrl = "https://fakestoreapi.com";

export const api = () => {
  const axiosConfig = {
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const instance = axios.create(axiosConfig);
  return instance;
};
