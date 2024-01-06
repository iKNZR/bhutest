import React, { useState } from "react";

const Questions = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleAnswer = (questionNumber) => {
    setOpenQuestion(openQuestion === questionNumber ? null : questionNumber);
  };

  return (
    <div>
      <h3>Preguntas Frecuentes</h3>
      <div className="question">
        <div className="questions">
          {[1, 2, 3, 4, 5].map((questionNumber) => (
            <div key={questionNumber}>
              <h4 onClick={() => toggleAnswer(questionNumber)}>
                ¿Pregunta frecuente {questionNumber}?{" "}
              </h4>
              {openQuestion === questionNumber && (
                <p>
                  No sé qué poner en esta sección pero asumamos que es la
                  respuesta de la pregunta de arriba así que agregaré un loren
                  ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              )}
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
