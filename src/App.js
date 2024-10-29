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

function App() {
  return (
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;



