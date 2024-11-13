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
import Checkout from './pages/Checkout';
import UserProfile from './pages/UserProfile';
import { FieldProvider } from './context/FieldContext';
import { AuthProvider } from './context/AuthContext';
import { ReservationProvider } from './context/ReservationContext';
import { ProtectedRoute, AdminRoute } from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <FieldProvider>
        <ReservationProvider>
          <Router>
            <div className="App">
              <NavBar />
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Protected User Routes */}
                <Route path="/reservation" element={
                  <ProtectedRoute>
                    <Reservation />
                  </ProtectedRoute>
                } />
                <Route path="/list-field-reservation" element={
                  <ProtectedRoute>
                    <ListFieldReservation />
                  </ProtectedRoute>
                } />
                <Route path="/detailed-field" element={
                  <ProtectedRoute>
                    <DetailedFieldView />
                  </ProtectedRoute>
                } />
                <Route path="/checkout" element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                } />
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <UserProfile />
                  </ProtectedRoute>
                } />

                {/* Protected Admin Routes */}
                <Route path="/admin/*" element={
                  <AdminRoute>
                    <Admin />
                  </AdminRoute>
                } />
              </Routes>
            </div>
          </Router>
        </ReservationProvider>
      </FieldProvider>
    </AuthProvider>
  );
}

export default App;
