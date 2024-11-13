import React, { useContext } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { FaUserCircle } from 'react-icons/fa';
import Logo from "./Logo";
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const { user, logout, isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Navbar shouldHideOnScroll className='navbar flex items-center px-6 py-0 bg-white shadow-md w-full font-platypi'>
      <NavbarBrand className="navbar-brand justify-start flex items-center gap-3">
        <Logo />
      </NavbarBrand>

      <NavbarContent className="hidden md:flex gap-8 justify-center">
        <NavbarItem>
          <Link color="foreground" href="/" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/list-field-reservation">
            Reserva tu cancha
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Quienes somos
          </Link>
        </NavbarItem>
        {user && !isAdmin() && (
          <NavbarItem>
            <Link href="/my-reservations" className="text-blue-500">
              Mis Reservas
            </Link>
          </NavbarItem>
        )}
        {isAdmin() && (
          <NavbarItem>
            <Link href="/admin" className="text-green-500 font-bold">
              Administrar Canchas
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarContent className="navbar-buttons flex items-center gap-4 justify-end">
        {user ? (
          <>
            <NavbarItem>
              <div className="flex items-center gap-2">
                <FaUserCircle size={24} className="text-gray-600" />
                <span className="font-medium">
                  {isAdmin() ? 'Admin' : user?.name?.split(' ')[0]}
                </span>
              </div>
            </NavbarItem>
            <NavbarItem>
              <Button 
                onClick={() => {
                  logout();
                  navigate('/');
                }}
                className="bg-red-500 text-white"
              >
                Cerrar sesión
              </Button>
            </NavbarItem>
          </>
        ) : (
          <>
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
