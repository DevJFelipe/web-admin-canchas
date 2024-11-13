import React, { useState, useContext } from 'react';
import { FaGoogle, FaApple, FaFacebookF } from 'react-icons/fa';
import bgImage from '../assets/img/bg-image-register.png';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telefono, setTelefono] = useState('');
  const [cedula, setCedula] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:7100/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: name,
          email,
          password,
          telefono,
          cedula,
          role: 'user' // Asignamos el rol user por defecto
        }),
      });

      const data = await response.json();

      if (response.ok) {
        login(data); // Guardamos los datos del usuario en el contexto
        alert('Registro exitoso');
        navigate('/');
      } else {
        alert(data.message || 'Error en el registro');
      }
    } catch (error) {
      alert('Error de conexión');
    }
  };

  return (
    <div
      className="register-page"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '4rem 10rem',
      }}
    >
      <div className="text-container text-[#333333] mr-16 mt-0 text-left ml-0 p-16">
        <h2 className="font-unbounded text-[32px] font-bold mb-8">
          Reserva tu cancha fácilmente y sin complicaciones.
        </h2>
        <ul className="font-unbounded text-[24px] font-regular">
          <li className="mb-2"> - Disponible en más de 50 ciudades.</li>
          <li className="mb-2"> - Paga en línea de forma rápida y segura.</li>
          <li className="mb-2"> - Horarios flexibles para ti.</li>
        </ul>
        <p className="font-unbounded text-[24px] font-regular mt-4">
          ¡Unete ahora y prepárate para el juego!
        </p>
      </div>
      <div className="register-container bg-white p-8 rounded shadow-lg max-w-md w-full mt-16">
        <h2 className="text-2xl font-bold text-center mb-6">Registrarse</h2>
        <p className="text-center mb-4">
          ¿Ya tienes una cuenta? <a href="/login" className="text-green-500">Iniciar sesión</a>
        </p>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Nombre</label>
            <input
              type="text"
              placeholder="John"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Correo electrónico</label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Teléfono</label>
            <input
              type="tel"
              placeholder="123456789"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Cédula</label>
            <input
              type="text"
              placeholder="123456789"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Contraseña</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-500"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="terms" className="mr-2" required />
            <label htmlFor="terms" className="text-sm">
              Acepto los Términos de Servicio y la Política de Privacidad
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white font-bold rounded hover:bg-gray-800 transition"
          >
            Crear una cuenta
          </button>
        </form>
        <div className="text-center my-4">O</div>
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

export default Register;
