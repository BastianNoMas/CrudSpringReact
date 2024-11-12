import React, { useState } from "react";
import { createCuenta } from "../api/cuentaService"; // Asegúrate de crear el servicio adecuado
import { useNavigate } from "react-router-dom";

const CuentaForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState(""); // Estado para el mensaje
  const navigate = useNavigate(); // Hook para la navegación

  // Función para manejar el submit del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Aquí se puede agregar la lógica de validación del password si lo necesitas

    const nuevaCuenta = {
      username,
      password,
      role: "usuario", // Establece el rol por defecto a "usuario"
    };

    try {
      await createCuenta(nuevaCuenta); // Llama a la función de tu servicio API
      setMensaje("Cuenta creada exitosamente!");
      setUsername("");
      setPassword("");

      setTimeout(() => {
        setMensaje(""); // Limpia el mensaje después de 3 segundos
        navigate("/login"); // Redirige a la página de login (ajustar ruta según corresponda)
      }, 3000);
    } catch (error) {
      setMensaje("Hubo un error al crear la cuenta.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="cuenta-form">
      <h2>Crear Cuenta</h2>
      {mensaje && <p className="success-message">{mensaje}</p>}{" "}
      {/* Mensaje de éxito o error */}
      <input
        type="text"
        placeholder="Nombre de Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="submit-button">
        Crear Cuenta
      </button>
    </form>
  );
};

export default CuentaForm;
