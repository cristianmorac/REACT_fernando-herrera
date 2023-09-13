import PropTypes from "prop-types";
import { useState } from "react";

// componente
export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(0);

  const handleAdd = (event) => {
    setCounter(counter + 1);
  };

  const handleSubstract = () => setCounter( counter -1)
  const handleReset = () => setCounter(value)

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      {/* SI se envia la misma variable a la otra funcion en onclick
      solo se debe colocar el nombre de la función dentro de onlcick */}
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

// PropTypes
CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};


