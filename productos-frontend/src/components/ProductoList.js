import React, { useEffect, useState } from "react";
import { getProductos, deleteProducto } from "../api/productoService";
import { Link } from "react-router-dom";

const ProductoList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const result = await getProductos();
      setProductos(result);
    };

    fetchProductos();
  }, []);

  const handleDelete = async (id) => {
    await deleteProducto(id);
    setProductos(productos.filter((producto) => producto.id !== id));
  };

  return (
    <div className="product-list-container">
      <h2>Lista de Productos</h2>
      <Link to="/agregar" className="add-product-link">
        Agregar Producto
      </Link>
      <ul className="product-list">
        {productos.map((producto) => (
          <li key={producto.id} className="product-item">
            <span className="product-info">
              {producto.nombre} - ${producto.precio}
            </span>
            <div className="actions">
              <button
                onClick={() => handleDelete(producto.id)}
                className="delete-button"
              >
                Eliminar
              </button>
              <Link to={`/editar/${producto.id}`} className="edit-link">
                Editar
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductoList;
