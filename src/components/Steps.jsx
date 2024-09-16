import { Card } from "@nextui-org/react";
import { HiOutlineCalendar, HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdSportsSoccer } from "react-icons/md";
import SearchBar from './SearchBar';  // Importamos el componente SearchBar

const Step = ({ icon, title, description }) => {
  return (
    <Card isHoverable isPressable className="flex flex-col items-center text-center p-6 m-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <div className="text-6xl text-red-500 mb-4">{icon}</div> {/* Icono grande */}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-500 mt-2">{description}</p>
    </Card>
  );
};

const Steps = () => {
  return (
    <div className="text-center p-10 bg-gray-50">

      {/* Título principal */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-8">
        Deja de dar vueltas y <br /> reserva en solo <span className="text-red-500">3 pasos</span>
      </h2>

      {/* Sección de pasos */}
      <div className="flex justify-center items-center space-x-8">
        {/* Paso 1: Seleccionar fecha y hora */}
        <Step
          icon={<HiOutlineCalendar />}
          title="Selecciona fecha y hora"
          description="Selecciona fecha y hora para tu reserva."
        />
        {/* Paso 2: Elige la cancha */}
        <Step
          icon={<MdSportsSoccer />}
          title="Elige la cancha que prefieras"
          description="Selecciona tu cancha favorita para jugar."
        />
        {/* Paso 3: Realiza el pago */}
        <Step
          icon={<HiOutlineCurrencyDollar />}
          title="Realiza el pago en línea"
          description="Paga de manera rápida y segura."
        />
      </div>
          {/* Barra de búsqueda */}
          <SearchBar />
    </div>
    
  );
};

export default Steps;
