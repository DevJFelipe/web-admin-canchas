import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Reservation from './pages/Reservation';
import ListFieldReservation from './pages/ListFieldReservation';
import DetailedFieldView from './pages/DetailedFieldView';
import Admin from './pages/Admin';
import Checkout from './pages/Checkout'; // Importar la nueva página Checkout
import { FieldProvider } from './context/FieldContext';
import { AuthProvider } from './context/AuthContext';
import { ReservationProvider } from './context/ReservationContext';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <AuthProvider>
      <FieldProvider>
        <ReservationProvider>
          <Router>
            <div className="App">
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/list-field-reservation" element={<ListFieldReservation />} />
                <Route path="/detailed-field" element={<DetailedFieldView />} />
                <Route path="/checkout" element={<Checkout />} /> {/* Nueva ruta para Checkout */}
                <Route path="/admin" element={<Admin />} />
                <Route path="/profile" element={<UserProfile />} />

              </Routes>
            </div>
          </Router>
        </ReservationProvider>
      </FieldProvider>
    </AuthProvider>
  );
}

export default App;
