import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/calendardoc.css";
import { Calendar } from "./Calendar.jsx";
import { MedicalCenter } from "../component/Medical Center.jsx";
import { Month } from "../component/Month.jsx";
import { Hours } from "../component/Hours.jsx";
import { Link } from "react-router-dom";

export const Appointment = () => {
  return (
    <div className="container container-center">
      <MedicalCenter position= "position-absolute top-0 start-10"/>
      <Month position= "position-absolute top-0 start-50 border border-dark"/>
      <Hours position= "position-absolute top-50 start-50 translate-middle"/>
    </div>
  );
};
