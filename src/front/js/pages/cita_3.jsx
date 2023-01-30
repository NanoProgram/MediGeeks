import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/cita_1.css";
import { Link } from "react-router-dom";
import { Sidebar_doc } from "../component/Sidebar Doctors.jsx";
import { Footer } from "../component/footer.jsx";
import GoogleMaps from "simple-react-google-maps";

export const Cita3 = () => {
  return (
    <div className="container fondo p-2" style={{ backgroundColor: "#d6eef7" }}>
      <Sidebar_doc />
      <div className="container d-flex justify-content-center">
        <div className="card border-primary mb-3" style={{ width: "18rem" }}>
          <div className="card-header">Hora agendada</div>
          <div className="card-body text-primary">
            <h5 className="card-title">Rango de Hora</h5>
            <p className="card-text">
              Recuerda llegar con anticipacion, tu codigo de confirmacion:
              asd545A
            </p>
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
