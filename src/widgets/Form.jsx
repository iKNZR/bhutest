import { useRef, useEffect } from "react";
import { useForm } from "../hooks/useForm";

const Form = () => {

  const initialForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const { formState, firstName, lastName, email, phone, subject, message, onInputChange } = useForm(initialForm);

  const onSubmit= (e)=>{
    e.preventDefault();
    console.log(formState);
}


  return (
    <>
    <h3>No dudes en contactarnos</h3>
      <form onSubmit={onSubmit} className="form">
        <div className="form-group">
          <input
       
            type="text"
            className="input-form"
            name="firstName"
            placeholder="Nombre"
            value={firstName}
            onChange={onInputChange}
          />
          <input
            type="text"
            className="input-form"
            name="lastName"
            placeholder="Apellido"
            value={lastName}
            onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="input-form"
            name="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="input-form"
            name="phone"
            placeholder="Número de Teléfono"
            value={phone}
            onChange={onInputChange}           
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="input-form"
            name="subject"
            placeholder="Motivo"
            value={subject}
            onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <textarea
            className="txt-area"
            type="text"
            name="message"
            placeholder="Ingrese su consulta..."
            value={message}
            onChange={onInputChange}
          />
        </div>
        <button id="btn" className="btn-submit">Enviar</button>
      </form>
    </>
  );
};

export default Form;
