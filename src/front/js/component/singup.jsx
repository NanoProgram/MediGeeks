import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/example.css";
import { Link } from "react-router-dom";
import Medigeeks_Logo from "../../img/Medigeeks_Logo.jpg";
import { useForm } from "react-hook-form";

export const Singup = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();

  console.log("errors", errors)
  return (

    <div className="login position-absolute top-50 start-50 translate-middle">
      <form onSubmit={handleSubmit((data) => console.log(data))} >
        <div className="logo d-flex justify-content-center">
          <img src={Medigeeks_Logo} />
        </div>
        &nbsp;
        <div className="form-outline mb-4">
          <input {...register("userName", {
            required: "Se requiere nombre y apellido",
            minLength: {
              value: 10,
              message: "El nombre de usuario debe tener como minimo 10 caracteres"
            },
            maxLength: {
              value: 40,
              message: "El nombre de usuario debe tener como máximo 40 caracteres"
            },

          })} placeholder="Nombre Apellido" type="userNme" id="form2Example10" class="form-control" />

          <p>{errors.userName?.message}</p>



        </div>


        <div className="form-outline mb-4">
          <input {...register("rut")} placeholder="R.U.T." type="password" id="form2Example20" className="form-control" />

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
        </div>


        <div className="form-outline mb-4">
          <input {...register("email", {
            required: "correo electronico es requerido",
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "El email debe ser válido"
            }
          })} placeholder="Email" type="password" id="form2Example30" className="form-control" />
          <p>{errors.email?.message}</p>


        </div>
        <div className="form-outline mb-4">
          <input {...register("password", {
            required: "se requiere contraseña",
            pattern: {
              value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
              message: "La contraseña debe contener al menos 6 caracteres, una mayúscula, una minúscula, un número y un carácter de caso especial"
            }

          })} placeholder="Contraseña" type="password" id="form2Example40" className="form-control" />
          <p>{errors.password?.message}</p>

        </div>


        <div className="form-outline mb-4">
          <input {...register("password")} placeholder="Confirme Contraseña" type="password" id="form2Example50" className="form-control" />

        </div>




        <div className="col d-flex justify-content-center">
          <button type="button" className="btn btn-primary btn-block mb-4 justify-content-center">Registrarse</button>
        </div>


      </form>
    </div>
  );
};