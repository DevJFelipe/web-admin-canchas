import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { HiLocationMarker } from "react-icons/hi"; // Icono de ubicación
import { MdSportsSoccer } from "react-icons/md";   // Icono de deporte
import { FiCalendar, FiClock } from "react-icons/fi";  // Iconos de fecha y hora

const SearchBar = () => {
  // Estados para cada campo
  const [city, setCity] = useState('');
  const [sport, setSport] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // Función para verificar si todos los campos están llenos
  const isFormComplete = city && sport && date && time;

  return (
    <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[90%] max-w-5xl bg-white p-4 rounded-full shadow-lg flex justify-between items-center mx-auto w-[95%] max-w-5xl h-20 backdrop-blur-lg mb-10">
      
      {/* Campo de Buscar Ciudad */}
      <div className="flex items-center space-x-2">
        <HiLocationMarker className="text-green-500" size={24} />
        <Input
          underlined
          clearable
          placeholder="Buscar Ciudad"
          className="w-40 focus:border-green-500"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      {/* Campo de Elige Deporte */}
      <div className="flex items-center space-x-2">
        <MdSportsSoccer className="text-green-500" size={24} />
        <Input
          underlined
          clearable
          placeholder="Elige deporte"
          className="w-40 focus:border-green-500"
          value={sport}
          onChange={(e) => setSport(e.target.value)}
        />
      </div>

      {/* Campo de Fecha */}
      <div className="flex items-center space-x-2">
        <FiCalendar className="text-green-500" size={24} />
        <Input
          type="date"
          underlined
          className="w-40 focus:border-green-500"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Campo de Hora */}
      <div className="flex items-center space-x-2">
        <FiClock className="text-green-500" size={24} />
        <Input
          type="time"
          underlined
          className="w-24 focus:border-green-500"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      {/* Botón de Buscar */}
      <Button 
        auto 
        disabled={!isFormComplete}  // Deshabilitar si el formulario no está completo
        className={`rounded-full px-8 h-12 text-white ${isFormComplete ? 'bg-gray-500 hover:bg-gray-600' : 'bg-gray-400 cursor-not-allowed'}`}
      >
        Buscar canchas
      </Button>
    </div>
  );
};

export default SearchBar;

