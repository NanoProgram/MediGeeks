import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/cita_1.css";
import { Link } from "react-router-dom";

export const Cita = () => {
  return (
    <div className="container ">
      <div className="text-center">
        <h1 className="center"> MediGeeks</h1>
        <h3> Toma de Hora</h3>
        <button type="button" className="btn btn-primary btn-lg m-2">
          Especialidad
        </button>
        <button type="button" className="btn btn-primary btn-lg m-2">
          Centro
        </button>
      </div>
      <div className="d-flex text-center">
        <div className="container-fluid d-grid gap-3 justify-content-center ">
          <select
            class="form-select form-select-sm mb-3s"
            aria-label=".form-select-sm example"
            style={{ width: "150px" }}
          >
            <option selected>Especialidad</option>
            <option value="1">Especialidad 1</option>
            <option value="2">Especialidad 2</option>
            <option value="3">Especialidad 3</option>
          </select>

          <select
            class="form-select form-select-sm mb-3s"
            aria-label=".form-select-sm example"
            style={{ width: "150px" }}
          >
            <option selected>Comuna</option>
            <option value="1">Comuna 1</option>
            <option value="2">Comuna 2</option>
            <option value="3">Comuna 3</option>
          </select>

          <select
            class="form-select form-select-sm mb-3s"
            aria-label=".form-select-sm example"
            style={{ width: "150px" }}
          >
            <option selected>Centro Medico</option>
            <option value="1">Centro Medico 1</option>
            <option value="2">Centro Medico 2</option>
            <option value="3">Centro Medico 3</option>
          </select>
        </div>

        <div className="container-fluid d-grid gap-3 justify-content-center">
          <select
            class="form-select form-select-sm mb-3s"
            aria-label=".form-select-sm example"
            style={{ width: "150px" }}
          >
            <option selected>Comuna</option>
            <option value="1">Comuna 1</option>
            <option value="2">Comuna 2</option>
            <option value="3">Comuna 3</option>
          </select>

          <select
            class="form-select form-select-sm mb-3s"
            aria-label=".form-select-sm example"
            style={{ width: "150px" }}
          >
            <option selected>Centro Medico</option>
            <option value="1">Centro Medico 1</option>
            <option value="2">Centro Medico 2</option>
            <option value="3">Centro Medico 3</option>
          </select>

          <select
            class="form-select form-select-sm mb-3s"
            aria-label=".form-select-sm example"
            style={{ width: "150px" }}
          >
            <option selected>Especialidad</option>
            <option value="1">Especialidad 1</option>
            <option value="2">Especialidad 2</option>
            <option value="3">Especialidad 3</option>
          </select>
        </div>
      </div>
      <br />
      <div className="d-flex justify-content-between">
        <Link to="/">
          <button className="btn btn-primary">Back To home</button>
        </Link>
        <Link to="/cita2">
          <button className="btn btn-primary">Continue</button>
        </Link>
      </div>
    </div>
  );
};
