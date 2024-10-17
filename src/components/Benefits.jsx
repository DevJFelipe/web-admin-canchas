import React from 'react';
import { Button } from '@nextui-org/react';
import IconDate from '../assets/img/icon-date.png';
import IconField from '../assets/img/icon-field.png';
import IconPay from '../assets/img/icon-pay.png';
import BallImage from '../assets/img/ball-image.png';
import { motion } from 'framer-motion';

const Benefits = () => {
  return (
    <div className="flex flex-col items-center py-16 bg-white relative">
      {/* Título */}
      <h2 className="font-fuzzy text-5xl font-bold text-center mb-8 relative">
        No des más vueltas y reserva <br /> en solo <span className="font-bold text-6xl">3 pasos</span>
        <motion.span
          className="absolute left-1/2 transform -translate-x-1/2 mt-4 block border-b-4 border-green-500 w-60"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ borderStyle: 'dashed', rotate: '-5deg' }}
        ></motion.span>
      </h2>

      {/* Sección de los 3 pasos */}
      <div className="flex justify-center items-center space-x-16 my-12">
        {/* Paso 1 */}
        <div className="flex flex-col items-center">
          <img src={IconDate} alt="Fecha y hora" className="w-[180px] h-[180px] mb-6" />
          <p className="text-center text-2xl font-medium font-fuzzy">Selecciona fecha y hora</p>
        </div>

        {/* Paso 2 */}
        <div className="flex flex-col items-center">
          <img src={IconField} alt="Elige la cancha" className="w-[180px] h-[180px] mb-6" />
          <p className="text-center text-2xl font-medium font-fuzzy">Elige la cancha que prefieras</p>
        </div>

        {/* Paso 3 */}
        <div className="flex flex-col items-center">
          <img src={IconPay} alt="Realiza el pago" className="w-[180px] h-[180px] mb-6" />
          <p className="text-center text-2xl font-medium font-fuzzy">Realiza el pago en línea</p>
        </div>
      </div>

      {/* Imagen del balón e botón */}
      <div className="relative w-full mt-12">
        {/* Imagen del balón */}
        <img src={BallImage} alt="Balón de fútbol" className="w-full h-auto object-cover" style={{ maxHeight: '250px', marginBottom: '-4px' }} />
        
        {/* Botón de reserva posicionado a la izquierda */}
        <div className="absolute bottom-12 right-12">
          <Button
            auto
            className="text-3xl bg-green-500 hover:bg-green-600 text-white px-20 py-10 rounded-full font-bold font-unbounded"
          >
            Reserva ahora
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

