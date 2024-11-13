import React, { useEffect, useState } from 'react';
import { Card, CardBody, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom"; // Add this import
import { getUserReservas, deleteReserva } from '../api/reservas';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const ReservedFields = () => {
  const navigate = useNavigate(); // Add this line
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const data = await getUserReservas();
      setReservations(data);
    } catch (err) {
      setError('Error al cargar las reservas');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteReservation = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta reserva?')) {
      try {
        await deleteReserva(id);
        // Refresh reservations after deletion
        fetchReservations();
      } catch (err) {
        setError('Error al eliminar la reserva');
        console.error('Error:', err);
      }
    }
  };

  if (loading) return <div className="text-center p-8">Cargando reservas...</div>;
  if (error) return <div className="text-center text-red-500 p-8">{error}</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Mis Reservas</h1>
      
      {reservations.length === 0 ? (
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <p className="text-gray-600">No tienes reservas activas</p>
          <Button
            className="mt-4 bg-green-500 text-white"
            onClick={() => navigate('/list-field-reservation')}
          >
            Hacer una reserva
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reservations.map((reservation) => (
            <Card key={reservation._id} className="shadow-lg">
              <CardBody>
                <h3 className="text-xl font-bold mb-2">
                  {reservation.cancha.descripcion}
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-semibold">Fecha: </span>
                    {format(new Date(reservation.fecha), "EEEE d 'de' MMMM, yyyy", { locale: es })}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Hora: </span>
                    {reservation.hora}
                  </p>
                  <p className="text-blue-600 font-semibold">
                    ${reservation.cancha.precio.toLocaleString()}
                  </p>
                  <p className={`text-sm ${
                    new Date(reservation.fecha) < new Date() 
                      ? 'text-red-500' 
                      : 'text-green-500'
                  }`}>
                    {new Date(reservation.fecha) < new Date() 
                      ? 'Reserva pasada' 
                      : 'Reserva activa'}
                  </p>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button 
                    color="danger"
                    variant="flat"
                    onClick={() => handleDeleteReservation(reservation._id)}
                    className="text-sm"
                  >
                    Eliminar reserva
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReservedFields;