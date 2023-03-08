import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/cita_1.css";
import { Link } from "react-router-dom";
import { Sidebar_doc } from "../component/Sidebar Doctors.jsx";
import { Footer } from "../component/footer.jsx";


export const Cita = () => {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const [specialities, setSpecialities] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [centros, setCentro] = useState([]);
  const [centerID, setCenterId] = useState([]);
  const [especialidadID, setEspecialidadID] = useState([]);
  const [docID, setDocID] = useState([]);
  const [hours, setHours] = useState([]);
  const [calendarID, setCalendarID] = useState(null);
  const { store, actions } = useContext(Context);
  const uniqueDays = [...new Set(hours.map((item) => item.day))];
  const uniqueMonths = [...new Set(hours.map((item) => item.month))];






  //---------------Consulta Centro Medico------------------
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://3001-nanoprogram-medigeeks-qieayu3bvm3.ws-us89b.gitpod.io/api/mediGeeks/centers",
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
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
  //-------------Consulta Especialidad del centro----------------
  useEffect(() => {
    setLoading(true);
    setLoading2(true);
    async function fetchData() {
      try {
        const response = await fetch(
          "https://3001-nanoprogram-medigeeks-qieayu3bvm3.ws-us89b.gitpod.io/api/mediGeeks/appointments",
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        const data = await response.json();
        const espcialidades = data
          .filter((speciality_id) => speciality_id.center_id == centerID)
          .map((speciality) => speciality.speciality_id);
        console.log(espcialidades);
        const response2 = await fetch(
          "https://3001-nanoprogram-medigeeks-qieayu3bvm3.ws-us89b.gitpod.io/api/mediGeeks/specialitys",
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
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

  //------------------Consulta Doctor del Centro de la Especialidad------------------
  useEffect(() => {
    setLoading2(true);
    async function fetchData() {
      try {
        const response = await fetch(
          "https://3001-nanoprogram-medigeeks-qieayu3bvm3.ws-us89b.gitpod.io/api/mediGeeks/appointments",
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
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
          "https://3001-nanoprogram-medigeeks-qieayu3bvm3.ws-us89b.gitpod.io/api/mediGeeks/doctors",
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
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
  //------------Consulta del Calendario para le doc seleccionado--------------------
  useEffect(() => {
    setLoading3(true);
    async function fetchData() {
      try {
        const response = await fetch(
          "https://3001-nanoprogram-medigeeks-qieayu3bvm3.ws-us89b.gitpod.io/api/mediGeeks/appointments",
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
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
          "https://3001-nanoprogram-medigeeks-qieayu3bvm3.ws-us89b.gitpod.io/api/mediGeeks/calendar",
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        const data3 = await response3.json();
        const horasDisponibles = data3.filter((calendar) =>
          calendars.includes(calendar.id)
        );
        setHours(horasDisponibles);
        console.log(horasDisponibles);
        setLoading3(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [docID]);

  const selectHora = (event) => {
    setCalendarID(event.target.value);
  };

  useEffect(() => {
    if (calendarID) {
      const parsedCenterID = parseInt(centerID);
      const parsedEspecialidadID = parseInt(especialidadID);
      const parsedCalendarID = parseInt(calendarID);
      const nuevoObjeto = {
        doctor: doctor.find(function (usuario) {
          return usuario.id === docID;
        }).name,
        centro: centros.find(function (usuario) {
          return usuario.id === parsedCenterID;
        }).name,
        especialidad: specialities.find(function (usuario) {
          return usuario.id === parsedEspecialidadID;
        }).name,
        hora: hours.find(function (usuario) {
          return usuario.id === parsedCalendarID;
        }).appointment_start_time,
        dia: hours.find(function (usuario) {
          return usuario.id === parsedCalendarID;
        }).day,
        mes: hours.find(function (usuario) {
          return usuario.id === parsedCalendarID;
        }).month,
        lat: centros.find(function (usuario) {
          return usuario.id === parsedCenterID;
        }).lat,
        lng: centros.find(function (usuario) {
          return usuario.id === parsedCenterID;
        }).lng
      };
      console.log(nuevoObjeto);
      actions.setComprobante(nuevoObjeto);
      localStorage.setItem('comprobante', JSON.stringify(nuevoObjeto));
    }
  }, [calendarID]);


  //---------------- PUT para la Hora medica---------------------
  const saveData = async () => {
    const user_id = localStorage.getItem("user_id");
    const available = false;
    const data = { user_id, available };
    await actions.saveData(calendarID);
    await actions.center(calendarID);


    /*try {
      const response = await fetch(
        `https://3001-nanoprogram-medigeeks-mww1bt06jmk.ws-us89b.gitpod.io/api/mediGeeks/appointments/${calendarID}`,
        {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error("Error:", error);
    }*/
  };

  return (
    <div
      className="container-sm fondo p-2"
      style={{ backgroundColor: "#d6eef7" }}
    >
      <Sidebar_doc />
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

          {loading3 ? (
            <h6> Cargando...</h6>
          ) : (
            <select
              className="form-select form-select-sm mb-3s m-1"
              aria-label=".form-select-sm example"
              style={{ width: "250px" }}
            >
              <option selected>Mes</option>
              {uniqueMonths.map((month) => (
                <option value={month}>{month}</option>
              ))}
            </select>
          )}

          {loading3 ? (
            <h6> Cargando...</h6>
          ) : (
            <select
              className="form-select form-select-sm mb-3s m-1"
              aria-label=".form-select-sm example"
              style={{ width: "250px" }}
            >
              <option selected>Día</option>
              {uniqueDays.map((day) => (
                <option value={day}>{day}</option>
              ))}
            </select>
          )}

          {loading3 ? (
            <h6> Cargando...</h6>
          ) : (
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
          )}
        </div>
      </div>
      <br />
      <br />

      <div className="d-flex justify-content-between">
        <Link to="/home">
          <button className="btn btn-primary rounded-pill">Back To home</button>
        </Link>

        <Link to="/appointment-confirmed">
          <button className="btn btn-primary rounded-pill" onClick={saveData}>
            Continue
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};
