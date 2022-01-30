import React, { useState } from "react";
import "./style.scss";
import { FiSearch } from "react-icons/fi";
import { Recorrer } from "./Categorias/Recorrer";
import { BsCart2 } from "react-icons/bs";
import styled from "styled-components";
import { Link } from "react-router-dom";

const A = styled.a`
  display: flex;
  position: absolute;
  top: 40px;
  right: 30px;
  cursor: pointer;
`;

const Home = () => {
  const [Pagina, setPagina] = useState("Guajolotas");

  return (
    <div className="Container">
      <Link to="/Carrito">
        <A>
          <BsCart2 size={25} />
        </A>
      </Link>
      <div className="Logo">
        <a href="/">
          <img
            src="https://res.cloudinary.com/aca-geek/image/upload/v1642891058/Ilustraci%C3%B3n_sin_t%C3%ADtulo_66_1_twomjl.png"
            alt=""
            width={90}
          />
        </a>
      </div>

      <div className="texto">Nada como una Guajalota para empezar el dia</div>

      <div className="Sabor">
        <FiSearch className="iconoBusqueda" size={25} />
        <input
          type="Text"
          className="InputSabor"
          placeholder="Sabor de guajolota, bebida..."
        />
      </div>

      <div className="Categorias">
        <button className="BotonCate" onClick={() => setPagina("Guajolotas")}>
          Guajalotas
        </button>
        <button className="BotonCate" onClick={() => setPagina("Bebidas")}>
          Bebidas
        </button>
        <button className="BotonCate" onClick={() => setPagina("Tamales")}>
          Tamales
        </button>
      </div>

      <Recorrer CategoriaActual={Pagina} />
    </div>
  );
};

export default Home;
