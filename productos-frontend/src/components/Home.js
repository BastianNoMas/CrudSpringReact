import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Para estilos personalizados

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <img src="/banner.jpeg" alt="Banner" className="home-banner" />
      </div>
    </div>
  );
};

export default Home;
