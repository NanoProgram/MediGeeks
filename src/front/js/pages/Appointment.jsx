import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/calendardoc.css";
import { Calendardoc } from "./Calendardoc.jsx";
import { MedicalCenter } from "../component/Medical Center.jsx";
import { Month } from "../component/Month.jsx";
import { Hours } from "../component/Hours.jsx";
import { Link } from "react-router-dom";
import Calendar from 'react-calendar';
import DatePicker from 'react-date-picker'
import { Cita2 } from "./cita_2.jsx";

export const Appointment = () => {


  return (
    <div className="container container-center" >
      <Cita2 />
      <div className="d-flex justify-content-end">
        <Link to="/">
          <button className="btn btn-primary rounded-pill">Finalizar</button>
        </Link>
        </div>
    </div>
  );
};
