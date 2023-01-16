import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/example.css";
import { Link } from "react-router-dom";
import Medigeeks_Logo from "../../img/Medigeeks_Logo.jpg";


export const Login= () => {

  const {register, formState: {errors}, handleSubmit} = useForm();

	return (

    <div   className="login position-absolute top-50 start-50 translate-middle">
       
        <form>
  <div className="logo d-flex justify-content-center">       
  <img  src={Medigeeks_Logo}/>
  </div> 
  <div class="form-outline mb-4">
    <input {...register("Email", {
      required: true,
      pattern: {
        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Email no es valido"
      }

    })} type="email" id="form2Example1" class="form-control" placeholder="Dirección de Email"/>

    <p>{errors.Email?.message}</p>

  </div>

  
  <div class="form-outline mb-4">
    <input {...register("Password",{
      required: "Se rerquiere de contraseña",
      pattern: {
        value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
        message: "Contraeña no valida"
      }
    })} type="password" id="form2Example2" class="form-control" placeholder="Contraseña" />

    <p>{errors.Password?.message}</p>
  </div>

  
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
   
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
   
    <Link to="/Forgot"><a href="#!">Forgot password?</a></Link>
    </div>
  </div>

  <div class="col d-flex justify-content-center">
  <button type="submit" class="btn btn-primary btn-block mb-4 justify-content-center">Sign in</button>
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