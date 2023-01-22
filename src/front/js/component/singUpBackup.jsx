import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/example.css";
import { Link } from "react-router-dom";
import Medigeeks_Logo from "../../img/Medigeeks_Logo.jpg"
import { useForm } from "react-hook-form";

export const SingupBack= () => {

    const {register, formState: {errors}, handleSubmit} = useForm();
    function samePassword() {
        let password = document.getElementById("password").value;
        let confirm_password = document.getElementById("confirm_password").value;
        if (password != confirm_password) {
          alert("Las contraseñas no coinciden");
        }
      }

	return (

    <div className="login position-absolute top-50 start-50 translate-middle">
        <form onSubmit={handleSubmit((data) => console.log(data))}>
  <div className="logo d-flex justify-content-center">       
  <img  src={Medigeeks_Logo}/>
  </div> 
  <br></br>
  <div class="form-outline mb-4">
    <input {...register("Name", {
      required: "Se requiere Nombre",
      pattern: {
        value: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
        message: "Nombre no es valido"
      }

    })} type="" id="form2Example1" class="form-control" placeholder="Nombre y Apellido" />
    <p>{errors.Name?.message}</p>
  </div>

  
  <div class="form-outline mb-4">
    <input {...register("RUT", {
      required: "Se requiere RUT",
      pattern: {
        value: /\b[0-9|.]{1,10}\-[K|k|0-9]/,
        message: "Rut no es valido"
      }

    })} type="" id="form2Example2" class="form-control" placeholder="R.U.T"/>
     <p>{errors.RUT?.message}</p>
  </div>
  <div class="form-outline mb-4">
    <input type="" id="form2Example1" class="form-control" placeholder="Previsión"/>

   
  </div>

  
  <div class="form-outline mb-4">
    <input {...register("Email", {
      required: "Se requiere Email",
      pattern: {
        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Email no es valido"
      }

    })} type="" id="form2Example2" class="form-control" placeholder="Email"/>
    <p>{errors.Email?.message}</p>
  </div>
  <div class="form-outline mb-4">
    <input {...register("Password",{
      required: "Se rerquiere de contraseña",
      pattern: {
        value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
        message: "Contraseña debe contener al menos 6 caracteres, Una mayuscula, Una Minuscula, Un Numero y Un Caracter Especial"
      }
    })} type="password" id="password" class="form-control" placeholder="Contraseña" />

        <p>{errors.Password?.message}</p>
  </div>

  
  <div class="form-outline mb-4">
    <input  type="password" id="confirm_password" class="form-control" placeholder="Confirmar Contraseña" onBlur={samePassword} />
  </div>

  
  

  <div class="col d-flex justify-content-center">
  <button type="submit" class="btn btn-primary btn-block mb-4 justify-content-center" onClick={samePassword}>Sign UP</button>
  </div>

 
</form>
</div>
	);
};