import React, { useContext, useState  } from "react";
import { Context } from "../store/appContext";
import "../../styles/cita_1.css";
import { Link, useNavigate } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import Calendar from 'react-calendar';
import DatePicker from 'react-date-picker'
import "react-date-picker/dist/DatePicker.css"
import Medigeeks_Logo from "../../img/Medigeeks_Logo.jpg";
import { Sidebar_doc } from "../component/Sidebar Doctors.jsx";
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

  const putAppointment = async => {
    alert("Hora Tomada");
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
      console.log('data:', data);
      const ids = data.map(item => item);
      console.log('ids:', ids);
  
      // Fetching additional data using the ids obtained from the first fetch
      const appointments = await Promise.all(
        ids.map(async id => {
          const appointmentResponse = await fetch(`https://3001-nanoprogram-medigeeks-mww1bt06jmk.ws-us89b.gitpod.io/api/mediGeeks/hours/${id}`, {
            method: "GET",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
          const appointmentData = await appointmentResponse.json();
          console.log('appointmentData:', appointmentData);
  
          const infoResponse = await fetch(`https://3001-nanoprogram-medigeeks-mww1bt06jmk.ws-us89b.gitpod.io/api/mediGeeks/info/${id}`, {
            method: "GET",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
          const infoData = await infoResponse.json();
          console.log('infoData:', infoData);
  
          const centerResponse = await fetch(`https://3001-nanoprogram-medigeeks-mww1bt06jmk.ws-us89b.gitpod.io/api/mediGeeks/centersname/${parseInt(Object.values(infoData)[0].center_id)}`, {
            method: "GET",
            headers: {
              "Authorization": "Bearer " + localStorage.getItem("token"),
            },
          });
          const centerData = await centerResponse.json();
  
          return {
            id: id,
            time: infoData[0].appointment_start_time,
            center: centerData.name,
          };
        })
      );
      
      console.log('appointments:', appointments);
  
      return appointments;
    } catch (error) {
      console.error(error);
    }
  };
  


  return (
    <div className="container justify-content-center fondo p-2" style={{backgroundColor: "#d6eef7"}} >
      <Sidebar_doc />
      <div className="d-flex justify-content-center">
        <div className="p-2 position-relative">
        <div className="logo d-flex justify-content-center">
            <img src={Medigeeks_Logo} />
          </div>
          <br></br>
          <br></br>
        <DatePicker
            className="react-date-picker__input react-date-picker__input--custom-bg bg-warning text-center"
            value={selectedDate}
            onChange={handleDateSelection}
            autoFocus={true}
            minDate={new Date()}
        />
        <br />
        <br />
        <div>
  {availableTimeSlots.map(timeSlot => (
    <div className=" " key={timeSlot.id}>
      <button type="button" className="btn btn-danger m-1" onClick={() =>putAppointment()}>
        {timeSlot.time} - {timeSlot.center}
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
      </div>
    </div> 
);
};
