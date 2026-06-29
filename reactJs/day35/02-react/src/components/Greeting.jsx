import React from "react";

function Greeting({ name }) {
    const time= new Date().toLocaleTimeString();
  return (
    <>
      <h1>Hello, {name}</h1>
      <p>What is your current time? {time}</p>
    </>
  );
}

export default Greeting;
