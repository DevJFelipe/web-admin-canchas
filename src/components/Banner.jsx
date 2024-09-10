export const Banner = () => {
    return (
        <div className="banner h-screen bg-cover bg-center flex items-center" id="home">
          <div className="banner-container ml-16">
            <h1 className="text-white font-bold mb-8 leading-tight banner-text">
              Reserva <br/>tu cancha <br /> al instante
            </h1>
    
            <button className="banner-button">
              Buscar canchas
            </button>
          </div>
        </div>
      );
}

export default Banner;

