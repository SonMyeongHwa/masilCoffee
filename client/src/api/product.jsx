import axios from "axios";

export const getAllProducts = async () => {
  const res = await axios.get("http://localhost:5000/api/v1/products");
  const products = res.data.data;

  return products;
};

export const createProduct = async (data) => {
  console.log("form", data);
  const res = await axios.post("http://localhost:5000/api/v1/products", data).then((res) => res.data);
  const newProduct = res.data.data;

  console.log("create", res, newProduct);

  return newProduct;
};

export const updateProduct = async (id, data) => {
  const res = await axios.put(`http://localhost:5000/api/v1/products/${id}`, data);
  const products = res.data.data;

  return products;
};

export const deleteProduct = async (id) => {
  const res = await axios.delete(`http://localhost:5000/api/v1/products/${id}`);
  const products = res.data.data;

  console.log("deleted", res, products);

  return products;
};
