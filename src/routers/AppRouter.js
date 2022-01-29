import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detalles from '../components/Detalles/Detalles';
import Home from '../components/Home/Home';
import { BsCart2 } from "react-icons/bs";
import styled from "styled-components";
import Login from '../LoginRegistro/Login';
import Formulario from '../LoginRegistro/Formulario';


const A = styled.a`
  display: flex;
  position: absolute;
  top: 40px;
  right: 30px;
  cursor: pointer;
`;

const AppRouter = () => {
  return (
      <div>
        <A>
        <BsCart2 size={25} />
      </A>
 <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Registro" element={<Formulario/>}/>
          <Route path="/Home" element={<Home/> }/>
          <Route path="/Detalles/:IdProduct" element={<Detalles/>}/>
        </Routes>
  </BrowserRouter>
      </div>

  )
};

export default AppRouter;
