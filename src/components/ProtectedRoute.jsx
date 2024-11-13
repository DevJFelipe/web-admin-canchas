// frontend/src/components/ProtectedRoute.jsx
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export const AdminRoute = ({ children }) => {
  const { user, loading, isAdmin } = useContext(AuthContext);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!user || !isAdmin()) {
    return <Navigate to="/" />;
  }

  return children;
};