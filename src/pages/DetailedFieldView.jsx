import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { HiLocationMarker } from "react-icons/hi";
import { useReservation } from "../context/ReservationContext";

const DetailedFieldView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const { reservationData, updateReservation } = useReservation();
  
  const [field, setField] = useState(null);
  const [selectedTime, setSelectedTime] = useState(reservationData.time);

  useEffect(() => {
    if (state && state.field) {
      setField(state.field);
    }
  }, [state]);

  const handleCheckout = () => {
    if (!selectedTime) {
      alert("Por favor, selecciona un horario.");
      return;
    }

    // Actualizar la hora en el contexto antes de navegar
    updateReservation({
      time: selectedTime,
      date: reservationData.date // Mantener la fecha seleccionada originalmente
    });

    const reservationDetails = {
      field,
      date: reservationData.date,
      time: selectedTime,
      usuario: "Juan Felipe Andrade Vargas",
      price: 50000
    };

    // Navegar a la página de Checkout con los detalles de la reserva
    navigate("/checkout", { state: reservationDetails });
  };

  if (!field) {
    return <div>Campo no encontrado. Regrese y seleccione un campo.</div>;
  }

  const schedule = [
    { time: "06:00", status: "disponible" },
    { time: "07:00", status: "disponible" },
    { time: "08:00", status: "no disponible" },
    { time: "09:00", status: "disponible" },
    { time: "10:00", status: "disponible" },
    { time: "11:00", status: "disponible" },
    { time: "17:00", status: "no disponible" },
    { time: "18:00", status: "disponible" },
    { time: "19:00", status: "disponible" },
  ];

  return (
    <div className="container mx-auto p-6">
      <Card className="shadow-lg mb-6">
        <Image src={field.imageSrc} alt={field.descripcion} className="w-full h-72 object-cover" />
        <CardBody className="p-6">
          <h1 className="text-3xl font-bold mb-2">{field.descripcion}</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <HiLocationMarker className="text-green-500 mr-2" />
            <span>{field.address}</span>
          </div>
          <div className="text-2xl text-green-500 font-bold">{field.rating} ★</div>
        </CardBody>
      </Card>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Elige tu horario</h2>
        <div className="grid grid-cols-4 gap-4">
          {schedule.map((slot, index) => (
            <button
              key={index}
              onClick={() => setSelectedTime(slot.time)}
              disabled={slot.status === 'no disponible'}
              className={`py-2 text-center rounded-md ${
                slot.status === 'no disponible'
                  ? 'bg-gray-300 cursor-not-allowed'
                  : selectedTime === slot.time
                  ? 'bg-blue-500 text-white'
                  : 'bg-green-500 text-white'
              }`}
            >
              {slot.time}
            </button>
          ))}
        </div>
        <Button onClick={handleCheckout} disabled={!selectedTime} className="mt-6 bg-green-600 text-white" auto>
          Reservar Cancha
        </Button>
      </div>
    </div>
  );
};

export default DetailedFieldView;
