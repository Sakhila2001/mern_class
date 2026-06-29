import { useState } from "react";
import "./App.css";
import Cup2 from "./components/Cup2";
import InputValue from "./components/InputValue";
function App() {
  const submit = (e) => {
    console.log(e.target.value);
  };

  return (
    <InputValue value={30} onChange={submit} placeholder="Enter a number" />
  );
}
export default App;
