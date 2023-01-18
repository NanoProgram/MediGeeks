import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/example.css";
import { Link } from "react-router-dom";
import Medigeeks_Logo from "../../img/Medigeeks_Logo.jpg";
import { useForm } from "react-hook-form";

export const Recover = () => {

    const { register, formState: { errors }, handleSubmit } = useForm({ mode: "all", });
    function samePassword() {
        let password = document.getElementById("password").value;
        let confirm_password = document.getElementById("confirm_password").value;
        if (password != confirm_password) {
            alert("Las contraseñas no coinciden");
        }
    }

    console.log("errors", errors)
    return (

        <div className="login position-absolute top-50 start-50 translate-middle">
            <form autoComplete="off" onSubmit={handleSubmit((data) => console.log(data))} >
                <div className="logo d-flex justify-content-center">
                    <img src={Medigeeks_Logo} />
                </div>
                &nbsp;
                <div className="col d-flex justify-content-center">
                    <h3>¿Olvidaste tu contraseña?</h3>                   
                </div>                            
                &nbsp;
                &nbsp;
                <div className="form-outline mb-4">
                    <input {...register("email", {
                        required: "correo electronico es requerido",
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "El email debe ser válido"
                        }
                    })} placeholder="Escribe tu Email" type="" id="form2Example30" className="form-control" />
                    <p>{errors.email?.message}</p>
                </div>
                &nbsp;
                &nbsp;
                <div className="col d-flex justify-content-center">
                    <button type="submit" onClick={samePassword}
                        className="btn btn-primary btn-block mb-4 justify-content-center">Recuperar contraseña</button>
                </div>
            </form>
        </div>
    );
};