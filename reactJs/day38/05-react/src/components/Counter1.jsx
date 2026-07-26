import React, { useState, useEffect, use } from "react";

const Counter1 = () => {
  const [count, setCount] = useState(0);
  //running useEffect with dependency array
  useEffect(() => {
    //we write effect's code here
    console.log("My code is run after single render.....");
  }, []);
  return (
    <>
      <h1>Counter</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <p>Count: {count}</p>
    </>
  );
};

export default Counter1;
