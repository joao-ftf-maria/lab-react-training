import React from 'react';
import './Greetings.css';

const Greetings = (props) => {
  let greeting;

  switch (props.language) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    case 'en':
      greeting = 'Hello';
      break;
    case 'es':
      greeting = 'Hola';
      break;
    default:
      greeting = 'Olá';
  }

  return (
    <div className="greetings-card">
      <h5>
        {greeting} {props.children}
      </h5>
    </div>
  );
};

export default Greetings;
