import "./App.css";
import React from "react";
import { LoginForm } from "./LoginForm/LoginForm";

export function App() {
  console.log("App rendered");
  return (
    <div className="App">
      <LoginForm/>

      
    </div>
  );
}
