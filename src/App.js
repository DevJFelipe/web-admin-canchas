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
import { FieldProvider } from './context/FieldContext'; // Importar el FieldProvider
import { AuthProvider } from './context/AuthContext'; // Importar el AuthProvider

function App() {
  return (
    <AuthProvider> {/* Envolver la aplicación con AuthProvider */}
      <FieldProvider> {/* Envolver también con FieldProvider */}
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
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </div>
        </Router>
      </FieldProvider>
    </AuthProvider>
  );
}

export default App;
