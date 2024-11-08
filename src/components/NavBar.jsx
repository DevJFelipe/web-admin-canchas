import React, { useContext } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { FaUserCircle } from 'react-icons/fa';
import Logo from "./Logo";
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Comprobar si el usuario está autenticado y si `user` es un objeto válido
  const isLoggedIn = user && typeof user === 'object' && user.name;

  return (
    <Navbar shouldHideOnScroll className='navbar flex items-center px-6 py-0 bg-white shadow-md w-full font-platypi'>
      {/* Logo y nombre de la página */}
      <NavbarBrand className="navbar-brand justify-start flex items-center gap-3">
        <Logo />
      </NavbarBrand>

      {/* Enlaces de navegación centrales */}
      <NavbarContent className="hidden md:flex gap-8 justify-center">
        <NavbarItem>
          <Link color="foreground" href="/" aria-current="page" className="active">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/reservation">
            Reserva tu cancha
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Quienes somos
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Contenido del lado derecho (Inicia sesión, Registro, Perfil) */}
      <NavbarContent className="navbar-buttons flex items-center gap-4 justify-end">
        {isLoggedIn ? (
          <>
            {/* Botón del perfil del usuario */}
            <NavbarItem>
              <button
                onClick={() => navigate('/profile')}
                className="flex items-center gap-2 bg-transparent border-none cursor-pointer"
              >
                <FaUserCircle size={24} />
                <span>{user.name}</span>
              </button>
            </NavbarItem>
            
            {/* Botón de cerrar sesión */}
            <NavbarItem>
              <Button auto flat onClick={logout} className="bg-red-500 text-white">
                Cerrar sesión
              </Button>
            </NavbarItem>
          </>
        ) : (
          <>
            {/* Botones para iniciar sesión y registrarse */}
            <NavbarItem>
              <Button as={Link} href="/login" variant="flat" className="bg-green-500 text-white navbar-button-login">
                Inicia sesión
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} href="/register" variant="flat" className="navbar-button-registro">
                Registrate
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
