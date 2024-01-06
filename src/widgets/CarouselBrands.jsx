import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

const Carousel = () => {
  const [datos, setDatos] = useState([]);

  const getData = async () => {
    const response = await fetch(`..//../public/data/brands.json`);
    const data = await response.json();
    setDatos(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {datos.map((dato, index) => (
        <SwiperSlide key={index}>
          <img className="swipper-img" src={dato.image} alt={dato.nombre} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
