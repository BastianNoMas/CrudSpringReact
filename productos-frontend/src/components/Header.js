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
      </div>
    </header>
  );
};

export default Header;
