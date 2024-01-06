import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <header>
      <img src={'assets/bhu.png'} alt="logo" onClick={handleClick}/>
      <nav>
        <Link to="/" className="links">
          Inicio
        </Link>
        <Link to="/about" className="links">
          Nosotros
        </Link>
        <Link to="/products" className="links">
          Productos
        </Link>
        <Link to="/services" className="links">
          Servicios
        </Link>
      </nav>
      <Link to="/contact" className="links">
        Contacto
      </Link>
    </header>
  );
};

export default Navbar;
