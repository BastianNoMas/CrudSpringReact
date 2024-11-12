// api/cuentaService.js

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
    // En caso de un error, lanzamos una excepción con el mensaje
    throw new Error(error.message);
  }
};
