import React, { useEffect, useState } from "react";
import { obtenerProductoPorId } from "../api/productoService";
import { useParams } from "react-router-dom";

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      const data = await obtenerProductoPorId(id);
      setProducto(data);
    };

    fetchProducto();
  }, [id]);

  if (!producto) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="producto-detalle">
      <h2>Detalle de Producto</h2>
      <p>
        <strong>Nombre:</strong> {producto.nombre}
      </p>
      <p>
        <strong>Tipo:</strong> {producto.tipo}
      </p>
      <p>
        <strong>Estado:</strong> {producto.estado}
      </p>
      <p>
        <strong>Vendedor:</strong> {producto.vendedor}
      </p>
      <p>
        <strong>Precio:</strong> ${producto.precio}
      </p>
    </div>
  );
};

export default ProductoDetalle;
