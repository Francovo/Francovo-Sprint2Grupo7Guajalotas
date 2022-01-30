import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detalles from '../components/Detalles/Detalles';
import Home from '../components/Home/Home';

import Login from '../LoginRegistro/Login';
import Formulario from '../LoginRegistro/Formulario';



const AppRouter = () => {
  return (
      <div>

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
