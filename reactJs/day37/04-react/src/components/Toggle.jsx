import React, { useState } from "react";

const Toggle = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <h1>Toggle</h1>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {/* conditional rendering */}
      {isVisible && <p>Hello there. I am hidden</p>}
    </div>
  );
};

export default Toggle;
