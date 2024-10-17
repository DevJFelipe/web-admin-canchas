import React from 'react';
import { FaStar } from 'react-icons/fa';
import WinLogo from '../assets/img/win-logo.png';
import WilsonLogo from '../assets/img/wilson-logo.png';
import ConmebolLogo from '../assets/img/conmebol-logo.png';
import AdidasLogo from '../assets/img/adidas-logo.png';
import PoweradeLogo from '../assets/img/powerade-logo.png';
import HuilaLogo from '../assets/img/huila-logo.png';
import WplayLogo from '../assets/img/wplay-logo.png';
import BackgroundGradient from '../assets/img/dark-green-gradient.png';

const Sponsors = () => {
  return (
    <div
      className="flex flex-col items-center py-16 relative"
      style={{ backgroundImage: `url(${BackgroundGradient})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h2 className="font-unbounded text-5xl text-center mb-12">Lo que nuestros usuarios dicen</h2>
      <div className="flex justify-center space-x-16">
        {/* Testimonio 1 */}
        <div className="flex flex-col items-center max-w-xs mt-16">
          <h3 className="font-platypi text-3.5xl mb-4">Excelente servicio</h3>
          <div className="flex mb-8">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-black text-4xl" />
            ))}
          </div>
          <p className="font-platypi text-center text-lg mb-4">"Reservar una cancha nunca fue tan fácil. Solo en un par de clics pude asegurar mi cancha favorita para el partido del fin de semana."</p>
          <p className="font-platypi text-lg">— Carlos M., Bucaramanga</p>
        </div>

        {/* Testimonio 2 - más alto */}
        <div className="flex flex-col items-center max-w-xs mt-8">
          <h3 className="font-platypi text-3.5xl mb-4">Muy recomendable</h3>
          <div className="flex mb-8">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-black text-4xl" />
            ))}
          </div>
          <p className="font-platypi text-center text-lg mb-4">"¡Increíble experiencia! Siempre encontraba canchas ocupadas hasta que descubrí esta plataforma. Ahora, siempre tengo una cancha reservada a tiempo."</p>
          <p className="font-platypi text-lg">— Sofía R., Neiva</p>
        </div>

        {/* Testimonio 3 */}
        <div className="flex flex-col items-center max-w-xs mt-16">
          <h3 className="font-platypi text-3.5xl mb-4">Fácil y rápido</h3>
          <div className="flex mb-8">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-black text-4xl" />
            ))}
          </div>
          <p className="font-platypi text-center text-lg mb-4">"Me encanta lo simple que es usar esta página. Puedo elegir la cancha y el horario, y pagar en línea sin ningún problema. ¡Perfecto!"</p>
          <p className="font-platypi text-lg">— Luis P., Bogotá</p>
        </div>
      </div>

      {/* Título de logos de respaldo */}
      <h3 className="font-unbounded text-3xl text-center mt-20 mb-8">Estamos respaldados por:</h3>

      {/* Logos de respaldo */}
      <div className="flex justify-between items-center w-full px-20">
        <img src={WinLogo} alt="WIN Sports" className="h-12" />
        <img src={WilsonLogo} alt="Wilson" className="h-12" />
        <img src={ConmebolLogo} alt="CONMEBOL" className="h-12" />
        <img src={AdidasLogo} alt="Adidas" className="h-12" />
        <img src={PoweradeLogo} alt="Powerade" className="h-12" />
        <img src={HuilaLogo} alt="Atlético Huila" className="h-12" />
        <img src={WplayLogo} alt="Wplay" className="h-12" />
      </div>
    </div>
  );
};

export default Sponsors;

