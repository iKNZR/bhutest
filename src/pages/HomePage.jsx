import React, {useRef} from "react";
import hero from "/assets/imagen1.jpeg";
import { useNavigate } from "react-router-dom";
import Form from "../widgets/Form";

const HomePage = () => {
  const navigate = useNavigate();
  const myRef = useRef(null);
  const handleClick = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const clickProducts = () => {
    navigate("/products");
  };

  const clickServices = () => {
    navigate("/services");
  }
  return (
    <div className="main">
      <div className="hero-section">
        <div className="hero-texts">
          <p>
            <span className="span">Innovación y Experiencia</span>
          </p>
          <h2>BHU MACHINE SAC</h2>
          <h3>
            Proporcionando servicios de mantenimiento de primer nivel y equipos
            de última generación durante más de una década. Soluciones
            personalizadas diseñadas para sus necesidades únicas.
          </h3>

          <ul>
            <li>Mantenimiento predictivo, preventivo y correctivo.</li>
            <li>
              Calibración de equipos multimarca de potencia, neumáticos,
              hidráulicos y mecánicos.
            </li>
            <li>Alquiler y comercialización de equipos de alta calidad.</li>
          </ul>
          <button id="btn" onClick={handleClick}>
            Explora nuestros servicios
          </button>
        </div>
        <img src={hero} alt="hero" />
      </div>
      <div ref={myRef} className="offers">
        <div className="offer" onClick={clickProducts}>
          <img src={'assets/products.jpg'} alt="products" />
          <p className="offer-text">PRODUCTOS</p>
        </div>
        <div className="offer" onClick={clickServices}>
          <img src={'/assets/services.jpg'} alt="services" />
          <p className="offer-text">SERVICIOS</p>
        </div>
      </div>
      <div className="form-container">
        <img src={'assets/contacto.jpg'} alt="contacto"/>
        <div className="container">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
