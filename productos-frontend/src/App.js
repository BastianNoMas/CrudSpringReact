import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductoList from "./components/ProductoList";
import ProductoForm from "./components/ProductoForm";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/agregar" element={<ProductoForm />} />
        <Route path="/editar/:id" element={<ProductoForm />} />
        <Route path="/" element={<ProductoList />} />
      </Routes>
    </Router>
  );
};

export default App;
