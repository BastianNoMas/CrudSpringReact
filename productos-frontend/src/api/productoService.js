import axios from "axios";

const API_URL = "http://localhost:8080/api/productos"; // Cambia a la ruta correcta

export const getProductos = async () => {
  const response = await axios.get(API_URL); // Cambiado a /api/productos
  return response.data;
};

export const createProducto = async (producto) => {
  await axios.post(API_URL, producto); // Cambiado a /api/productos
};

export const deleteProducto = async (id) => {
  await axios.delete(`${API_URL}/${id}`); // Cambiado a /api/productos/{id}
};

export const obtenerProductoPorId = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`); // Cambiado a /api/productos/{id}
  return response.data;
};

export const updateProducto = async (id, producto) => {
  await axios.put(`${API_URL}/${id}`, producto); // Cambiado a /api/productos/{id}
};
