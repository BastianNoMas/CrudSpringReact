// src/components/Login.js
import React, { useState } from "react";
import "./Home.css"; // Asegúrate de tener este archivo para los estilos

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Lógica para enviar los datos del formulario a tu servidor o API
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Credenciales inválidas");
      }

      const data = await response.json();
      console.log("Login exitoso:", data);
      // Redirigir o hacer algo después del login exitoso
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="Ingresa tu nombre de usuario"
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <div className="input-group">
          <button type="submit" className="btn">
            Iniciar sesión
          </button>
        </div>
        <div className="input-group"></div>
      </form>
    </div>
  );
};

export default Login;
