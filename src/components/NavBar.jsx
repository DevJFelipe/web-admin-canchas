import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { Logo } from "./Logo.jsx";

const NavBar = () => {
  return (
    <Navbar shouldHideOnScroll className='navbar font-platypi'>
      {/* Contenido del lado izquierdo */}
      <NavbarBrand className="navbar-brand">
        <Logo />
        <p className="font-bold text-inherit font-platypi">PlayGround</p>
      </NavbarBrand>

      {/* Contenido del centro (enlaces de navegación) */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem className="navbar-item">
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem className="navbar-item isActive">
          <Link href="#" aria-current="page" className="active">
            Quienes somos
          </Link>
        </NavbarItem>
        <NavbarItem className="navbar-item">
          <Link color="foreground" href="#">
            Reserva tu cancha
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Contenido del lado derecho (Inicia sesión y Regístrate) */}
      <NavbarContent className="ml-auto flex gap-4 justify-end">
        <NavbarItem className="navbar-login hidden lg:flex">
          <Link href="#">Inicia sesión</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="#" variant="flat" className="navbar-button">
            Registrate
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
