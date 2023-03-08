import React, { useContext, useState  } from "react";
import { Context } from "../store/appContext";
import "../../styles/cita_1.css";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import Calendar from 'react-calendar';
import DatePicker from 'react-date-picker'
import "react-date-picker/dist/DatePicker.css"
//import 'react-datepicker/dist/react-datepicker.css';





export const Cita2 = () => {
  

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

  const handleDateSelection = async date => {
    setSelectedDate(date);
    const selectedDay = date.getDate().toString().padStart(2, '0');
    const selectedMonth = date.toLocaleString('default', { month: 'long' });
    const timeSlots = await fetchTimeSlotsFromDB(selectedDate, selectedDay, selectedMonth.toUpperCase());
    setAvailableTimeSlots(timeSlots);
    console.log(selectedMonth);
    console.log(selectedDay);
  }
  
 const fetchTimeSlotsFromDB = async (selectedDate, selectedDay, selectedMonth) => {
    try {
      const response = await fetch(
        `https://3001-nanoprogram-medigeeks-mww1bt06jmk.ws-us89b.gitpod.io/api/mediGeeks/date?day=${selectedDay.toString()}&month=${selectedMonth.charAt(0).toUpperCase()}${selectedMonth.slice(1).toLowerCase()}`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      const data = await response.json();
      const dataAsArray = Object.values(data);
      const ids = dataAsArray.map(item => item.id);
      console.log(ids);
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };


  return (
    <div className="container justify-content-center fondo p-2" style={{backgroundColor: "#d6eef7"}} >
      <div className="d-flex justify-content-center">
        <div className="p-2">
        <DatePicker
            className="react-date-picker__input react-date-picker__input--custom-bg"
            value={selectedDate}
            onChange={handleDateSelection}
            autoFocus={true}
            minDate={new Date()}
        />
        <br />
        <br />
        <div>
            {availableTimeSlots.map(timeSlot => (
                <div className=" " key={timeSlot}>
                    <button type="button" className="btn btn-outline-dark m-1" onClick={() => handleTimeSlotSelection(timeSlot)}>
                        {timeSlot}
                    </button>
                </div>
            ))}
        </div>
                
        </div>
        
    </div>
    <br />
      <div className="d-flex justify-content-between">
        <Link to="/">
          <button className="btn btn-primary">Back To home</button>
        </Link>
        <Link to="/cita3">
          <button className="btn btn-primary">Continue</button>
        </Link>
      </div>
    </div> 
);
};
