import React, { useState, useContext } from 'react';
import { FaGoogle, FaApple, FaFacebookF } from 'react-icons/fa';
import bgImage from '../assets/img/bg-image-login.png';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    // Obtener usuarios almacenados en Local Storage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      login(user); // Llamar a la función de login con el objeto del usuario
      navigate('/'); // Redirigir a la página de inicio
    } else {
      alert('Usuario o contraseña incorrecta');
    }
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="login-container bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Iniciar sesión</h2>
        <p className="text-center mb-4">
          ¿Nunca usaste Playground?{' '}
          <a href="/register" className="text-green-500">Regístrate gratis</a>
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Correo electrónico</label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Contraseña</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white font-bold rounded hover:bg-gray-800 transition"
          >
            Ingresar
          </button>
        </form>
        <div className="text-center my-4">O usa</div>
        <div className="flex justify-center gap-4">
          <button className="w-12 h-12 flex items-center justify-center rounded-full border transition hover:bg-gray-100">
            <FaGoogle className="text-red-500" />
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-full border transition hover:bg-gray-100">
            <FaApple className="text-black" />
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-full border transition hover:bg-gray-100">
            <FaFacebookF className="text-blue-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
