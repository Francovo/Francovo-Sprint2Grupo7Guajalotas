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

  handleChanged =  (e) => {
     this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
        // console.log(this.state.form)
  };

  iniciarSesion = async ()=>{
    await axios.get(url, {params: {correo: this.state.form.correo , password: this.state.form.password}})
    .then(response=>{
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

   handleSubmit = (e) => {
    e.preventDefault();
   }

  render() {
    return (
      <div>
      <img className="imagen" src='https://res.cloudinary.com/difxvqjj3/image/upload/v1643569386/Proyecto2/logo_m5bjlo.png' alt='logo' />
            <div className="containerRegistro">
            <div className="containerRegistro">
            <form onSubmit={this.handleSubmit}>
                   
                    <div>
                        <label className='label'>Correo Electronico:</label>
                        <input className="email" type="email" name="correo"  onChange={this.handleChanged} placeholder="Ingresa tu correo" />
                    </div>

                    <div >
                        <label className="label">Password:</label>
                        <input className='password' type="password" name="password"  onChange={this.handleChanged} placeholder="Password" />
                    </div>

                    <div >
                        <button className='iniSesion' type="submit" onClick={() => this.iniciarSesion()}>
                            Enviar
                        </button>

                        <button className="irRegistro">
                        <Link className="linkRegistro" to={`/Registro`}>
                            ir a Registro
                        </Link>
                        </button>
                    </div>

            </form>
            </div>
         </div>
    </div>)
  }
}

export default Login;
