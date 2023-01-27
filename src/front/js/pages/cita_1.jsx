import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/cita_1.css";
import { Link } from "react-router-dom";
import { Doc_disponible } from "../component/doc_disponible.jsx";
import { Sidebar_doc } from "../component/Sidebar Doctors.jsx";
import { Footer } from "../component/footer.jsx";

export const Cita = () => {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [specialities, setSpecialities] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [centros, setCentro] = useState([]);
  const [centerID, setCenterId] = useState([]);
  const [especialidadID, setEspecialidadID] = useState([]);
  const [docID, setDocID] = useState([]);
  const [hours, setHours] = useState([]);
  const [calendarID, setCalendarID] = useState([]);

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
  const selectHora = (event) => {
    console.log(event.target.value);
    setCalendarID(event.target.value);
  };
  const saveData = async (selecthoraID) => {
    const user_id = "USER PROBANDO";
    const available = false;
    const data = { user_id, available };
    try {
      const response = await fetch(
        `https://3001-nanoprogram-medigeeks-qieayu3bvm3.ws-us84.gitpod.io/api/mediGeeks/appointments${selecthoraID}`,
        {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container-sm fondo p-2" style={{backgroundColor: "#d6eef7"}}>
     <Sidebar_doc/>
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

          <br />

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
          <select
            className="form-select form-select-sm mb-3s m-1"
            aria-label=".form-select-sm example"
            style={{ width: "250px" }}
            onChange={selectHora}
          >
            <option selected>Horas</option>
            {hours.map((hora) => (
              <option value={hora.id}>
                {hora.appointment_start_time}-{hora.appointment_end_time}
              </option>
            ))}
          </select>
        </div>
      </div>
      <br />
      <br />

      <div className="d-flex justify-content-between">
        <Link to="/home">
          <button className="btn btn-primary">Back To home</button>
        </Link>

        <Link to="/appointment-confirmed">
          <button className="btn btn-primary" onClick={saveData}>
            Continue
          </button>
        </Link>
      </div>
      <Footer/>
    </div>
  );
};
