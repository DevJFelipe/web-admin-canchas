import React, { useEffect, useState } from 'react';
import { Card, CardBody, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useReservation } from '../context/ReservationContext';

// Datos simulados (mock data)
const mockFields = [
  {
    _id: "1",
    descripcion: "Cancha 1",
    address: "Calle Falsa 123",
    estado: "Disponible",
    horarios: ["06:00", "07:00", "08:00", "09:00"],
    imageSrc: "https://source.unsplash.com/random/200x200?field1",
    rating: 4.5
  },
  {
    _id: "2",
    descripcion: "Cancha 2",
    address: "Avenida Siempreviva 742",
    estado: "Ocupada",
    horarios: ["10:00", "11:00", "12:00"],
    imageSrc: "https://source.unsplash.com/random/200x200?field2",
    rating: 4.0
  },
  {
    _id: "3",
    descripcion: "Cancha 3",
    address: "Calle Real 456",
    estado: "Disponible",
    horarios: ["06:00", "07:00", "10:00", "13:00"],
    imageSrc: "https://source.unsplash.com/random/200x200?field3",
    rating: 3.8
  }
];

// Componente para mostrar las tarjetas de las canchas
const FieldCard = ({ field, onSelect }) => {
  return (
    <div onClick={onSelect} className="cursor-pointer w-full h-full">
      <Card className="shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
        <Image
          src={field.imageSrc}
          alt={field.descripcion}
          className="w-full h-36 object-cover"
        />
        <CardBody className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-xl font-bold">{field.descripcion}</h4>
            <span className="text-green-500">{field.rating} ★</span>
          </div>
          <p className="text-sm text-gray-600">{field.address}</p>
          <p className={`text-sm ${field.estado === "Disponible" ? "text-green-500" : "text-red-500"}`}>
            {field.estado}
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

const ListFieldReservation = () => {
  const { reservationData } = useReservation();
  const navigate = useNavigate();
  const [filteredFields, setFilteredFields] = useState([]);

  // Filtrar canchas según la fecha y hora seleccionada
  useEffect(() => {
    if (reservationData.date && reservationData.time) {
      console.log("Datos de la reserva recibidos:", reservationData);

      // Filtrar las canchas disponibles basadas en la hora seleccionada
      const filterFields = mockFields.filter(field => 
        field.estado === "Disponible" && 
        field.horarios.includes(reservationData.time)
      );

      console.log("Canchas filtradas:", filterFields);
      setFilteredFields(filterFields);
    }
  }, [reservationData]);

  const handleSelectField = (field) => {
    // Enviar los datos al siguiente componente (DetailedFieldView)
    navigate("/detailed-field", { 
      state: { 
        field,
        date: reservationData.date,
        time: reservationData.time 
      } 
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {filteredFields.length > 0 ? (
        filteredFields.map((field, index) => (
          <FieldCard
            key={index}
            field={field}
            onSelect={() => handleSelectField(field)}
          />
        ))
      ) : (
        <p className="text-center text-gray-600">
          No hay canchas disponibles para la fecha y hora seleccionada.
        </p>
      )}
    </div>
  );
};

export default ListFieldReservation;
