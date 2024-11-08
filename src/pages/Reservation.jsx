import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useReservation } from "../context/ReservationContext";

const Reservation = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const { updateReservation, reservationData } = useReservation();
  const navigate = useNavigate();

  const daysOfWeek = ["DOM.", "LUN.", "MAR.", "MIÉ.", "JUE.", "VIE.", "SÁB."];
  const times = [
    "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", 
    "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", 
    "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
  ];

  // Función para avanzar una semana
  const handleNextWeek = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)));
  };

  // Función para retroceder una semana
  const handlePreviousWeek = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)));
  };

  // Obtener los días de la semana actual
  const getDaysOfWeek = () => {
    const start = new Date(currentDate);
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      days.push({
        dayNumber: day.getDate(),
        dayOfWeek: daysOfWeek[day.getDay()],
        month: day.toLocaleString('default', { month: 'long' }).toUpperCase(),
        fullDate: day,
      });
    }
    return days;
  };

  // Obtener el mes actual
  const getDisplayedMonth = () => {
    return selectedDay
      ? selectedDay.fullDate.toLocaleString('default', { month: 'long' }).toUpperCase()
      : getDaysOfWeek()[0].month;
  };

  // Seleccionar un día
  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

// Formatear la fecha a "YYYY-MM-DD" sin ajustes de zona horaria
const formatDate = (date) => {
  return date.toLocaleDateString('en-CA'); // Formato "YYYY-MM-DD"
};

// Manejar el botón "Siguiente"
const handleNext = () => {
  if (selectedDay && selectedTime) {
    const formattedDate = formatDate(selectedDay.fullDate);
    const reservationData = {
      date: formattedDate,
      time: selectedTime,
    };

    console.log("Datos de la reserva enviados:", reservationData);

    updateReservation(reservationData);
    navigate("/list-field-reservation");
  } else {
    alert("Por favor, selecciona una fecha y una hora.");
  }
};


  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
      <div className="bg-white w-full max-w-xl p-6 rounded-md shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Fútbol 5</h2>
        <h3 className="text-xl font-semibold text-center mb-4">{getDisplayedMonth()}</h3>

        {/* Navegación de días */}
        <div className="flex items-center gap-2 mb-4">
          <button onClick={handlePreviousWeek} className="p-2 text-gray-600">
            <IoIosArrowBack size={24} />
          </button>
          <div className="flex gap-4 flex-nowrap overflow-hidden">
            {getDaysOfWeek().map((day, index) => (
              <div
                key={index}
                onClick={() => handleDayClick(day)}
                className={`flex flex-col items-center p-2 border rounded-md cursor-pointer ${
                  selectedDay?.dayNumber === day.dayNumber ? "bg-blue-500 text-white" : "text-gray-600"
                }`}
              >
                <span className="text-lg font-bold">{day.dayNumber}</span>
                <span className="text-sm">{day.dayOfWeek}</span>
              </div>
            ))}
          </div>
          <button onClick={handleNextWeek} className="p-2 text-gray-600">
            <IoIosArrowForward size={24} />
          </button>
        </div>

        {/* Selección de horarios */}
        <h3 className="text-lg font-semibold text-center mt-6">Selecciona una opción</h3>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {times.map((time, index) => (
            <button
              key={index}
              onClick={() => setSelectedTime(time)}
              className={`py-2 border rounded-md ${
                selectedTime === time ? "bg-blue-500 text-white" : "text-gray-600"
              }`}
            >
              {time}
            </button>
          ))}
        </div>

        {/* Botón "Siguiente" */}
        <Button
          onClick={handleNext}
          className="bg-green-500 text-white mt-8 w-full"
          auto
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default Reservation;
