import React from 'react';
import { Button } from "@nextui-org/react";
import mapImage from '../assets/img/map-colombia.png'; // Ruta establecida para el mapa de Colombia
import fieldImage from '../assets/img/soccer-field.png'; // Ruta establecida para la imagen de la cancha de fútbol
import backgroundImage from '../assets/img/colombia-presence-bg.png'; // Ruta establecida para la imagen de background

const ColombiaPresence = () => {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <img
        src={fieldImage}
        alt="Cancha de fútbol"
        className="absolute bottom-0 w-full h-auto"
      />
      <div className="flex flex-row items-top justify-between w-[80%] relative z-10">
        <div className="flex flex-col items-left">
          <img
            src={mapImage}
            alt="Mapa de Colombia"
            className="w-[1280px] h-auto"
          />
        </div>
        <div className="flex flex-col items-right ml-100">
          <p className="text-[60px] font-light font-unbounded text-white">
            Tenemos presencia en <span className="font-bold text-[#00FF00]">+50 ciudades</span>
          </p>
          <Button
            auto
            className="text-[32px] font-unbounded bg-white text-black rounded-full px-10 py-6 mt-10"
          >
            ¡Haz tu reserva hoy!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ColombiaPresence;



