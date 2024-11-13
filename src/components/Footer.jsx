import React from 'react';
import { Link } from "@nextui-org/react";
import instagramLogo from '../assets/img/instagram-logo.png'; // Ruta para el logo de Instagram
import facebookLogo from '../assets/img/facebook-logo.png'; // Ruta para el logo de Facebook
import xLogo from '../assets/img/x-logo.png'; // Ruta para el logo de X

const Footer = () => {
    return (
      <footer className="bg-[#2f2f2f] text-white py-10">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex w-full items-center mb-6">
            <Link 
              href="/privacy-policy" 
              className="text-[24px] font-medium font-platypi ml-4 flex-grow text-left text-white"
            >
              Políticas de privacidad
            </Link>
            <Link 
              href="/terms" 
              className="text-[24px] font-medium font-platypi flex justify-center ml-[-110px] text-white"
            >
              Términos de uso
            </Link>
            <Link 
              href="/contact" 
              className="text-[24px] font-medium font-platypi mr-4 flex-grow text-right text-white"
            >
              Contáctanos
            </Link>
          </div>

          <div className="flex justify-center space-x-[187px] mb-6">
            <Link href="https://instagram.com/playground" aria-label="Instagram">
              <img src={instagramLogo} alt="Instagram" className="w-10 h-10" />
            </Link>
            <Link href="https://facebook.com/playground" aria-label="Facebook">
              <img src={facebookLogo} alt="Facebook" className="w-10 h-10" />
            </Link>
            <Link href="https://twitter.com/playground" aria-label="X">
              <img src={xLogo} alt="X" className="w-10 h-10" />
            </Link>
          </div>

          <p className="text-[24px] font-medium font-platypi text-center">
            © 2024 PlayGround. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    );
};

export default Footer;

