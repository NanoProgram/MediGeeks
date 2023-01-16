import React, { useState } from "react";
import DatePicker from "react-date-picker";

const DatePickerWithTimeSlots = ({ onTimeSlotSelection }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

    const handleDateSelection = async date => {
        setSelectedDate(date);
        const timeSlots = await fetchTimeSlotsFromDB(date);
        setAvailableTimeSlots(timeSlots);
    }

    const fetchTimeSlotsFromDB = async date => {
        // Aquí podrías hacer una petición a una base de datos para obtener los rangos horarios disponibles para la fecha seleccionada
        // Utilizando el paquete fetch o cualquier otro para hacer peticiones HTTP
        // Ejemplo: const response = await fetch(`/api/timeslots?date=${date}`);
        //const timeSlots = await response.json();
        //return timeSlots;
        return ["08:00-09:00", "09:00-10:00", "10:00-11:00"];
    }

    return (
        <div>
            <DatePicker
                value={selectedDate}
                onChange={handleDateSelection}
            />
            <div>
                {availableTimeSlots.map(timeSlot => (
                    <div key={timeSlot}>
                        <button onClick={() => onTimeSlotSelection(timeSlot)}>
                            {timeSlot}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DatePickerWithTimeSlots;
