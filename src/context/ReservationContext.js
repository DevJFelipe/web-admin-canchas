// src/context/ReservationContext.js
import React, { createContext, useState, useContext } from 'react';

const ReservationContext = createContext();

export const useReservation = () => useContext(ReservationContext);

export const ReservationProvider = ({ children }) => {
  const [reservationData, setReservationData] = useState({
    date: '',
    time: '',
    cancha: null,  // Store the entire cancha object
    userId: ''
  });

  const updateReservation = (data) => {
    setReservationData(prev => ({ ...prev, ...data }));
  };

  return (
    <ReservationContext.Provider value={{ reservationData, updateReservation }}>
      {children}
    </ReservationContext.Provider>
  );
};
