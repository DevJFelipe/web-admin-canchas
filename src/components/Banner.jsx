import React from 'react';
import SearchBar from './SearchBar';

export const Banner = () => {
    return (
        <div className="banner h-screen bg-cover bg-center flex items-center" id="home">
          <div className="banner-container ml-16">
            <h1 className="text-white font-bold mb-8 leading-tight banner-text">
              Reserva <br/>tu cancha <br /> al instante
            </h1>
          </div>
          <div>
            <SearchBar />
          </div>
        </div>
      );
}

export default Banner;

