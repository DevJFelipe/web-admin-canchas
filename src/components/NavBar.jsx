import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Logo from "./Logo.jsx";

const NavBar = () => {
  return (
    <Navbar shouldHideOnScroll className='navbar w-full font-platypi justify-between max-w-full'>
      {/* Contenido del lado izquierdo */}
      <NavbarBrand>
        <Logo />
      </NavbarBrand>

      {/* Contenido del centro (enlaces de navegación) */}
      <NavbarContent className="hidden sm:flex gap-4 justify-center max-w-sm navbar-content">
        <NavbarItem className="navbar-item">
          <Link color="foreground" href="/" aria-current="page" className="active">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem className="navbar-item">
          <Link href="#">
            Reserva tu cancha
          </Link>
        </NavbarItem>
        <NavbarItem className="navbar-item">
          <Link color="foreground" href="#">
            Quienes somos
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Contenido del lado derecho (Inicia sesión y Regístrate) */}
      <NavbarContent className="flex flex-nowrap flex-grow gap-4 justify-end navbar-buttons">
        <NavbarItem>
          <Button as={Link} href="/login" variant="flat" className="navbar-button-login">
            Inicia sesión
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="#" variant="flat" className="navbar-button-registro">
            Registrate
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;

