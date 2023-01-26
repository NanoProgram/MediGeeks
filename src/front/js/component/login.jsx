import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/example.css";
import { Link } from "react-router-dom";
import Medigeeks_Logo from "../../img/Medigeeks_Logo.jpg";
import { useForm } from "react-hook-form";


export const Login = () => {

  const { register, formState: { errors }, handleSubmit } = useForm({ mode: "all" });
  

  const submitBack = async () => {
    try { 
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const res = await fetch(`https://3001-nanoprogram-medigeeks-mww1bt06jmk.ws-us84.gitpod.io/api/login?email=${email}&password=${password}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          /*"Authorization": "Bearer token"*/
        }
      });
      const data = await res.json();
      if (data.email) {
        console.log(data)
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (

    <div className="login position-absolute top-50 start-50 translate-middle">
      <form id="formulario" onSubmit={handleSubmit(submitBack)}>
        <div className="logo d-flex justify-content-center">
          <img src={Medigeeks_Logo} />
        </div>
        <br></br>
        <div class="form-outline mb-4">
          <input {...register("email", {
            required: true,
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Email no es valido"
            }
          })}  id="email" class="form-control" placeholder="Dirección de Email" />
          <p>{errors.email?.message}</p>
        </div>
        <div class="form-outline mb-4">
          <input {...register("password", {
            required: "Se rerquiere de contraseña",
            pattern: {
              value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
              message: "Contraeña no valida"
            }
          })} type="password" id="password" class="form-control" placeholder="Contraseña" />
          <p>{errors.password?.message}</p>
        </div>
        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
              <label class="form-check-label" for="form2Example31"> Recordar </label>
            </div>
          </div>
          <div class="col">
            <Link to="/Forgot"><a href="#!">¿Se te olvidó tu contraseña?</a></Link>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
        <input type="submit" value="Acceder" class="btn btn-primary btn-block mb-4 justify-content-center" />
        </div> 
        <div class="text-center">
          <p>Not a member? <Link to="/register"><a href="#!">Register</a></Link></p>
          <p>or sign up with:</p>
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-google fs-1"></i>
          </button>
        </div>
      </form>
    </div>
  );
};