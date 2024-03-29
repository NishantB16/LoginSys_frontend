import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleform = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {currentForm == "login" ? (
        <Login onFormSwitch={toggleform} />
      ) : (
        <Register onFormSwitch={toggleform} />
      )}
    </div>
  );
}

export default App;
