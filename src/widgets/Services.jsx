import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Services = () => {
  
  return (
    <div className="products">      
      { Array.from({length: 8}, (_, i)=>
      <div key={i} className="card-style">
        <Link key={i+1} to={`/services/${i}`}>
          <img className="card-img" src={`assets/service${i+1}.jpg`} alt={`service${i}`} />
            <h4 className="card-title">Service {i+1}</h4>
            <p className="card-text">Una gran y detallada descripción del servicio número {i+1}</p>
        </Link>
      </div>
      )
      
      }
    </div>
  );
};

export default Services;
