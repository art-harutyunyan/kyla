import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value); // []

  // handleAdd
  const handleAdd = () => {
    setCounter(counter + 1);
    // setCounter( (c) => c + 1 );
  };

  const handleSubtract = () => setCounter(counter - 1);

  const handleReset = () => setCounter(value);

  return (
    <>
      <h1 data-cy="pageTitle">CounterApp</h1>
      <h2 data-cy="counter"> {counter} </h2>

      <button data-cy="increment" onClick={handleAdd}>
        +1
      </button>
      <button data-cy="resetCounter" onClick={handleReset}>
        Reset
      </button>
      <button data-cy="decrement" onClick={handleSubtract}>
        -1
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
