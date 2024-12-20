import { api } from "../utils/api";

export const getAllProducts = async () => {
  const res = await api().get("/products");
  return res.data;
};

export const getProductById = async (id) => {
  const res = await api().get(`/products/${id}`);
  return res.data;
};
