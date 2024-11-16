import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Archivo CSS para los estilos del header

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/">
          <img
            src="logo.jpeg" // Cambia esta ruta al logo correcto
            alt="Logo"
            className="logo"
          />
        </Link>
        <div className="button-container">
          <Link to="/agregar" className="home-button">
            Agregar Producto
          </Link>
          <Link to="/listar" className="home-button">
            Lista de Productos
          </Link>
          <Link to="/login" className="home-button">
            Iniciar Sesión
          </Link>
          <Link to="/crearcuenta" className="home-button">
            Crear Cuenta
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
