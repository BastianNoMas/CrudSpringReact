import React, { useState, useEffect } from "react";
import {
  createProducto,
  obtenerProductoPorId,
  updateProducto,
} from "../api/productoService";
import { useParams } from "react-router-dom";

const ProductoForm = () => {
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [estado, setEstado] = useState("");
  const [vendedor, setVendedor] = useState("");
  const [precio, setPrecio] = useState("");
  const isEditing = !!id;

  useEffect(() => {
    if (isEditing) {
      const fetchProducto = async () => {
        const data = await obtenerProductoPorId(id);
        setNombre(data.nombre);
        setTipo(data.tipo);
        setEstado(data.estado);
        setVendedor(data.vendedor);
        setPrecio(data.precio);
      };
      fetchProducto();
    }
  }, [isEditing, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const producto = { nombre, tipo, estado, vendedor, precio };

    if (isEditing) {
      await updateProducto(id, producto);
    } else {
      await createProducto(producto);
    }

    setNombre("");
    setTipo("");
    setEstado("");
    setVendedor("");
    setPrecio("");
  };

  return (
    <form onSubmit={handleSubmit} className="producto-form">
      <h2>{isEditing ? "Editar Producto" : "Agregar Producto"}</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Tipo"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Estado"
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Vendedor"
        value={vendedor}
        onChange={(e) => setVendedor(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        required
      />
      <button type="submit" className="submit-button">
        {isEditing ? "Actualizar" : "Guardar Producto"}
      </button>
    </form>
  );
};

export default ProductoForm;
