import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import Form from "./components/Form";

function App() {
  const showRegisterMessage = (name) => {
    alert(`${name} is registered successfully!`);
  };

  return (
    <>
      {/* <Counter /> */}
      {/* <Toggle /> */}
      <h1>Register Form</h1>
      <Form onRegister={showRegisterMessage} />
    </>
  );
}

export default App;
