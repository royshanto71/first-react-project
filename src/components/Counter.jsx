import React, { useState } from "react";

const Counter = () => {
  // state
  const [count, setCount] = useState(0);

  // event handlers
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div className="container">
      <h1>Counter App</h1>

      <div>Count: {count}</div>

      <div className="container">
        <button onClick={handleIncrement}>+1</button>

        <button onClick={handleDecrement}>-1</button>

        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
