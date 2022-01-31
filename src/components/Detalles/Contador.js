import React, { useEffect, useState } from 'react';
import { Products } from "../../arrayDatosComida/Productos";

const Contador = (cont = 10, total, IdProduct) => {

    const [Conteo, setConteo] = useState(cont);
    const [Mensaje, setMensaje] = useState("");
    const [TotalPagar, setTotalPagar] = useState(total);
    const [ProductoS, setProductoS] = useState(null)

    useEffect(() => {
        const nuevoProducto = Products.find(
            (Produ) => Produ.id.toString() === IdProduct
          );
        setProductoS(nuevoProducto);
        setTotalPagar(TotalPagar + Number(nuevoProducto.precio.replace(/[^0-9]/gi, "")))
    }, []);

    const handleRestar = () => {
        if (Conteo === 1) {
          setMensaje("Esta es la cantidad mínima que se puede comprar");
        } else {
          setMensaje("");
          setConteo(Conteo - 1);
          setTotalPagar(
            TotalPagar - Number(ProductoS.precio.replace(/[^0-9]/gi, ""))
          );
        }
      };
    
      const handleSumar = () => {
        if (Conteo === 10) {
          setMensaje("Esta es la cantidad máxima que se permite comprar");
        } else {
          setMensaje("");
          setConteo(Conteo + 1);
          setTotalPagar(
            TotalPagar + Number(ProductoS.precio.replace(/[^0-9]/gi, ""))
          );
        }
      };

  return {
        Conteo,
        Mensaje,
        TotalPagar,
        handleRestar,
        handleSumar
  };
};

export default Contador;
