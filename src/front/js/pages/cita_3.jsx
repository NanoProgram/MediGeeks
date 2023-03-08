import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/cita_1.css";
import { Link } from "react-router-dom";
import { Sidebar_doc } from "../component/Sidebar Doctors.jsx";
import { Footer } from "../component/footer.jsx";
import GoogleMaps from "simple-react-google-maps";

export const Cita3 = () => {
  const { store, actions } = useContext(Context);
  console.log(store.calendarID);
  console.log(store.dataIds);
  console.log(store.comprobante);
  const valor = JSON.parse(localStorage.getItem('comprobante'));
  console.log(valor)




  return (
    <div className="container fondo p-2" style={{ backgroundColor: "#d6eef7" }}>
      <Sidebar_doc />
      <div className="container d-flex justify-content-center">
        <div className="card border-primary mb-3" style={{ width: "18rem" }}>
          <div className="card-header">Hora Agendada</div>
          <div className="card-body text-primary">
            {store.comprobante && (
              <p className="card-title">
                Estimado <br />
                Su hora de <b>{valor.especialidad}</b> ha sido reservada exitosamente con <b>{valor.doctor}</b> para el dia <b>{valor.dia}</b> de <b>{valor.mes}</b>  en <b>{valor.centro}</b>
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <GoogleMaps
          apiKey={"AIzaSyB-zFY4ZH0nkE8BZiRH94iFGWJyFgK1MPg"}
          style={{ height: "500px", width: "500px" }}
          zoom={16}
          center={{
            lat: Number(valor.lat),
            lng: Number(valor.lng),
          }}
          markers={{
            lat: Number(valor.lat),
            lng: Number(valor.lng),
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
