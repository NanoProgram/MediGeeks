import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/cita_1.css";
import { Link } from "react-router-dom";

export const Cita = () => {
  return (
    <div className="container ">
      <div className="container p-3 text-center">
        <h1 className="center"> MediGeeks</h1>
        <h2> Toma de Hora</h2>
        <button type="button" className="btn btn-primary btn-lg m-2">Especialidad</button>
        <button type="button" className="btn btn-primary btn-lg m-2">Centro</button>
      </div>
      <div className="d-flex text-center">
        <div className="container-fluid d-grid gap-3">
          <div className="dropdown ">
            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Especialidad</button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Especialidad1</a></li>
              <li><a className="dropdown-item" href="#">Especialidad2</a></li>
              <li><a className="dropdown-item" href="#">Especialidad3</a></li>
              <li><a className="dropdown-item" href="#">Especialidad4</a></li>
            </ul>
          </div>

          <div className="dropdown">
            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Comuna</button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Comuna1</a></li>
              <li><a className="dropdown-item" href="#">Comuna2</a></li>
              <li><a className="dropdown-item" href="#">Comuna3</a></li>
              <li><a className="dropdown-item" href="#">Comuna4</a></li>
            </ul>
          </div>

          <div className="dropdown">
            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Centro Medico</button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Centro1</a></li>
              <li><a className="dropdown-item" href="#">Centro2</a></li>
              <li><a className="dropdown-item" href="#">Centro3</a></li>
              <li><a className="dropdown-item" href="#">Centro4</a></li>
            </ul>
          </div>
        </div>
       

        <div className="container-fluid d-grid gap-3">
          <div className="dropdown">
            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Comuna</button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Comuna1</a></li>
              <li><a className="dropdown-item" href="#">Comuna2</a></li>
              <li><a className="dropdown-item" href="#">Comuna3</a></li>
              <li><a className="dropdown-item" href="#">Comuna4</a></li>
            </ul>
          </div>

          <div className="dropdown">
            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Centro Medico</button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Centro1</a></li>
              <li><a className="dropdown-item" href="#">Centro2</a></li>
              <li><a className="dropdown-item" href="#">Centro3</a></li>
              <li><a className="dropdown-item" href="#">Centro4</a></li>
            </ul>
          </div>

          <div className="dropdown">
            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Especialidad</button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Especialidad1</a></li>
              <li><a className="dropdown-item" href="#">Especialidad2</a></li>
              <li><a className="dropdown-item" href="#">Especialidad3</a></li>
              <li><a className="dropdown-item" href="#">Especialidad4</a></li>
            </ul>
          </div>
        </div>
      </div>

      <Link to="/cita2">
        <button className="btn btn-primary">Continue</button>
      </Link>
      <Link to="/">
        <button className="btn btn-primary">Back To home</button>
      </Link>
    </div>
  );
};
