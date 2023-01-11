import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/cita_1.css";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";




export const Cita2 = () => {
  return (
    <div className="container justify-content-center" >
      <div className="d-flex justify-content-center">
        <div className="p-2">
            <div className="card" style={{ width: '18rem' }}>
                <img src={rigoImageUrl} className="card-img-top" alt="Card image"  />
                <div className="card-body">
                    <h5 className="card-title">Doc1</h5>
                    <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
            </div>
        </div>
        </div>
        <div className="p-2">
            <h4> Lunes</h4>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio1">
                Rango 1
                </label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio2">
                Rango 2
                </label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio3">
                Rango 3
                </label>
            </div>
                    
        </div>
        
    </div>
    <Link to="/cita3">
        <button className="btn btn-primary ">Continue</button>
      </Link>
      <Link to="/">
        <button className="btn btn-primary">Back To home</button>
      </Link>
    </div> 
);
};