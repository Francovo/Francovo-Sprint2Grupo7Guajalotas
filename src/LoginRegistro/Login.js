import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "../index.css";
import { url } from "../helpers/urlUsuarios";
import { Button, Container, Stack } from "react-bootstrap";


class Login extends Component {
  state = {
    form: {
      correo: "",
      password: "",
    },
  };

  handleChanged = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    //    console.log(this.state.form)
  };

  iniciarSesion = async () => {
    await axios
      .get(url, {
        params: {
          correo: this.state.form.correo,
          password: this.state.form.password,
        },
      })
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          window.location.href = "./Home";
        } else {
          alert("El usuario o contraseña no son correctas !");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div id="containerRegistro">
        <Container id="containerLogin">
          <Form>
            <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="correo"
                onChange={this.handleChanged}
                placeholder="Ingresa tu correo"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={this.handleChanged}
                placeholder="Ingresa tu contraseña"
              />
            </Form.Group>

            <Stack gap={2} className="mb-3 mx-auto">
              <Button variant="primary" onClick={() => this.iniciarSesion()}>
                Iniciar sesión
              </Button>
              <Link className="btn btn-danger " to={`/Registro `}>
                Registro
              </Link>
            </Stack>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Login;
