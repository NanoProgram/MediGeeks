import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/sidebar.css";
import { Link } from "react-router-dom";
import Medigeeks_Logo from "../../img/Medigeeks_Logo.jpg";

export const Sidebar_doc = () => {
  return (
    <>
      <button
        className="btn btn-warning rounded-pill"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        <strong>Menu</strong>
      </button>

      <div
        className="offcanvas offcanvas-start side"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <img src={Medigeeks_Logo} />
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body ">
          <div className="d-flex justify-content-center ">
            <Link to="/home">
              <button type="button" className="btn btn-danger button ">
                Home
              </button>
            </Link>
          </div>
          <div className="d-flex justify-content-center">
            <Link to="/appointment">
              <button type="button" className="btn btn-danger button">
                Reserva Hora
              </button>
            </Link>
          </div>
          <div className="d-flex justify-content-center">
            <Link to="/doctor">
              <button type="button" className="btn btn-danger button">
                Calendario Interno
              </button>
            </Link>
          </div>
          <div className="d-flex justify-content-center">
            <Link to="/">
              <button type="button" className="btn btn-danger button">
                Cerrar Sesión
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
