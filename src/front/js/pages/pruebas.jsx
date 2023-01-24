import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/cita_1.css";
import { Link } from "react-router-dom";
import { Doc_disponible } from "../component/doc_disponible.jsx";

export const Prueba = () => {
  const [specialities, setSpecialities] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://3001-nanoprogram-medigeeks-mww1bt06jmk.ws-us83.gitpod.io/api/mediGeeks/specialitys"
        );
        const data = await response.json();
        setSpecialities(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="container fondo p-2">
      <div className="text-center">
        <h1 className="center"> MediGeeks</h1>
        <h3> Toma de Hora</h3>
      </div>
      <div className="d-flex justify-content-center">
        <div className="m-3">
          <select
            className="form-select form-select-sm mb-3s m-1"
            aria-label=".form-select-sm example"
            style={{ width: "150px" }}
          >
            <option selected>Especialidad</option>
            {specialities.map((speciality) => (
              <option value={speciality.id}>{speciality.name}</option>
            ))}
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
