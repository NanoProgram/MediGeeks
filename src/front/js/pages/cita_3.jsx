import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/cita_1.css";
import { Link } from "react-router-dom";

export const Cita3 = () => {
  return (
    <div className="container fondo p-2">
      <div className="container d-flex justify-content-center">
        <div className="card border-primary mb-3" style={{ width: "18rem" }}>
          <div className="card-header">Hora agendada</div>
          <div className="card-body text-primary">
            <h5 className="card-title">Rango de Hora</h5>
            <p className="card-text">
              Recuerda llegar con anticipacion, tu codigo de confirmacion:
              asd545A
            </p>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <img
          src="https://nz.rs-cdn.com/images/nwszh-7ob16/blog/efd2c6c3f83c9987f8ff3669c2e602bb__7132/zoom668x511z100000cw668.png?etag=748c81bfdc8f69f870be957ba8f22fde"
          className="img-thumbnail"
          alt=""
        />
      </div>

      <Link to="/home">
        <button className="btn btn-primary">Finalizar</button>
      </Link>
    </div>
  );
};
