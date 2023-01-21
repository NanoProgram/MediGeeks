import React, { useContext ,useState} from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import "../../styles/general.css";
import { Link } from "react-router-dom";
import { sendEmail } from "../service/emailService";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserDoctor,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";


export const Home = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({
    email: "mail@mail.com",
    name: "Jhon Doe",
  });
  const [link, setLink] = useState("www.google.com");

  return (
    <div className="container text-center border p-1 fondo">
      <div className="text-center mt-5">
        <h1>MediGeeks</h1>
      </div>
      <div className="row justify-content-center g-2 ">
        <div className="col-4 ">
          <Link to="/cita">
            <div className="border  p-2   border-5 rounded-3" id="esp_11">
              <FontAwesomeIcon icon={faUserDoctor} size="5x" />
              <h4>Reserva de Hora</h4>
            </div>
          </Link>
        </div>
        <div className="col-4">
          <Link to="/appointment">
            <div className="border  p-2   border-5 rounded-3" id="esp_11">
              <FontAwesomeIcon icon={faCalendarDays} size="5x" />
              <h4>Doc</h4>
            </div>
          </Link>
        </div>
        {/* 
        <div className="col-4">
          <div className="border  p-2   border-5 rounded-3" id="esp_13">
            <p>espacio 3</p>
          </div>
        </div>
        <div className="col-4 ">
          <div className="border  p-2   border-5 rounded-3" id="esp_21">
            <p>espacio 4</p>
          </div>
        </div>
        <div className="col-8 ">
          <div className="border  p-2   border-5 rounded-3" id="esp_22">
            <p>espacio 5</p>
          </div>
        </div>*/}
      </div>
    </div>
  );
  const verify = (_) => {
    if (email.localeCompare(user.email) != 0) throw Error("Invalid Email");
    let params = {
      to_email: user.email,
      to_name: user.name,
      to_link: link,
    };
    sendEmail(params);
  };

  return (
    <div className="text-center mt-5">
      <input
        title="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={verify}>Verify email</button>
    </div>
  );
};
