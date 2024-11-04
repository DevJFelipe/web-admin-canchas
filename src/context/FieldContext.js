import React, { createContext, useState } from 'react';

// Crear el contexto
export const FieldContext = createContext();

// Proveedor del contexto
export const FieldProvider = ({ children }) => {
  const [fields, setFields] = useState([
    {
      title: "LA CALDERA",
      address: "6to Piso La 14 Avenida 6ta Avenida 6N #3...",
      imageSrc: require("../assets/img/cancha1.jpeg"),
      rating: 5,
    },
    {
      title: "La Chilena Sintéticas",
      address: "Km 5 vía Panamericana Cali-Jamundí ...",
      imageSrc: require("../assets/img/cancha2.jpg"),
      rating: 5,
    },
  ]);

  // Añadir una nueva cancha
  const addField = (field) => {
    setFields([...fields, field]);
  };

  // Editar una cancha existente
  const editField = (index, updatedField) => {
    const updatedFields = [...fields];
    updatedFields[index] = updatedField;
    setFields(updatedFields);
  };

  // Eliminar una cancha
  const deleteField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  return (
    <FieldContext.Provider value={{ fields, addField, editField, deleteField }}>
      {children}
    </FieldContext.Provider>
  );
};
