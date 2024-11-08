// src/context/FieldContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

export const FieldContext = createContext();

export const useField = () => {
  const context = useContext(FieldContext);
  if (!context) {
    throw new Error("useField must be used within a FieldProvider");
  }
  return context;
};

export const FieldProvider = ({ children }) => {
  const [fields, setFields] = useState([]);

  // Función para obtener la lista de canchas desde el backend
  const fetchFields = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/fields');
      const data = await response.json();
      setFields(data);
    } catch (error) {
      console.error('Error al obtener las canchas:', error);
    }
  };

  // Función para añadir una nueva cancha
  const addField = async (newField) => {
    try {
      // Aquí simulamos una API si no tienes backend conectado
      setFields((prevFields) => [...prevFields, newField]);
    } catch (error) {
      console.error('Error al añadir la cancha:', error);
    }
  };

  // Función para editar una cancha
  const editField = (index, updatedField) => {
    setFields((prevFields) => {
      const newFields = [...prevFields];
      newFields[index] = updatedField;
      return newFields;
    });
  };

  // Función para eliminar una cancha
  const deleteField = (index) => {
    setFields((prevFields) => prevFields.filter((_, i) => i !== index));
  };

  // Llamar a la función fetchFields al montar el componente
  useEffect(() => {
    fetchFields();
  }, []);

  return (
    <FieldContext.Provider value={{ fields, fetchFields, addField, editField, deleteField }}>
      {children}
    </FieldContext.Provider>
  );
};
