import React, { useContext } from "react";
import { useReservation } from "../context/ReservationContext";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, Button } from "@nextui-org/react";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { createReserva } from "../api/reservas";

const Checkout = () => {
  const { reservationData } = useReservation();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect if no reservation data
  if (!reservationData.cancha || !reservationData.date || !reservationData.time) {
    navigate('/list-field-reservation');
    return null;
  }

  const handleReservation = async () => {
    try {
      const reservation = {
        fecha: reservationData.date,
        hora: reservationData.time,
        usuario: user.id, // Now using the actual user ID from AuthContext
        cancha: reservationData.cancha._id
      };

      const response = await createReserva(reservation);
      console.log("Reserva creada:", response);
      alert("¡Reserva realizada con éxito!");
      navigate("/");  // Redirect to home or another appropriate page
    } catch (error) {
      console.error("Error al crear la reserva:", error);
      alert("Error al realizar la reserva. Por favor, intente nuevamente.");
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <Card className="shadow-lg mb-8">
        <CardBody>
          <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
            ¡Estás a punto de completar tu reserva!
          </h2>

          <div className="bg-white p-4 rounded-md shadow-md mb-6">
            <h3 className="text-xl font-bold">{reservationData.cancha.descripcion}</h3>
            <p className="text-gray-600">{reservationData.cancha.address}</p>
            <p className="text-green-600 mt-2 font-semibold">Fecha: {reservationData.date}</p>
            <p className="text-green-600 font-semibold">Hora: {reservationData.time}</p>
          </div>

          <div className="bg-white p-4 rounded-md shadow-md mb-6">
            <h4 className="text-xl font-bold mb-2">Jugadores</h4>
            <div className="flex items-center gap-2 text-gray-700">
              <FaUserCircle size={24} />
              <span className="font-semibold">Reservando: {user?.name || 'Usuario'}</span>
            </div>
          </div>

          <div className="bg-blue-100 p-4 rounded-md shadow-md mb-6">
            <h4 className="text-xl font-bold mb-4">Total de la Reserva</h4>
            <p className="text-lg">Precio total: <span className="font-semibold text-blue-700">${reservationData.cancha.precio.toLocaleString()}</span></p>
            <p className="text-sm text-gray-600">
              Alternativas para reservar: Si abonas <span className="font-semibold">${(reservationData.cancha.precio / 2).toLocaleString()}</span>, el resto deberá ser pagado en el club.
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
