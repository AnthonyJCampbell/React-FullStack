import React from 'react';

const Counter = (props) => {
  const {counter,handleDecrement,handleIncrement,handleReset} = props
  return (
    <section className="Counter">
      <h1>Count: {counter}</h1>
      <button onClick={handleIncrement} className="full-width">Increment</button>
      <button onClick={handleDecrement} className="full-width">Decrement</button>
      <button onClick={handleReset} className="full-width">Reset</button>
    </section>
  );
};

export default Counter;