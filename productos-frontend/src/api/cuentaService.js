import axios from "axios";

const API_URL = "http://localhost:8080/api/auth"; // Ajusta la URL si es diferente

// Crear una nueva cuenta
export const createCuenta = async (cuentaData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, cuentaData);
    return response.data; // Retorna la respuesta del backend
  } catch (error) {
    // Maneja errores de respuesta del servidor o de red
    throw new Error(error.response?.data || "Error al crear la cuenta");
  }
};
