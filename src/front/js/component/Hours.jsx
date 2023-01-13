import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/calendar.css";

export const Hours = (props) => {

	return (
		<div className={props.position}>
            <br></br>
            <br></br>
            <br></br>
      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th scope="col">Hora Inicio</th>
            <th scope="col">Hora Final</th>
            <th scope="col">Paciente</th>
            <th scope="col">ON - OFF</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>08:00</td>
            <td>09:00</td>
            <td>Closed</td>
            <td><div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
</div></td>
          </tr>
          <tr>
          <td>10:00</td>
            <td>11:00</td>
            <td>Cristian cuevas</td>
            <td><div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
</div></td>
          </tr>
          <tr>
          <td>13:00</td>
            <td>14:00</td>
            <td>Available</td>
            <td><div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
</div></td>
          </tr>
          <tr>
          <td>14:00</td>
            <td>15:00</td>
            <td>Ramon Hurtado</td>
            <td><div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
</div></td>
          </tr>
          <tr>
          <td>15:00</td>
            <td>16:00</td>
            <td>Pepito sin Apellido</td>
            <td><div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
</div></td>
          </tr>
          <tr>
          <td>16:00</td>
            <td>17:00</td>
            <td>Available</td>
            <td><div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
</div></td>
          </tr>
          <tr>
          <td>17:00</td>
            <td>18:00</td>
            <td>Closed</td>
            <td><div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
</div></td>
          </tr>
        </tbody>
      </table>
    </div>
	);
};