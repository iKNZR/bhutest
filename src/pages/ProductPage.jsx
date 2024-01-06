import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProductPage = () => {
  const { id } = useParams();
  const [dato, setDato] = useState(null);
  const nombre = Number(id) + 1;

  const getData = async () => {
    const response = await fetch(`..//../public/data/products.json`);
    const data = await response.json();
    if (data[id].id === Number(id)) {
      setDato(data[id]);
    }
  };

  const images = [
    {
      original: dato?.image,
      thumbnail: dato?.image,
    },
    {
      original: dato?.path1,
      thumbnail: dato?.path1,
    },
    {
      original: dato?.path2,
      thumbnail: dato?.path2,
    },
    {
      original: dato?.path3,
      thumbnail: dato?.path3,
    },
  ];

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main-products">
      <h1>Product {nombre}</h1>
      <div className="section">
        <div>
          {/* <img src={dato?.image} alt={dato?.nombre} /> */}
          <ImageGallery
            items={images}
            showNav={false}
            showPlayButton={false}
            showFullscreenButton={false}
          />
        </div>
        <div className="details">
          <h3>Descripción del Producto</h3>
          <p>{dato?.descripcion}</p>
          <button id="btn">Dudas?</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
