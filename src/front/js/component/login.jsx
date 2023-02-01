import React, { useContext } from "react";
import "../../styles/example.css";
import { Link, useNavigate } from "react-router-dom";
import Medigeeks_Logo from "../../img/Medigeeks_Logo.jpg";
import { useForm } from "react-hook-form";
import { login } from "./../service/loginService";

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  const submitBack = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    fetch(
      "https://3001-nanoprogram-medigeeks-qieayu3bvm3.ws-us85.gitpod.io/api/login?email=${email}&password=${password}",
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          // guardar el token en el almacenamiento local o en el estado de la aplicación
          localStorage.setItem("token", data.token);
          console.log("Logueado correctamente");
          navigate("/home");
        } else {
          // manejar el error de autenticación
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="background-image">
      <div className="login position-absolute top-50 start-50 translate-middle ">
        <form id="formulario" onSubmit={handleSubmit(submitBack)}>
          <div className="logo d-flex justify-content-center">
            <img src={Medigeeks_Logo} />
          </div>
          <br></br>
          <div class="form-outline mb-4 ">  
           
            <input 
              {...register("email", {
                required: true,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Email no es valido",
                },
              })}
              id="email"
              class="form-control text-center"
              placeholder="Dirección de Email"
            />
            <p style={{ color: "red" }}>{errors.email?.message}</p>
          </div>
          <div class="form-outline mb-4">
            <input
              {...register("password", {
                required: "Se rerquiere de contraseña",
                pattern: {
                  value:
                    /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                  message: "Contraeña no valida",
                },
              })}
              type="password"
              id="password"
              class="form-control text-center"
              placeholder="Contraseña"
            />
            <p style={{ color: "red" }}>{errors.password?.message}</p>
          </div>
          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              <div class="form-check"></div>
            </div>
            <div style={{ textAlign: "center", alignItems: "center" }}>
              <Link to="/Forgot">
                <a href="#!">¿Se te olvidó tu contraseña?</a>
              </Link>
            </div>
          </div>
          <div class="col d-flex justify-content-center">
            <input
              type="submit"
              value="Acceder"
              class="btn btn-primary btn-block mb-4 justify-content-center rounded-pill "
            />
          </div>
          <div class="text-center">
            <p>
              No eres usuario?{" "}
              <Link to="/singup">
                <a href="#!">pincha aqui!</a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
