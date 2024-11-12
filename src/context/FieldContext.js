// src/context/FieldContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { getCanchas, createCancha, updateCancha, deleteCancha } from '../api/canchas';

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
      const data = await getCanchas();
      setFields(data);
    } catch (error) {
      console.error('Error al obtener las canchas:', error);
    }
  };

  // Función para añadir una nueva cancha
  const addField = async (newField) => {
    try {
      const createdField = await createCancha(newField);
      setFields(prevFields => [...prevFields, createdField]);
      return createdField;
    } catch (error) {
      console.error('Error al añadir la cancha:', error);
      throw error;
    }
  };

  // Función para editar una cancha
  const editField = async (id, updatedField) => {
    try {
        const updatedData = await updateCancha(id, updatedField);
        setFields(prevFields => 
            prevFields.map(field => 
                field._id === id ? updatedData : field
            )
        );
        return updatedData;
    } catch (error) {
        console.error('Error al actualizar la cancha:', error);
        throw error;
    }
};

  // Función para eliminar una cancha
  const deleteField = async (id) => {
    try {
        await deleteCancha(id);
        setFields(prevFields => prevFields.filter(field => field._id !== id));
    } catch (error) {
        console.error('Error al eliminar la cancha:', error);
        throw error;
    }
};

  // Llamar a la función fetchFields al montar el componente
  useEffect(() => {
    fetchFields();
  }, []);

  return (
    <FieldContext.Provider value={{ 
      fields, 
      fetchFields, 
      addField, 
      editField, 
      deleteField 
    }}>
      {children}
    </FieldContext.Provider>
  );
};
