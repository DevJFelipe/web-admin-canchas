import React, { useContext } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Logo from "./Logo";
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
  const { userRole } = useContext(AuthContext) || {};

  return (
    <Navbar shouldHideOnScroll className='navbar flex items-center px-6 py-0 bg-white shadow-md w-full font-platypi'>
      {/* Contenido del lado izquierdo (Logo y nombre de la pagina) */}
      <NavbarBrand className="navbar-brand justify-start flex items-center gap-3">
        <Logo />
      </NavbarBrand>

      {/* Contenido del centro (enlaces de navegación) */}
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

      {/* Contenido del lado derecho (Inicia sesión, Regístrate y Admin) */}
      <NavbarContent className="navbar-buttons flex items-center gap-4 justify-end">
        {userRole === 'admin' && (
          <NavbarItem>
            <Button as={Link} href="/admin" variant="flat" className="bg-blue-500 text-white navbar-button-admin">
              Admin
            </Button>
          </NavbarItem>
        )}
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
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
