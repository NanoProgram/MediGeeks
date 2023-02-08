import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/cita_1.css";
import { Link } from "react-router-dom";
import { Sidebar_doc } from "../component/Sidebar Doctors.jsx";
import { Footer } from "../component/footer.jsx";
import GoogleMaps from "simple-react-google-maps";

export const Cita3 = () => {
  const { store, actions } = useContext(Context);
  console.log(store.calendarID)
  console.log(store.dataIds)
  const doctor = [{"id" : "1", "name" : "Juan Toro", "speciality_id" : 1, "speciality_name" : "Pediatria"}, 
  {"id" : "2", "name" : "Roberto Toro", "speciality_id" : 1, "speciality_name" : "Pediatria"},
  {"id" : "3", "name" : "Carlos Toro", "speciality_id" : 2, "speciality_name" : "Medicina General"}, 
  {"id" : "4", "name" : "Nicolas Toro", "speciality_id" : 2, "speciality_name" : "Medicina General"}];
  const center = [{"id":"1", "name":"VidaMas", "lat" : -33.4248113, "lon" : -70.6128167 },{"id":"2", "name":"Red Salud", "lat" : -33.5119711, "lon" : -70.75801}];
  const hora = [{"id":"1", "start":"15:00"},{"id":"2", "start":"12:00"},
  {"id":"3", "start":"11:00"},{"id":"4", "start":"17:00"},
  {"id":"5", "start":"15:00"},{"id":"6", "start":"14:00"},
  {"id":"7", "start":"11:00"},{"id":"8", "start":"09:00"}];


  return (
    <div className="container fondo p-2" style={{ backgroundColor: "#d6eef7" }}>
      <Sidebar_doc />
      <div className="container d-flex justify-content-center">
        <div className="card border-primary mb-3" style={{ width: "18rem" }}>
          <div className="card-header">Hora Agendada</div>
          <div className="card-body text-primary">
            <h5 className="card-title"> Recuerda llegar con 15 min de anticipación</h5>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <GoogleMaps
          apiKey={"AIzaSyB-zFY4ZH0nkE8BZiRH94iFGWJyFgK1MPg"}
          style={{ height: "500px", width: "500px" }}
          zoom={15}
          center={{
            lat: -33.4104594,
            lng: -70.568482,
          }}
        />
      </div>

      <Link to="/home">
        <button className="btn btn-primary">Finalizar</button>
      </Link>
      <Footer />
    </div>
  );
};
