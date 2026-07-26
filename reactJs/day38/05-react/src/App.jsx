import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Counter from "./components/counter";
import Counter1 from "./components/Counter1";
import Search from "./components/Search";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <Counter1 /> */}
      {/* <Search /> */}
      <Profile />
    </>
  );
}

export default App;
