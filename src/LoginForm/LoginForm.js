import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

// React uses virtual DOM to compare the new state of the DOM tree with the old state
//DOM is Document Object Model
//useNavigate is a hook that allows us to navigate to a new route
//useNavigate === useHistory
export const LoginForm = () => {
  console.log('Login form rendered');
  const user = {username: 'Admin', password: 'Admin'};
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  <script>var Alert = ReactBootstrap.Alert;</script>
  const handleLogin = (event) => {
    if (username === user.username && password === user.password) {
      navigate("/Clothing/Admin");
    } else {
      navigate("/Clothing/Visitor");
    }
  };
  
  //useState is a hook (js function) that returns an array with two elements
  // (data and a function to update the data)

  const form = (
    <div className="login-form">
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <Button
        disabled={username.length === 0 || password.length === 0}
        onClick={handleLogin} variant="primary"
      >
        Login
      </Button>
    </div>
  );
  //username = 'bobby' - WRONG
  return form;
};
