import "../../styles/example.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Medigeeks_Logo from "../../img/Medigeeks_Logo.jpg";
import { useForm } from "react-hook-form";
import React, { useContext, useState, useEffect} from "react";

export const Forgot = () => {
  const navigate = useNavigate();
  const {id} = useParams()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });
  const [user, setUser] = useState({});
  const [show, setShow] = useState(false);

  const validateUser = async () =>  {
    console.log(id)
    const res = await fetch(
      "https://3001-nanoprogram-medigeeks-mww1bt06jmk.ws-us85.gitpod.io/api/mediGeeks/users/validate/" + id,
      
    );
    const data = await res.json();
    if (data.validate) setShow(true) 

  }

  useEffect(() => {
    if (id != null) validateUser()
  }, []);

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
          {show ? <div class="form-outline mb-4">
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
          </div>: <div></div>}
          { show ? <div class="form-outline mb-4">
            <input
              onBlur={samePassword}
              placeholder="Confirme Contraseña"
              type="password"
              id="confirm_password"
              className="form-control text-center"
            />
          </div>: <div></div>}
          {show ? <div className="col d-flex justify-content-center">
            <input
              type="submit"
              value="Confirmar"
              class="btn btn-primary rounded-pill"
            />
          </div>: <div></div>}
        </form>
      </div>
    </div>
  );
};
