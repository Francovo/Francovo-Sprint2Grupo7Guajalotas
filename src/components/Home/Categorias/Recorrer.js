import React, { useEffect, useState } from "react";
import { categorias, Products } from "../../../arrayDatosComida/Productos";
import "./style.scss";
import {Link} from 'react-router-dom'

export const Recorrer = ({CategoriaActual}) => {

  const [Productos, setProductos] = useState(null);

  const [categoria, setcategoria] = useState(null);

  useEffect(() => {
      const NuevaCategoria = (categorias.find(categoria => categoria.nombre === CategoriaActual));
      if (NuevaCategoria) {
        setcategoria(NuevaCategoria)
        const NuevosProductos = Products.filter(Product=>Product.categorias===NuevaCategoria.id)
        setProductos(NuevosProductos)
      }else{
        console.log("Mal puesto xd");
      }
  }, [CategoriaActual]);

  return (
    <>
      {Productos&&Productos.map((Producto) => (
          <Link className="Boton" to={"/Detalles/" + Producto.id}>
        <div className="container">
            <img src={Producto.image} alt="" className="Imagen" />
          <div className="ContainerPrecio">
          <h1 className="Color">{Producto.color}</h1>
          <h1 className="Precio">$ {Producto.precio}</h1>
          </div>
        </div>
        </Link>
      ))}
    </>
  );
};
