import { useState } from "react";
import "./App.css";
import Child from "./components/child";
import Child1 from "./components/child1";
import Child2 from "./components/Child2";
import GetName from "./components/GetName";

function App() {
  const users = ["rakesh", "umesh"];
  const showUserName = (name) => {
    alert(`hello, ${name}`);
  };
  return (
    <>
      {/* <Child />
      <Child1 product="Dell Laptop" price="NPR 90,000" /> */}
      {/* <h1>Parent Component</h1>

      <Child2 product="MacBook Pro" price="NPR 100,000" /> */}
      <div>
        {users.map((user, index) => (
          <GetName key={index} name={user} onSendName={showUserName} />
        ))}
      </div>
    </>
  );
}

export default App;
