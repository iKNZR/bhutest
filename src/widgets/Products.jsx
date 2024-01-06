import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
 
  return (
    <div className="products">      
      { Array.from({length: 8}, (_, i)=>
      <div key={i} className="card-style">
        <Link key={i+1} to={`/products/${i}`}>
          <img className="card-img" src={`assets/product${i+1}.jpg`} alt={`product${i}`} />
            <h4 className="card-title">Product {i+1}</h4>
            <p className="card-text">Una gran y detallada descripción del producto número {i+1}</p>
        </Link>
      </div>
      )
      
      }
    </div>
  );
};

export default Products;