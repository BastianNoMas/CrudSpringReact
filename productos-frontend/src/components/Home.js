import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Para estilos personalizados

const Home = () => {
  return (
    <div className="home-container">
      <div className="button-box">
        <Link to="/agregar" className="home-button">
          Agregar Producto
        </Link>
        <Link to="/listar" className="home-button">
          Lista de Productos
        </Link>
        <Link to="/editar/1" className="home-button">
          Editar Producto
        </Link>
        {/* Ejemplo, ajusta la ruta */}
        <Link to="/crearcuenta" className="home-button">
          Detalle Producto
        </Link>
        {/* Ejemplo, ajusta la ruta */}
      </div>
    </div>
  );
};

export default Home;
