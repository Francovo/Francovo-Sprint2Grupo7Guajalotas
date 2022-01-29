import React, { useState } from 'react';
import { Button, Container, Stack } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
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
     
        <div id="containerRegistro" >
            <Container id="containerRegistro">
                <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 mt-5" controlId="formBasicText">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" name="nombre" value={nombre} onChange={handleChanged} placeholder="Ingresa tu nombre" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo Electronico</Form.Label>
                            <Form.Control type="email" name="correo" value={correo} onChange={handleChanged} placeholder="Ingresa tu correo" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={password} onChange={handleChanged} placeholder="Password" />
                        </Form.Group>

                        <Stack gap={2} className="mb-3 mx-auto">
                            <Button variant="primary" type="submit" onClick={() => postData()}>
                                Enviar
                            </Button>

                            <Link
                                className="btn btn-success "
                                to="/ ">
                                    Ir a Login
                            </Link>
                    </Stack>

                </Form>
            </Container>
        </div>
    )
};

export default Formulario;
