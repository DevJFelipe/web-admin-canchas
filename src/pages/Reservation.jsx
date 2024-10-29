import { useState } from "react";
import { Button, Link } from "@nextui-org/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CanchaReserva = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);

  const daysOfWeek = ["DOM.", "LUN.", "MAR.", "MIÉ.", "JUE.", "VIE.", "SÁB."];
  const times = ["00:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

  const handleNextWeek = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)));
  };

  const handlePreviousWeek = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)));
  };

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

  const handleDayClick = (day) => {
    setSelectedDay(day.dayNumber);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-35">

      <main className="bg-white w-full max-w-lg mt-8 p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Fútbol 6</h2>
        <h3 className="text-xl font-semibold text-center mb-4">{getDaysOfWeek()[0].month}</h3>
        <div className="flex items-center gap-4 pb-4">
          <button onClick={handlePreviousWeek} className="p-2 text-gray-600">
            <IoIosArrowBack size={24} />
          </button>
          <div className="flex gap-4">
            {getDaysOfWeek().map((day, index) => (
              <div
                key={index}
                onClick={() => handleDayClick(day)}
                className={`flex flex-col items-center p-2 border rounded-md cursor-pointer ${selectedDay === day.dayNumber ? "bg-blue-500 text-white" : "text-gray-600"}`}
              >
                <span className="text-sm font-medium">{day.dayNumber}</span>
                <span className="text-sm font-medium">{day.dayOfWeek}</span>
              </div>
            ))}
          </div>
          <button onClick={handleNextWeek} className="p-2 text-gray-600">
            <IoIosArrowForward size={24} />
          </button>
        </div>

        <h3 className="text-lg font-semibold text-center mt-6">Selecciona una opción</h3>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {times.map((time, index) => (
            <button
              key={index}
              onClick={() => setSelectedTime(time)}
              className={`py-2 px-4 border rounded-md ${selectedTime === time ? "bg-blue-500 text-white" : "text-gray-600"}`}
            >
              {time}
            </button>
          ))}
        </div>

        <Button as={Link} href="/list-field-reservation" variant="flat" className="bg-green-500 text-white navbar-button-login">
            Siguiente
          </Button>
      </main>

      <nav className="bottom-0 w-full bg-white flex justify-around items-center py-2 shadow-md">
        <button className="flex flex-col items-center text-gray-700">
          <span>🏠</span>
          <span className="text-xs">Inicio</span>
        </button>
        <button className="flex flex-col items-center text-gray-700">
          <span>📍</span>
          <span className="text-xs">Reservas</span>
        </button>
        <button className="flex flex-col items-center text-gray-700">
          <span>👥</span>
          <span className="text-xs">Match</span>
        </button>
        <button className="flex flex-col items-center text-gray-700">
          <span>👤</span>
          <span className="text-xs">Perfil</span>
        </button>
        <button className="flex flex-col items-center text-purple-500">
          <span>💎</span>
          <span className="text-xs">Prime</span>
        </button>
      </nav>
    </div>
  );
};

export default CanchaReserva;

