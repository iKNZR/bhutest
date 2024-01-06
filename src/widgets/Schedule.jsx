import React from "react";

const Schedule = () => {
  return (
    <div className="schedule-section">
      <div className="sched-sect">
        <h3>Dónde Encontrarnos</h3>
        <p>
          Estamos para servirte! Sientete libre de contactarnos en nuestros
          horarios.
        </p>
        <ul>
          <li>
            <h4>Email</h4>
            <p>bhu@bhu.com</p>
          </li>
          <li>
            <h4>Teléfono</h4>
            <p>+51 958 361 645</p>
          </li>
          <li>
            <h4>Dirección</h4>
            <p>Av. Siempre Viva 123, Jesús María, Lima</p>
          </li>
        </ul>
      </div>
      <div className="sched-sect">
        <h3>Nuestros Horarios</h3>
        <div className="sched-table">
          <table>
            <tbody>
              <tr>
                <td>
                  <h5>Lunes</h5>
                </td>
                <td>
                  <p>9:00 - 18:00</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Martes</h5>
                </td>
                <td>
                  <p>9:00 - 18:00</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Miercoles</h5>
                </td>
                <td>
                  <p>9:00 - 18:00</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Jueves</h5>
                </td>
                <td>
                  <p>9:00 - 18:00</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Viernes</h5>
                </td>
                <td>
                  <p>9:00 - 18:00</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Sábado</h5>
                </td>
                <td>
                  <p>9:00 - 18:00</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
