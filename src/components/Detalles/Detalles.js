import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { categorias, Products } from "../../arrayDatosComida/Productos";
import "./Detalles.scss";

const Detalles = () => {
  const { IdProduct } = useParams();

  const [ProductoS, setProductoS] = useState(null);
  const [CategoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [ProductsCategoria, setProductsCategoria] = useState(null);
  const [Combo, setCombo] = useState(null);
  const [Sabores, setSabores] = useState(null);

  const [Conteo, setConteo] = useState(1)

  const [Mensaje, setMensaje] = useState('')

  const [TotalPagar, setTotalPagar] = useState(0)


  useEffect(() => {
    const nuevoProducto = Products.find(
      (Produ) => Produ.id.toString() === IdProduct
    );
    if (nuevoProducto) {
      setProductoS(nuevoProducto);
      setTotalPagar(TotalPagar + Number(nuevoProducto.precio.replace(/[^0-9]/ig,"")))

      const nuevaCate = categorias.find(
        (Cate) => Cate.id === nuevoProducto.categorias
      );
      setCategoriaSeleccionada(nuevaCate);
      console.log(nuevaCate)

      const nuevosProductos = Products.filter(
        (Productos) => Productos.id === nuevoProducto.id
      );
      setProductsCategoria(nuevosProductos);
      // console.log(nuevosProductos)

      const nuevoCombo = nuevaCate.combo.map((ComboSelect) =>
        Products.find((ProductoCombo) => ProductoCombo.id === ComboSelect)
      );
      setCombo(nuevoCombo);
      // console.log(nuevoCombo)

      const Sabor = nuevaCate.sabores.map(
        (SaboresSelect) => SaboresSelect.image
      );
      setSabores(Sabor);
      console.log(Sabor)
    } else {
      console.log("ERROR UnU");
    }
  }, []);

  const handleRestar = () => {
    if (Conteo === 1) {
      setMensaje('Esta es la cantidad mínima que se puede comprar')
    }
    else {
      setMensaje('')
      setConteo(Conteo - 1)
      setTotalPagar(TotalPagar - Number(ProductoS.precio.replace(/[^0-9]/ig,"")))
    }
  }

  const handleSumar = () => {
    if (Conteo === 10) {
      setMensaje('Esta es la cantidad máxima que se permite comprar')
    }
    else {
      setMensaje('')
      setConteo(Conteo + 1)
      setTotalPagar(TotalPagar + Number(ProductoS.precio.replace(/[^0-9]/ig,"")))

    }
  }

  return (
    <div>
      <Link>
      </Link>
      <Link to="/Home">
        <button className="BtnBack">
          <IoIosArrowBack size={25} />
        </button>
      </Link>

      {ProductsCategoria &&
        ProductsCategoria.map((Seleccionado) => {
          return (
            <div className="Container-Detalles">
              <img src={Seleccionado.image} className="ImageSelect" alt="" />

              <div className="Container-Info">
                <h1 className="Nombre">
                  Guajalota de Tamal {Seleccionado.color}
                </h1>
                <h1 className="Precio">$ {Seleccionado.precio}</h1>
              </div>

              <div className="contenedor-botones">
                <div className="Botones-mas-menos">
                  <button className="botonMasyMenos disabled" onClick={() => handleRestar()}>
                    <AiOutlineMinusCircle size={35} />
                  </button>

                  <h1 className="Cantidad">{Conteo}</h1>

                  <button className="botonMasyMenos" onClick={() => handleSumar()}>
                    <AiOutlinePlusCircle size={35} />
                  </button>
                </div>
                <h6>{Mensaje}</h6>
              </div>
            </div>
          );
        })}

      {CategoriaSeleccionada ? (
        <>
          <h3>Sabor</h3>
        </>
      ) : (
        <></>
      )}

      <div>
        <img src={Sabores} alt="" />
      </div>

     <div className="container-Sabores-YFuncion">
        {Sabores ? (
          <>
            {Sabores.map((combos) => (
              <button className="BotonSabores">
                <img className="ImagenSabores" src={combos} />
              </button>
            ))}
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="Container-Combos">
        {Combo ? (
          <>
            {Combo.map((combos) => (
              <button className="Combos-btn">
              <img src={combos.image} className="Combos-img"/>
              </button>
            ))}
          </>
        ) : (
          <></>
        )}
      </div>

      <button className="btnAnadir">
        Monto Total:<strong> {TotalPagar} MXN</strong>
      </button>
    </div>
    
  );
};

export default Detalles;
