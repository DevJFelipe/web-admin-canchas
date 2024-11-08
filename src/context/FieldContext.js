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

  // Llamar a la función fetchFields al montar el componente
  useEffect(() => {
    fetchFields();
  }, []);

  // Exportar funciones y datos del contexto
  return (
    <FieldContext.Provider value={{ fields, fetchFields }}>
      {children}
    </FieldContext.Provider>
  );
};
