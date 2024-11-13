import React, { useEffect, useState } from 'react';
import { Card, CardBody } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useReservation } from '../context/ReservationContext';
import { getCanchas } from '../api/canchas.js';

// Componente para mostrar las tarjetas de las canchas
const FieldCard = ({ field }) => {
  const navigate = useNavigate();
  const { updateReservation } = useReservation();

  const handleSelect = () => {
    updateReservation({ cancha: field });
    navigate('/reservation');
  };

  return (
    <div onClick={handleSelect} className="cursor-pointer w-full h-full">
      <Card className="shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
        <CardBody className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-xl font-bold">{field.descripcion}</h4>
            <span className="text-green-500">${field.precio}</span>
          </div>
          <p className={`text-sm ${field.estado === "Disponible" ? "text-green-500" : "text-red-500"}`}>
            {field.estado}
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

const ListaCanchas = () => {
  const [canchas, setCanchas] = useState([]);

  useEffect(() => {
    
    getCanchas()
      .then((data) => {
        setCanchas(data);
      })
      .catch((error) => {
        console.error("Error al obtener las canchas:", error);
      });

  }
  , []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {canchas.map((cancha, index) => (
        <FieldCard key={index} field={cancha} />
      ))}
    </div>
  );
}

export default ListaCanchas;
