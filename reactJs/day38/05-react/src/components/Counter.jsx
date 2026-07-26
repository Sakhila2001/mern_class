import React, { useState, useEffect, use } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  //running useEffect without dependency array
  useEffect(() => {
    //we write effect's code here
    console.log("My code is run after single render.....");
  });
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
