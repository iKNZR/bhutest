import React from "react";
import about from "/assets/group.png";
import CarouselBrands from "../widgets/CarouselBrands";
import CarouselPersons from "../widgets/CarouselPersons";

const AboutPage = () => {
  return (
    <div className="main">
      <div className="hero-section">
        <div className="hero-texts">
          <h2>Sobre BHU MACHINE SAC</h2>
          <h3>
            Somos especialistas en servicios integrales de mantenimiento y
            soluciones en equipos multimarca, con 10 años de experiencia.
            Innovamos con tecnología para optimizar operaciones en sectores
            industrial, minero, naval y energético. Comprometidos con calidad,
            integridad y seguridad, destacamos en el mercado.
          </h3>
        </div>
        <img src={about} alt="hero" />
      </div>
      <div className="mission-vission">
        <div className="container">
          <div className="mission">
            <h3>Nuestra Misión</h3>
            <p>
              Satisfacer los requerimientos de nuestros clientes con estándares
              de profesionalismo, calidad y excelencia
            </p>
          </div>
          <div className="mission">
            <h3>Nuestra Visión</h3>
            <p>
              Lideres especialistas en servicios, venta, alquiler y
              capacitaciones en los rubros minero, industrial, energético y
              naval.
            </p>
          </div>
        </div>
      </div>
      <div className="carousels">
        <div className="carousel">
          <h3>Nuestros Clientes</h3>
          <CarouselBrands />
        </div>
      </div>
      <div className="carousels">
        <div className="carousel">
          <h3>Nuestros Colaboradores</h3>
          <CarouselPersons />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
