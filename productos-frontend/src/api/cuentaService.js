import axios from "axios";

const API_URL = "http://localhost:8080/api/auth"; // Ajusta la URL si es diferente

// Crear una nueva cuenta
export const createCuenta = async (cuentaData) => {
  try {
    // Realizamos la solicitud POST al backend para crear la cuenta
    const response = await fetch("/api/cuentas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cuentaData),
    });

    // Si la respuesta no es exitosa, lanzamos un error
    if (!response.ok) {
      throw new Error("Error al crear la cuenta. Intente de nuevo.");
    }

    // Retornamos la respuesta convertida a JSON
    return await response.json();
  } catch (error) {
    // Maneja errores de respuesta del servidor o de red
    throw new Error(error.response?.data || "Error al crear la cuenta");
  }
};
