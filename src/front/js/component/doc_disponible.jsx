import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/cita_1.css";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
//import 'react-datepicker/dist/react-datepicker.css';

export const Doc_disponible = () => {
  const [date, setDate] = useState(new Date());
  const [value, onChange] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

  const handleDateSelection = async (date) => {
    setSelectedDate(date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    console.log(day);
    console.log(month);
    const timeSlots = await fetchTimeSlotsFromDB(date);
    setAvailableTimeSlots(timeSlots);
  };

  const fetchTimeSlotsFromDB = async (date) => {
    // Aquí podrías hacer una petición a una base de datos para obtener los rangos horarios disponibles para la fecha seleccionada
    // Utilizando el paquete fetch o cualquier otro para hacer peticiones HTTP
    // Ejemplo: const response = await fetch(`/api/timeslots?date=${date}`);
    //const timeSlots = await response.json();
    //return timeSlots;

    return ["08:00-09:00", "09:00-10:00", "10:00-11:00"];
  };

  return (
    <div className="container justify-content-center fondo p-2">
      <div className="d-flex justify-content-center">
        <div className="p-2">
          <div className="card" style={{ width: "18rem" }}>
            <img src={rigoImageUrl} className="card-img-top" alt="Card image" />
            <div className="card-body">
              <h5 className="card-title">Doc1</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="p-2">
          <DatePicker
            className="react-date-picker__input react-date-picker__input--custom-bg"
            value={selectedDate}
            onChange={handleDateSelection}
            autoFocus={false}
            minDate={new Date()}
            mode="single"
          />
          <br />
          <br />
          <div>
            {availableTimeSlots.map((timeSlot) => (
              <div className=" " key={timeSlot}>
                <button
                  type="button"
                  className="btn btn-outline-dark m-1"
                  onClick={() => handleTimeSlotSelection(timeSlot)}
                >
                  {timeSlot}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
