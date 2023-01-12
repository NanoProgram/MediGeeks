import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/cita_1.css";
import { Link } from "react-router-dom";

export const Cita3 = () => {
  return (

    <div className="container">
        <div className="container">
            <div className="card border-primary mb-3" style={{ width: '18rem' }}>
            <div className="card-header">Hora agendada</div>
            <div className="card-body text-primary">
            <h5 className="card-title">Rango de Hora</h5>
            <p className="card-text">Recuerda llegar con anticipacion, tu codigo de confirmacion: asd545A</p>
            </div>
            </div>
        </div>

        <div>
            <h1> AQUI VA EL MAPA </h1>
        </div>





        <Link to="/">
            <button className="btn btn-primary">Finalizar</button>
        </Link>
        <Link to="/">
            <button className="btn btn-primary">Back To home</button>
        </Link>
    </div>
  );
};