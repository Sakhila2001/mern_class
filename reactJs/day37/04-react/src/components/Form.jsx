import React, { useState } from "react";

const Form = ({ onRegister }) => {
  const [form, setForm] = useState({name: "",email: "",password: "",});

  const handleSubmit = () => {onRegister(form.name);};

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "50vh",}}>
      <div style={{display: "flex", flexDirection: "column", gap: "10px",width: "300px", }}>
        <input type="text" placeholder="Name" value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input type="email" placeholder="Email" value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input type="password" placeholder="Password" value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button onClick={handleSubmit}>Register</button>
      </div>
    </div>
  );
};

export default Form;
