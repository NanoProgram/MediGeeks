import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/cita_1.css";
import { Link } from "react-router-dom";
import { Doc_disponible } from "../component/doc_disponible.jsx";

export const Prueba = () => {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [specialities, setSpecialities] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [centros, setCentro] = useState([]);
  const [centerID, setCenterId] = useState([]);
  const [especialidadID, setEspecialidadID] = useState([]);
  const [docID, setDocID] = useState([]);
  const [hours, setHours] = useState([]);

  //---------------Centro Medico------------------
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://3001-nanoprogram-medigeeks-qieayu3bvm3.ws-us84.gitpod.io/api/mediGeeks/centers"
        );
        const data = await response.json();
        setCentro(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  const selectedCentro = (event) => {
    console.log(event.target.value);
    setCenterId(event.target.value);
  };
  //-------------Especialidad----------------
  useEffect(() => {
    setLoading(true);
    setLoading2(true);
    async function fetchData() {
      try {
        const response = await fetch(
          "https://3001-nanoprogram-medigeeks-qieayu3bvm3.ws-us84.gitpod.io/api/mediGeeks/appointments",
          {
            method: "GET",
          }
        );
        const data = await response.json();
        const espcialidades = data
          .filter((speciality_id) => speciality_id.center_id == centerID)
          .map((speciality) => speciality.speciality_id);
        console.log(espcialidades);
        const response2 = await fetch(
          "https://3001-nanoprogram-medigeeks-qieayu3bvm3.ws-us84.gitpod.io/api/mediGeeks/specialitys",
          {
            method: "GET",
          }
        );
        const data2 = await response2.json();
        const nombresEspecialidades = data2.filter((speciality) =>
          espcialidades.includes(speciality.id)
        );
        setSpecialities(nombresEspecialidades);
        console.log(nombresEspecialidades);
        console.log(centerID);
        setLoading(false);
        setLoading2(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [centerID]);
  const selectedEspecialidad = (event) => {
    console.log(event.target.value);
    setEspecialidadID(event.target.value);
  };

  //------------------Doctor------------------
  useEffect(() => {
    setLoading2(true);
    async function fetchData() {
      try {
        const response = await fetch(
          "https://3001-nanoprogram-medigeeks-qieayu3bvm3.ws-us84.gitpod.io/api/mediGeeks/appointments",
          {
            method: "GET",
          }
        );
        const data = await response.json();
        const doctores = data
          .filter(
            (appointment) =>
              appointment.center_id == centerID &&
              appointment.speciality_id == especialidadID
          )
          .map((appointment) => appointment.doctor_id);
        console.log(doctores);
        const response3 = await fetch(
          "https://3001-nanoprogram-medigeeks-qieayu3bvm3.ws-us84.gitpod.io/api/mediGeeks/doctors",
          {
            method: "GET",
          }
        );
        const data3 = await response3.json();
        const nombreDoctor = data3.filter((doctor) =>
          doctores.includes(doctor.id)
        );
        setDoctor(nombreDoctor);
        console.log(nombreDoctor);
        setLoading2(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [especialidadID]);

  const selectedDoc = (event) => {
    console.log(event.target.value);
    setDocID(event.target.value);
  };
  //------------Calendar--------------------
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://3001-nanoprogram-medigeeks-qieayu3bvm3.ws-us84.gitpod.io/api/mediGeeks/appointments",
          {
            method: "GET",
          }
        );
        const data = await response.json();
        const calendars = data
          .filter(
            (calendar) =>
              calendar.center_id == centerID &&
              calendar.speciality_id == especialidadID &&
              calendar.doctor_id == docID &&
              calendar.available == true
          )
          .map((calendar) => calendar.calendar_id);
        console.log(calendars);
        const response3 = await fetch(
          "https://3001-nanoprogram-medigeeks-qieayu3bvm3.ws-us84.gitpod.io/api/mediGeeks/calendar",
          {
            method: "GET",
          }
        );
        const data3 = await response3.json();
        const horasDisponibles = data3.filter((calendar) =>
          calendars.includes(calendar.id)
        );
        setHours(horasDisponibles);
        console.log(horasDisponibles);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [docID]);

  return (
    <div className="container-sm fondo p-2">
      <div className="text-center">
        <h1 className="center"> MediGeeks</h1>
        <h3> Toma de Hora</h3>
      </div>
      <div className="d-flex justify-content-center">
        <div className="m-3">
          <select
            className="form-select form-select-sm mb-3s m-1"
            aria-label=".form-select-sm example"
            style={{ width: "250px" }}
            onChange={selectedCentro}
          >
            <option selected>Centro Medico</option>
            {centros.map((centro) => (
              <option value={centro.id}>{centro.name}</option>
            ))}
          </select>
          {loading ? (
            <h6> Cargando...</h6>
          ) : (
            <select
              className="form-select form-select-sm mb-3s m-1"
              aria-label=".form-select-sm example"
              style={{ width: "250px" }}
              onChange={selectedEspecialidad}
            >
              <option selected>Especialidad</option>
              {specialities.map((speciality) => (
                <option value={speciality.id}>{speciality.name}</option>
              ))}
            </select>
          )}
          {loading2 ? (
            <h6> Cargando...</h6>
          ) : (
            <select
              className="form-select form-select-sm mb-3s m-1"
              aria-label=".form-select-sm example"
              style={{ width: "250px" }}
              onChange={selectedDoc}
            >
              <option selected>Doctor</option>
              {doctor.map((doctors) => (
                <option value={doctors.id}>{doctors.name}</option>
              ))}
            </select>
          )}
        </div>
      </div>
      <br />
      <h6>Mes</h6>
      <select
        className="form-select form-select-sm mb-3s m-1"
        aria-label=".form-select-sm example"
        style={{ width: "250px" }}
      >
        <option selected>Mes</option>
        {hours.map((hora) => (
          <option value={hora.id}>{hora.month}</option>
        ))}
      </select>
      <h6>Dia</h6>
      <select
        className="form-select form-select-sm mb-3s m-1"
        aria-label=".form-select-sm example"
        style={{ width: "250px" }}
      >
        <option selected>Dia</option>
        {hours.map((hora) => (
          <option value={hora.id}>{hora.day}</option>
        ))}
      </select>
      <h6>Hora</h6>
      <select
        className="form-select form-select-sm mb-3s m-1"
        aria-label=".form-select-sm example"
        style={{ width: "250px" }}
      >
        <option selected>Horas</option>
        {hours.map((hora) => (
          <option value={hora.id}>
            {hora.appointment_start_time}-{hora.appointment_end_time}
          </option>
        ))}
      </select>
      <br />
      <br />

      <div className="d-flex justify-content-between">
        <Link to="/home">
          <button className="btn btn-primary">Back To home</button>
        </Link>

        {/*<-- Button trigger modal -->*/}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Continuar
        </button>

        {/*<!-- Modal -->*/}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Confirmacion de hora
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Si desa confirmar la selecion porfavor{" "}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Atras
                </button>
                <button type="button" className="btn btn-primary">
                  Confirmar Hora
                </button>
              </div>
            </div>
          </div>
        </div>

        <Link to="/appointment-confirmed">
          <button className="btn btn-primary">Continue</button>
        </Link>
      </div>
    </div>
  );
};
