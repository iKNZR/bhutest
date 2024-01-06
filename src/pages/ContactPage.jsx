import React from "react";
import Schedule from "../widgets/Schedule";
import Form from "../widgets/Form";
import Map from "../widgets/Map";
import Questions from "../widgets/Questions";

const ContactPage = () => {
  return (
    <div className="main">
      <div>
        <Schedule />
      </div>
      <div className="form-container">
        <div className="container">
          <Form />
        </div>
        <img src={'assets/contacto.jpg'} alt="contacto"/>
      </div>
      <div className="map-frame">
        <h3>Ubícanos</h3>
        <Map />
      </div>
      <div className="faq">
        <Questions />
      </div>
    </div>
  );
};

export default ContactPage;
