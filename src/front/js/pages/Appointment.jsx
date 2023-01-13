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

export const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="container container-center">
      <div className="row justify-content-center g-2 ">
      <div className="col-6 ">
        <MedicalCenter />
      </div>
      <div className="col-6 ">
      <Calendar value={date} onChange={setDate}/>
      </div>


      </div>

      <Hours />
      
      <div className="container">
        <Link to="/">
          <button className="btn btn-primary">Finalizar</button>
        </Link>
        </div>
    </div>
  );
};
