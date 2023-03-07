import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/example.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import Medigeeks_Logo from "../../img/Medigeeks_Logo.jpg";
import { useForm } from "react-hook-form";
import { sendEmail } from "../service/emailService";

export const Recover = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });
  const navigate = useNavigate();

  const validateEmail = async (input) => {
    console.log(input);
    const res = await fetch(
      "https://3001-nanoprogram-medigeeks-qieayu3bvm3.ws-us86.gitpod.io/api/mediGeeks/search/users/" +
        input.email
    );
    const data = await res.json();
    console.log(data);
    if (data.email) {
      verify(data);
      navigate("/");
    } else {
      alert(data.message);
    }
  };

  const verify = (data) => {
    let params = {
      to_email: data.email,
      to_name: data.name,
      to_link:
        "https://3000-nanoprogram-medigeeks-qieayu3bvm3.ws-us86.gitpod.io/forgot/" +
        data.id,
    };
    sendEmail(params);
  };

  return (
    <div className="background-image">
      <div className="login position-absolute top-50 start-50 translate-middle">
        <form autoComplete="off" onSubmit={handleSubmit(validateEmail)}>
          <div className="logo d-flex justify-content-center">
            <img src={Medigeeks_Logo} />
          </div>
          &nbsp;
          <div className="col d-flex justify-content-center">
            <h3>¿Olvidaste tu contraseña?</h3>
          </div>
          &nbsp; &nbsp;
          <div className="form-outline mb-4">
            <input
              {...register("email", {
                required: "correo electronico es requerido",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "El email debe ser válido",
                },
              })}
              placeholder="Escribe tu Email"
              type=""
              id="email"
              className="form-control"
            />
            <p style={{ color: "red" }}>{errors.email?.message}</p>
          </div>
          &nbsp; &nbsp;
          <div className="col d-flex justify-content-center">
            <input
              type="submit"
              className="btn btn-primary btn-block mb-4 justify-content-center rounded-pill"
              value="Recuperar Contraseña"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
