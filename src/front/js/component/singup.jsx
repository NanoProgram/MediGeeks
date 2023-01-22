import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/example.css";
import { Link } from "react-router-dom";
import Medigeeks_Logo from "../../img/Medigeeks_Logo.jpg";
import { useForm } from "react-hook-form";
import { sendEmail } from "../service/emailService";
export const Singup = () => {

  const { register, formState: { errors }, handleSubmit } = useForm({ mode: "all", });

  const [user, setUser] = useState({});




  function samePassword() {
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;
    if (password != confirm_password) {
      alert("Las contraseñas no coinciden");
    }
  }

  console.log("errors", errors)

  function onSubmit(data) {

    console.log(data)
    
    verify(data)
  }


  const verify = (data) => {

    let params = {
      to_email: data.email,
      to_name: data.userName,
      to_link: "www.google.cl"
    };
    sendEmail(params);
  };


  return (

    <div className="login position-absolute top-50 start-50 translate-middle">
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} >
        <div className="logo d-flex justify-content-center">
          <img src={Medigeeks_Logo} />
        </div>
        &nbsp;
        <div className="form-outline mb-4">
          <input {...register("userName", {
            required: "Se requiere nombre y apellido",
            pattern: {
              value: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
              message: "Nombre no es valido"
            }
          })} placeholder="Nombre Apellido" type="userName" id="form2Example10" class="form-control" />
          <p>{errors.userName?.message}</p>
        </div>
        <div className="form-outline mb-4">
          <input {...register("rut",
            {
              required: "Se requiere RUT",
              pattern: {
                value: /\b[0-9|.]{1,10}\-[K|k|0-9]/,
                message: "Rut no es valido"
              }
            })} placeholder="R.U.T." type="" id="form2Example20" className="form-control" />
          <p>{errors.rut?.message}</p>
        </div>
        <div className="form-outline mb-4">
          <select {...register("prevision", {
            required: "Selecione una prevision"
          })}
            className="form-select form-select-sm mb-3s"
            aria-label=".form-select-sm example"
          >
            
            <option selected>Prevision</option>
            <option value="Fonasa">Fonasa</option>
            <option value="Banmedica">Banmedica</option>
            <option value="Cruz Blanca">Cruz Blanca</option>
            <option value="Masvida">Masvida</option>
            <option value="Colmena">Colmena</option>
          </select>
          <p>{errors.prevision?.message}</p>
        </div>
        <div className="form-outline mb-4">
          <input {...register("email", {
            required: "correo electronico es requerido",
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "El email debe ser válido"
            }
          })} placeholder="Email" type="" id="form2Example30" className="form-control" />
          <p>{errors.email?.message}</p>
        </div>
        <div className="form-outline mb-4">
          <input {...register("password", {
            required: "se requiere contraseña",
            pattern: {
              value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
              message: "La contraseña debe contener al menos 6 caracteres, una mayúscula, una minúscula, un número y un carácter de caso especial"
            }
          })} placeholder="Contraseña" type="password" id="password" className="form-control" />
          <p>{errors.password?.message}</p>
        </div>
        <div className="form-outline mb-4">
          <input onBlur={samePassword} placeholder="Confirme Contraseña" type="password" id="confirm_password" className="form-control" />
        </div>
        <div className="col d-flex justify-content-center">
          <input type="submit" value="registrarse"
          />
        </div>


      </form>
    </div>
  );
};