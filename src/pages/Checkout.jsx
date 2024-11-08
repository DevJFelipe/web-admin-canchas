import React from "react";
import { useReservation } from "../context/ReservationContext";
import { useLocation } from "react-router-dom";
import { Card, CardBody, Button } from "@nextui-org/react";
import { HiLocationMarker } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

const Checkout = () => {
  const { reservationData } = useReservation();
  const location = useLocation();
  const { state } = location;

  if (!state?.field || !reservationData) {
    return <div>Reserva no encontrada. Por favor, vuelve y selecciona un campo.</div>;
  }

  const { field } = state;
  const { date, time } = reservationData;

  // Detalles simulados
  const userName = "Juan Felipe Andrade Vargas";
  const userId = "64b8f3f2f2f2f2f2f2f2f2f2";
  const reservationPrice = 50000;
  const reservationDeposit = 25000;

  const handleReservation = () => {
    const reservation = {
      fecha: date,
      hora: time,
      usuario: userId,
      cancha: field._id,
    };

    console.log("Datos de la reserva enviados:", reservation);
    alert("¡Reserva confirmada! Revisa la consola para los detalles.");
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <Card className="shadow-lg mb-8">
        <CardBody>
          <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
            ¡Estás a punto de completar tu reserva!
          </h2>

          <div className="bg-white p-4 rounded-md shadow-md mb-6">
            <h3 className="text-xl font-bold">{field.descripcion}</h3>
            <p className="text-gray-600">{field.address}</p>
            <p className="text-green-600 mt-2 font-semibold">Fecha: {date}</p>
            <p className="text-green-600 font-semibold">Hora: {time}</p>
          </div>

          <div className="bg-white p-4 rounded-md shadow-md mb-6">
            <h4 className="text-xl font-bold mb-2">Jugadores</h4>
            <div className="flex items-center gap-2 text-gray-700">
              <FaUserCircle size={24} />
              <span className="font-semibold">Reservando: {userName}</span>
            </div>
          </div>

          <div className="bg-blue-100 p-4 rounded-md shadow-md mb-6">
            <h4 className="text-xl font-bold mb-4">Total de la Reserva</h4>
            <p className="text-lg">Precio total: <span className="font-semibold text-blue-700">${reservationPrice.toLocaleString()}</span></p>
            <p className="text-sm text-gray-600">
              Alternativas para reservar: Si abonas <span className="font-semibold">${reservationDeposit.toLocaleString()}</span>, el resto deberá ser pagado en el club.
            </p>
          </div>

          <Button
            className="w-full bg-green-500 text-white py-4 rounded-md text-lg"
            onClick={handleReservation}
          >
            Reservar
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Checkout;
