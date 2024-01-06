import React from "react";
import Products from "../widgets/Products";

const ProductsPage = () => {
  return (
    <div className="prodnserv">
      <div className="innerprdnserv">
        <h3>Nuestros Productos</h3>
        <Products />
      </div>
    </div>
  );
};

export default ProductsPage;
