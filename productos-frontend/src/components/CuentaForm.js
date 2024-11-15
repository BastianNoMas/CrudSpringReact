import React, { useState } from "react";
import { createCuenta } from "../api/cuentaService"; // Asegúrate de crear el servicio adecuado
import { useNavigate } from "react-router-dom";

import "./Home.css";

const CuentaForm = () => {
  const [username, setUsername] = useState("");
  const [rut, setRut] = useState("");
  const [direccion, setDireccion] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [mensaje, setMensaje] = useState(""); // Estado para el mensaje
  const navigate = useNavigate(); // Hook para la navegación

  // Función para manejar el submit del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repetirPassword) {
      setMensaje("Las contraseñas no coinciden.");
      return;
    }

    const nuevaCuenta = {
      username,
      rut,
      direccion,
      password,
      repetirPassword,
      correoElectronico,
      role: "usuario", // Establece el rol por defecto a "usuario"
    };

    try {
      await createCuenta(nuevaCuenta); // Llama a la función de tu servicio API
      setMensaje("Cuenta creada exitosamente!");
      setUsername("");
      setRut("");
      setDireccion("");
      setPassword("");
      setRepetirPassword("");
      setCorreoElectronico("");

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
        type="text"
        placeholder="RUT"
        value={rut}
        onChange={(e) => setRut(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Dirección"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Correo Electrónico"
        value={correoElectronico}
        onChange={(e) => setCorreoElectronico(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Repetir Contraseña"
        value={repetirPassword}
        onChange={(e) => setRepetirPassword(e.target.value)}
        required
      />
      <button type="submit" className="submit-button">
        Crear Cuenta
      </button>
    </form>
  );
};

export default CuentaForm;
