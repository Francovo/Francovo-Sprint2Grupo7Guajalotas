import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../index.css'
import { url } from '../helpers/urlUsuarios';

const Formulario  = () => {

    const[usuario, setUsuario]=useState({
        nombre:'',
        correo:'',
        password:''
    })
const {nombre, correo, password}=usuario;

    const postData = () => {
        if (usuario.correo==="" || usuario.password==="" || usuario.nombre==="") {
            alert('Debes llenar todos los campos para registrarte')
        } else {
            axios.post(url,usuario)
            .then(response => console.log(response.data))
            .then(window.location.href="./")
            .catch(error => console.log(error))
            
        }
        
        
   }

   const handleChanged = ({target}) => {
    setUsuario({
      ...usuario,
      [target.name]: target.value
    })
   
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   }

   
  return (
     <div>
          <img className="imagen" src='https://res.cloudinary.com/difxvqjj3/image/upload/v1643569386/Proyecto2/logo_m5bjlo.png' alt='logo' />
                <div className="containerRegistro">
                <div className="containerRegistro">
                <form onSubmit={handleSubmit}>
                        <div >
                            <label className='label'>Nombre</label >
                            <input className="nombre" type="text" name="nombre" value={nombre} onChange={handleChanged} placeholder="Ingresa tu nombre" />
                        </div>

                        <div>
                            <label className='label'>Correo Electronico</label>
                            <input className="email" type="email" name="correo" value={correo} onChange={handleChanged} placeholder="Ingresa tu correo" />
                        </div>

                        <div >
                            <label className="label">Password</label>
                            <input className='password' type="password" name="password" value={password} onChange={handleChanged} placeholder="Password" />
                        </div>

                        <div >
                            <button className='enviar' type="submit" onClick={() => postData()}>
                                Enviar
                            </button>

                            <button className="iniSesion">
                            <Link className="linkRegistro" to={`/`}>
                                ir a Login
                            </Link>
                            </button>
                        </div>

                </form>
                </div>
             </div>
        </div>
          
    )
};

export default Formulario;
