import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/cita_1.css";
import { Link } from "react-router-dom";
import { Doc_disponible } from "../component/doc_disponible.jsx";

export const Cita = () => {
  const [disableEspecialidad, setDisableEspecialidad] = useState(true);
  const [centroDisable, setCentroDisable] = useState(true);

  const EspecialidadClick = () => {
    setDisableEspecialidad(!disableEspecialidad);
    setCentroDisable(true);
  };

  const CentroClick = () => {
    setDisableEspecialidad(true);
    setCentroDisable(!centroDisable);
  };

  return (
    <div className="container fondo p-2">
      <div className="text-center">
        <h1 className="center"> MediGeeks</h1>
        <h3> Toma de Hora</h3>
        <button
          type="button"
          className="btn btn-primary btn-lg m-2"
          onClick={EspecialidadClick}
        >
          Especialidad
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg m-2"
          onClick={CentroClick}
        >
          Centro
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <div
          className="m-3"
          style={{ display: !centroDisable ? "none" : "block" }}
        >
          <select
            class="form-select form-select-sm mb-3s m-1"
            aria-label=".form-select-sm example"
            style={{ width: "150px" }}
            disabled={disableEspecialidad}
          >
            <option selected>Especialidad</option>
            <option value="1">Especialidad 1</option>
            <option value="2">Especialidad 2</option>
            <option value="3">Especialidad 3</option>
          </select>

          <select
            class="form-select form-select-sm mb-3s m-1"
            aria-label=".form-select-sm example"
            style={{ width: "150px" }}
            disabled={disableEspecialidad}
          >
            <option selected>Comuna</option>
            <option value="1">Comuna 1</option>
            <option value="2">Comuna 2</option>
            <option value="3">Comuna 3</option>
          </select>

          <select
            class="form-select form-select-sm mb-3s m-1"
            aria-label=".form-select-sm example"
            style={{ width: "150px" }}
            disabled={disableEspecialidad}
          >
            <option selected>Centro Medico</option>
            <option value="1">Centro Medico 1</option>
            <option value="2">Centro Medico 2</option>
            <option value="3">Centro Medico 3</option>
          </select>
          <select
            class="form-select form-select-sm mb-3s m-1"
            aria-label=".form-select-sm example"
            style={{ width: "150px" }}
            disabled={disableEspecialidad}
          >
            <option selected>Doc</option>
            <option value="1">Doc1</option>
            <option value="2">Doc2</option>
            <option value="3">Doc3</option>
          </select>
        </div>

        <div
          className="m-3 "
          style={{ display: !disableEspecialidad ? "none" : "block" }}
        >
          <select
            class="form-select form-select-sm mb-3s m-1"
            aria-label=".form-select-sm example"
            style={{ width: "150px" }}
            disabled={centroDisable}
          >
            <option selected>Comuna</option>
            <option value="1">Comuna 1</option>
            <option value="2">Comuna 2</option>
            <option value="3">Comuna 3</option>
          </select>

          <select
            class="form-select form-select-sm mb-3s m-1"
            aria-label=".form-select-sm example"
            style={{ width: "150px" }}
            disabled={centroDisable}
          >
            <option selected>Centro Medico</option>
            <option value="1">Centro Medico 1</option>
            <option value="2">Centro Medico 2</option>
            <option value="3">Centro Medico 3</option>
          </select>

          <select
            class="form-select form-select-sm mb-3s m-1"
            aria-label=".form-select-sm example"
            style={{ width: "150px" }}
            disabled={centroDisable}
            s
          >
            <option selected>Especialidad</option>
            <option value="1">Especialidad 1</option>
            <option value="2">Especialidad 2</option>
            <option value="3">Especialidad 3</option>
          </select>
          <select
            class="form-select form-select-sm mb-3s m-1"
            aria-label=".form-select-sm example"
            style={{ width: "150px" }}
            disabled={centroDisable}
          >
            <option selected>Doc</option>
            <option value="1">Doc1</option>
            <option value="2">Doc2</option>
            <option value="3">Doc3</option>
          </select>
        </div>
      </div>
      <br />
      <Doc_disponible />
      <div className="d-flex justify-content-between">
        <Link to="/home">
          <button className="btn btn-primary">Back To home</button>
        </Link>
        <Link to="/appointment-confirmed">
          <button className="btn btn-primary">Continue</button>
        </Link>
      </div>
    </div>
  );
};
