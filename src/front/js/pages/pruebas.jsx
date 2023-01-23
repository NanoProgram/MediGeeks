import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/cita_1.css";
import { Link } from "react-router-dom";
import { Doc_disponible } from "../component/doc_disponible.jsx";

export const Prueba = () => {
  const [comuna1, setComuna1] = useState([]);

  const comunaSelection = async (date) => {
    const comunas = await fetchComuna1();
    setComuna1(comunas);
    console.log(comunas);
  };

  const fetchComuna1 = async () => {
    // Aquí podrías hacer una petición a una base de datos para obtener los rangos horarios disponibles para la fecha seleccionada
    // Utilizando el paquete fetch o cualquier otro para hacer peticiones HTTP
    // Ejemplo: const response = await fetch(`/api/timeslots?date=${date}`);
    //const timeSlots = await response.json();
    //return timeSlots;
    return ["Peña", "Santiago", "Maipu"];
  };

  const handleComunaSelection = (event) => {
    const comunaSeleccionada = event.target.value;
    console.log(`Comuna seleccionada: ${comunaSeleccionada}`);
    // Aquí podrías utilizar la comuna seleccionada para hacer una petición a la API
    //o base de datos para obtener los centros médicos disponibles en esa comuna.
  };

  return (
    <div className="container fondo p-2">
      <div className="text-center">
        <h1 className="center"> MediGeeks</h1>
        <h3> Toma de Hora</h3>
      </div>
      <div className="d-flex justify-content-center">
        <div className="m-3">
          <select
            class="form-select form-select-sm mb-3s m-1"
            aria-label=".form-select-sm example"
            style={{ width: "150px" }}
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
            onChange={handleComunaSelection}
            onClick={comunaSelection}
          >
            <option selected>Comuna</option>
            {comuna1.map((comunas) => (
              <option value={comunas.id} key={comunas.id}>
                {comunas}
              </option>
            ))}
          </select>

          <select
            class="form-select form-select-sm mb-3s m-1"
            aria-label=".form-select-sm example"
            style={{ width: "150px" }}
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
