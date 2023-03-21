import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/example.css";
import { Link, useNavigate } from "react-router-dom";
import Medigeeks_Logo from "../../img/Medigeeks_Logo.jpg";
import { useForm } from "react-hook-form";
import { sendEmail } from "../service/emailService";
import { Modal } from "bootstrap";

export const Singup = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });
  const [user, setUser] = useState({});

  function samePassword() {
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;
    if (password != confirm_password) {
      alert("Las contraseñas no coinciden");
    }
  }

  const submitBack = async (input) => {
    try {
      console.log(input);
      const res = await fetch(
        "https://3001-nanoprogram-medigeeks-qieayu3bvm3.ws-us89b.gitpod.io/api/mediGeeks/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(input),
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.email) {
        verify(input);
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    console.log(JSON.stringify(input));
  };

  const verify = (data) => {
    let params = {
      to_email: data.email,
      to_name: data.name,
      to_link: 'https://3001-nanoprogram-medigeeks-qieayu3bvm3.ws-us89b.gitpod.io/api/mediGeeks/users',
    };
    sendEmail(params);
  };

  return (
    <div className="background-image">
      <div className="login position-absolute top-50 start-50 translate-middle container-md">
        <form
          autoComplete="off"
          onSubmit={handleSubmit(submitBack)}
          style={{ opacity: 0.8 }}
        >
          <div className="logo d-flex justify-content-center">
            <img src={Medigeeks_Logo} />
          </div>
          &nbsp;
          <div className="form-outline mb-4 ">
            <input
              {...register("name", {
                required: "Se requiere nombre y apellido",
                pattern: {
                  value:
                    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
                  message: "Nombre no es valido",
                },
              })}
              placeholder="Nombre Apellido"
              type="userName"
              id="form2Example10"
              class="form-control text-center"
            />
            <p style={{ color: "red" }}>{errors.name?.message}</p>
          </div>
          <div className="form-outline mb-4">
            <input
              {...register("rut", {
                required: "Se requiere RUT",
                pattern: {
                  value: /\b[0-9|.]{1,10}\-[K|k|0-9]/,
                  message: "Rut no es valido",
                },
              })}
              placeholder="R.U.T."
              type=""
              id="form2Example20"
              className="form-control text-center"
            />
            <p style={{ color: "red" }}>{errors.rut?.message}</p>
          </div>
          <div className="form-outline mb-4">
            <select
              {...register("prevision_id", {
                required: "Selecione una prevision",
              })}
              className="form-select form-select-sm mb-3s text-center"
              aria-label=".form-select-sm example"
            >
              <option selected>Prevision</option>
              <option value="1">Fonasa</option>
              <option value="2">Banmedica</option>
              <option value="3">Cruz Blanca</option>
              <option value="4">Masvida</option>
              <option value="5">Colmena</option>
            </select>
            <p style={{ color: "red" }}>{errors.prevision?.message}</p>
          </div>
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
              placeholder="Email"
              type=""
              id="form2Example30"
              className="form-control text-center"
            />
            <p style={{ color: "red" }}>{errors.email?.message}</p>
          </div>
          <div className="form-outline mb-4">
            <input
              {...register("password", {
                required: "se requiere contraseña",
                pattern: {
                  value:
                    /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                  message:
                    "La contraseña debe contener al menos 6 caracteres, una mayúscula, una minúscula, un número y un carácter de caso especial",
                },
              })}
              placeholder="Contraseña"
              type="password"
              id="password"
              className="form-control text-center"
            />
            <p style={{ color: "red" }}>{errors.password?.message}</p>
          </div>
          <div className="form-outline mb-4">
            <input
              onBlur={samePassword}
              placeholder="Confirme Contraseña"
              type="password"
              id="confirm_password"
              className="form-control text-center"
            />
          </div>
          <div className="col d-flex justify-content-center">
            <input
              type="submit"
              value="registrarse"
              class="btn btn-primary rounded-pill"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
