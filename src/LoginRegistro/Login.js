import React, { Component } from "react";
import axios from "axios";
import "./LoginRegistro.scss";
import { Link } from "react-router-dom";
import { url } from "../helpers/urlUsuarios";



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
       console.log(this.state.form)
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
      <div>
        <img className="imagen" src='https://res.cloudinary.com/difxvqjj3/image/upload/v1643569386/Proyecto2/logo_m5bjlo.png' alt='logo' />
       
        <div className="containerLogin">
        <div className="containerLogin">
            <form className="formulario">
            <div className="">
              <label className="label">Email</label>
              <input
              className="email"
                type="email"
                name="correo"
                onChange={this.handleChanged}
                placeholder="Ingresa tu correo"
              />
            </div>

            <div  className="">
               <label className="label">Password</label>
              <input
              className="password"
                type="password"
                name="password"
                onChange={this.handleChanged}
                placeholder="Ingresa tu contraseña"
              />
            </div>

            <div>
              <button className="iniSesion" type="submit" onClick={() => this.iniciarSesion()}>
                Iniciar sesión
              </button>

              <button className="irRegistro">
              <Link className="linkRegistro" to={`/Registro `}>
                Registro
              </Link>
              </button>
             
            </div>
          </form>
        </div>
      </div>
      </div>
    );
  }
}

export default Login;
