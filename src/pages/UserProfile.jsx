import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const { userRole, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!userRole) {
    navigate('/login');
    return null;
  }

  return (
    <div className="user-profile-page p-8">
      <h2 className="text-3xl font-bold mb-4">Perfil del Usuario</h2>
      <p><strong>Rol:</strong> {userRole}</p>
      <button
        onClick={() => {
          logout();
          navigate('/');
        }}
        className="mt-4 py-2 px-4 bg-red-500 text-white font-bold rounded"
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default UserProfile;
