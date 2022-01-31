import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { categorias, Products } from "../../arrayDatosComida/Productos";
import "./Detalles.scss";
import { BsCart2 } from "react-icons/bs";
import styled from "styled-components";
import Contador from "./Contador";
import { arregloCompras } from "../../helpers/arregloCompras";

const A = styled.a`
  display: flex;
  position: absolute;
  top: 40px;
  right: 30px;
  cursor: pointer;
`;

const Detalles = () => {
  const { IdProduct } = useParams();

  const [ProductoS, setProductoS] = useState(null);
  const [CategoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [ProductsCategoria, setProductsCategoria] = useState(null);
  const [Combo, setCombo] = useState(null);

  const [SaboresImagen, setSaboresImagen] = useState(null);
  const [SaboresColor, setSaboresColor] = useState(null);

  const { Conteo, Mensaje, TotalPagar, handleRestar, handleSumar } = Contador(1, 0, IdProduct)

  const navegar = useNavigate();

  useEffect(() => {
    const nuevoProducto = Products.find(
      (Produ) => Produ.id.toString() === IdProduct
    );

    if (nuevoProducto) {
      setProductoS(nuevoProducto);

      const nuevaCate = categorias.find(
        (Cate) => Cate.id === nuevoProducto.categorias
      );
      setCategoriaSeleccionada(nuevaCate);
      // console.log(nuevaCate);

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

      const SaborImagen = nuevaCate.sabores.map(
        (SaboresSelect) => SaboresSelect.image
      );
      setSaboresImagen(SaborImagen);
      // console.log(SaborImagen)

      const SaborValor = nuevaCate.sabores.map(
        (SaboresSelect) => SaboresSelect.color
      );
      setSaboresColor(SaborValor)
      // console.log(SaborValor);

    } else {
      console.log("ERROR UnU");
    }
  }, []);

  const handleAddPurchase = (e) => {
       e.preventDefault()

      let nuevaCompra = {
        producto: ProductoS, 
        contador: Conteo, 
        total: TotalPagar
      }
      arregloCompras.push(nuevaCompra)
      localStorage.setItem('misCompras', JSON.stringify(arregloCompras))

      alert('Esta compra ha sido agregada al carrito')
      navegar("../Home");
  }

  return (
    <div>
      <Link to="/Carrito">
        <A>
          <BsCart2 size={25} />
        </A>
      </Link>
      <Link to="/Home">
        <button className="BtnBack">
          <IoIosArrowBack size={25} />
        </button>
      </Link>

      {ProductsCategoria &&
        ProductsCategoria.map((Seleccionado) => {
          return (
            <div className="Container-Detalles" key={Seleccionado.id}>
              <img src={Seleccionado.image} className="ImageSelect" alt="" />

              <div className="Container-Info">
                <h1 className="Nombre">
                  Guajalota de Tamal {Seleccionado.color}
                </h1>
                <h1 className="Precio">$ {Seleccionado.precio}</h1>
              </div>

              <div className="contenedor-botones">
                <div className="Botones-mas-menos">
                  <button
                    className="botonMasyMenos disabled"
                    onClick={() => handleRestar()}
                  >
                    <AiOutlineMinusCircle size={35} />
                  </button>

                  <h1 className="Cantidad">{Conteo}</h1>

                  <button
                    className="botonMasyMenos"
                    onClick={() => handleSumar()}
                  >
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
        <img src={SaboresImagen} alt="" />
      </div>

      <div className="container-Sabores-YFuncion">
        {SaboresImagen ? (
          <> 
            {SaboresImagen.map((imagen, indice) => (
              SaboresColor[indice] === ProductoS.color ?
                <img className="ImagenSabores opacidad-seleccionada" src={imagen} alt="" key={indice}/>
                :
                <img className="ImagenSabores opacidad-normal" src={imagen} alt="" />
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
              // <button className="Combos-btn">
              //   <img src={combos.image} className="Combos-img" />
              //   <div className="Container-Info">
              //   <h1 className="Combos-Color">{combos.color}</h1>
              //   <h1 className="Combos-Precio"> + {combos.precio}</h1>
              //   </div>

              // </button>
              <div className="Combos-btn">
              <label className="LabelCombos">
                <input type="checkbox"  className="input"/>
                  <img src={combos.image} className="Combos-img" />
                  <div className="Container-Info">
                    <h1 className="Combos-Color">{combos.color}</h1>
                    <h1 className="Combos-Precio"> + {combos.precio}</h1>
                  </div>
                </label>
              </div>
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
        <button className="btnAnadir" onClick={handleAddPurchase} to="/Home">
          <h4>Agregar {Conteo} al carrito</h4>
          <strong> $ {TotalPagar}</strong>
        </button>
    </div>
  );
};

export default Detalles;
