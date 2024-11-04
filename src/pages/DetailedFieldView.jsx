import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardBody, Image } from "@nextui-org/react";
import { HiLocationMarker } from "react-icons/hi";
import { MdSportsSoccer } from "react-icons/md";
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FieldContext } from "../context/FieldContext"; // Importar el contexto

const DetailedFieldView = () => {
  const { fields } = useContext(FieldContext);
  const location = useLocation();
  const { state } = location;

  // Buscar el campo específico usando la información proporcionada desde la navegación (estado)
  const [field, setField] = useState(null);

  useEffect(() => {
    if (state && state.field) {
      const selectedField = fields.find(f => f.title === state.field.title);
      setField(selectedField);
    }
  }, [state, fields]);

  if (!field) {
    return <div>Campo no encontrado. Regrese y seleccione un campo.</div>;
  }

  const schedule = [
    { time: "06", status: "no disponible" },
    { time: "07", status: "no disponible" },
    { time: "08", status: "tu reserva" },
    { time: "09", status: "no disponible" },
    { time: "10", status: "no disponible" },
    { time: "11", status: "tu reserva" },
    { time: "17", status: "no disponible" },
    { time: "18", status: "tu reserva" },
    { time: "19", status: "tu reserva" },
  ];

  const MapFocus = ({ position }) => {
    const map = useMap();
    map.setView(position, 15);
    return null;
  };

  return (
    <div className="container mx-auto p-4">
      {/* Imagen principal y detalles del campo */}
      <Card className="shadow-lg mb-6">
        <Image
          src={field.imageSrc}
          alt={field.title}
          className="w-full h-72 object-cover"
        />
        <CardBody className="p-6">
          <h1 className="text-3xl font-bold mb-2">{field.title}</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <HiLocationMarker className="text-green-500 mr-2" />
            <span>{field.address}</span>
            <a
              href="#"
              className="text-green-500 ml-4"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("map-section").scrollIntoView({ behavior: 'smooth' });
              }}
            >
              (ver en mapa)
            </a>
          </div>
          <div className="text-2xl text-green-500 font-bold">{field.rating} ★</div>
        </CardBody>
      </Card>

      {/* Elige tu turno */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Elige tu turno</h2>
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-2">
            <MdSportsSoccer className="text-green-500" size={24} />
            <span className="font-bold">Fútbol</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">Hoy 21/10</span>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2">
          {schedule.map((slot, index) => (
            <div
              key={index}
              className={`col-span-1 p-2 text-center text-sm ${slot.status === 'no disponible' ? 'bg-gray-300' : 'bg-green-500 text-white'} rounded-md`}
            >
              {slot.time}
            </div>
          ))}
        </div>
      </div>

      {/* Donde estamos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="map-section">
        <div className="col-span-2">
          <h2 className="text-2xl font-bold mb-4">Donde estamos</h2>
          <MapContainer center={[3.4516, -76.532]} zoom={13} className="h-96 w-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[3.4516, -76.532]}></Marker>
            <MapFocus position={[3.4516, -76.532]} />
          </MapContainer>
        </div>
        <div className="p-4 bg-white shadow-md rounded-md">
          <h3 className="text-lg font-bold mb-4">Ubicación</h3>
          <p className="text-gray-600 mb-2">{field.address}</p>
          <h3 className="text-lg font-bold mb-4">Horarios del Club</h3>
          <ul className="text-gray-600 mb-4">
            <li>Lunes, Martes, Miércoles, Jueves, Viernes 6:00 a 23:00</li>
            <li>Domingo: 7:00 a 18:00</li>
            <li>Sábado: 7:00 a 20:00</li>
            <li>Feriados: 7:00 a 18:00</li>
          </ul>
          <h3 className="text-lg font-bold mb-4">Servicios del Club</h3>
          <ul className="text-gray-600">
            <li>Wi-Fi</li>
            <li>Estacionamiento</li>
            <li>Parrilla</li>
            <li>Vestuario</li>
            <li>Ayuda Médica</li>
            <li>Escuela deportiva</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailedFieldView;
