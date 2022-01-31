import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '../LoginRegistro/Login';
import Formulario from '../LoginRegistro/Formulario';
import Home from '../components/Home/Home';
import Detalles from '../components/Detalles/Detalles';
import Carrito from '../components/Carrito/Carrito';



const AppRouter = () => {
  return (
      <div>

 <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Registro" element={<Formulario/>}/>
          <Route path="/Home" element={<Home/> }/>
          <Route path="/Detalles/:IdProduct" element={<Detalles/>}/>
          <Route path="/Carrito" element={<Carrito/> }/>
        </Routes>
  </BrowserRouter>
      </div>

  )
};

export default AppRouter;
