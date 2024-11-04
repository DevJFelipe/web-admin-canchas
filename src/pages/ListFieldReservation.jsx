import React, { useContext, useState } from 'react';
import { Card, CardBody, Image, Input, Button } from "@nextui-org/react";
import { HiLocationMarker } from "react-icons/hi";
import { FiCalendar, FiClock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FieldContext } from '../context/FieldContext'; // Importar el contexto

const FieldCard = ({ title, address, imageSrc, rating, onSelect }) => {
  return (
    <div onClick={onSelect} className="cursor-pointer w-full h-full">
      <Card className={"shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"}>
        <Image
          src={imageSrc}
          alt={title}
          className="w-full h-36 object-cover"
        />
        <CardBody className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-xl font-bold">{title}</h4>
            <span className="text-green-500">{rating} ★</span>
          </div>
          <p className="text-sm text-gray-600">{address}</p>
          <p className="text-sm text-red-500 mt-2">Club sin disponibilidad en base a tus filtros</p>
        </CardBody>
      </Card>
    </div>
  );
};

const ListFieldReservation = () => {
  const { fields } = useContext(FieldContext); // Obtener las canchas del contexto
  const navigate = useNavigate();

  const handleSelectField = (field) => {
    navigate("/detailed-field", { state: { field } });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {fields.map((field, index) => (
        <FieldCard
          key={index}
          {...field}
          onSelect={() => handleSelectField(field)}
        />
      ))}
    </div>
  );
};

const SearchBar = () => {
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const isFormComplete = city && date && time;

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
      <div className="flex items-center space-x-2">
        <HiLocationMarker className="text-green-500" size={24} />
        <Input
          underlined
          clearable
          placeholder="Buscar ciudad"
          className="w-40 focus:border-green-500"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
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
      <Button 
        auto
        disabled={!isFormComplete}
        className={`ml-4 px-4 py-2 rounded-md ${isFormComplete ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'}`}
      >
        Buscar
      </Button>
    </div>
  );
};

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <SearchBar />
      <ListFieldReservation />
    </div>
  );
};

export default App;
