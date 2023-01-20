import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserDoctor,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="ripple-background circle.xxlarge.shade1">
      <div className="container text-center border p-1 fondo ">
        <div className="text-center mt-5">
          <h1>MediGeeks</h1>
        </div>
        <div className="row justify-content-center g-2 ">
          <div className="col-4  ">
            <Link to="/appointment">
              <button type="button" className=" shadow btn btn-outline-primary">
                <div className=" p-2  rounded-3" id="esp_11">
                  <FontAwesomeIcon icon={faUserDoctor} size="5x" />
                  <h4>Reserva de Hora</h4>
                </div>
              </button>
            </Link>
          </div>

          <div className="col-4  ">
            <Link to="/doctor">
              <button
                type="button"
                className=" shadow btn btn-outline-secondary"
              >
                <div className="   p-2  rounded-3" id="esp_11">
                  <FontAwesomeIcon icon={faCalendarDays} size="5x" />
                  <h4>Consulta de hora</h4>
                </div>
              </button>
            </Link>
          </div>

          <div className="col-4  ">
            <Link to="/appointment">
              <button type="button" className=" shadow btn btn-outline-primary">
                <div className=" p-2  rounded-3" id="esp_11">
                  <FontAwesomeIcon icon={faUserDoctor} size="5x" />
                  <h4>Anular hora</h4>
                </div>
              </button>
            </Link>
          </div>

          <div className="col-4 ">
            <div className="border  p-2   border-5 rounded-3" id="esp_21">
              <FontAwesomeIcon icon={faCalendarDays} size="5x" />
              <h4>Proximamente</h4>
            </div>
          </div>

          <div className="col-8 ">
            <div className="border  p-2   border-5 rounded-3" id="esp_22">
              <i class="bi bi-capsule"></i>
              <p>espacio 5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
