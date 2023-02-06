import "../../styles/example.css";
import { Link, useNavigate } from "react-router-dom";
import Medigeeks_Logo from "../../img/Medigeeks_Logo.jpg"
import { useForm } from "react-hook-form";
import React, { useContext, useState } from "react";

export const Validate = () => {

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
        "https://3001-nanoprogram-medigeeks-mww1bt06jmk.ws-us85.gitpod.io/api/mediGeeks/users",
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
      to_link: "www.google.cl",
    };
    sendEmail(params);
  };


  return (
    <div className="background-image">
      <div className="login position-absolute top-50 start-50 translate-middle">
        <form
          autoComplete="off"
          onSubmit={handleSubmit(submitBack)}
          style={{ opacity: 0.8 }}
        >
          <div className="logo d-flex justify-content-center">
            <img src={Medigeeks_Logo} />
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="col d-flex justify-content-center">
            <input type="submit" value="Validar" class="btn btn-primary rounded-pill" style={{
        padding: "30px 60px", 
        fontSize: "18px"
      }}/>
          </div>
        </form>
      </div>
    </div>
  );
};