import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductoList from "./components/ProductoList";
import ProductoForm from "./components/ProductoForm";
import ProductoDetalle from "./components/ProductoDetalle";
import Home from "./components/Home";
import Header from "./components/Header";
import CuentaForm from "./components/CuentaForm";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listar" element={<ProductoList />} />
        <Route path="/agregar" element={<ProductoForm />} />
        <Route path="/editar/:id" element={<ProductoForm />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        <Route path="/crearcuenta" element={<CuentaForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
