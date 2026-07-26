import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Counter: {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>inc +</button>
        <button onClick={() => setCount(count - 1)}>dec -</button>
      </div>
      <h1>{count}</h1>
    </>
  );
};

export default Counter;
