// src/context/FieldContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getCanchas, createCancha, updateCancha, deleteCancha } from '../api/canchas';

export const FieldContext = createContext();

export const FieldProvider = ({ children }) => {
  const [fields, setFields] = useState([]);

  const fetchFields = async () => {
    try {
      const data = await getCanchas();
      setFields(data);
    } catch (error) {
      console.error('Error al obtener las canchas:', error);
      throw error;
    }
  };

  const addField = async (fieldData) => {
    try {
      const createdField = await createCancha(fieldData);
      setFields(prev => [...prev, createdField]);
      return createdField;
    } catch (error) {
      console.error('Error al añadir la cancha:', error);
      throw error;
    }
  };

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

  const deleteField = async (id) => {
    try {
      await deleteCancha(id);
      setFields(prevFields => prevFields.filter(field => field._id !== id));
    } catch (error) {
      console.error('Error al eliminar la cancha:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchFields();
  }, []);

  return (
    <FieldContext.Provider value={{ 
      fields,
      addField,
      editField,
      deleteField,
      fetchFields 
    }}>
      {children}
    </FieldContext.Provider>
  );
};
