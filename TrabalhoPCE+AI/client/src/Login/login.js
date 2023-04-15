import './login.css';
import axios from 'axios';

import React, { useState } from 'react';

//const React = require('react');
//const axios= require('axios');

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('cheguei')
    try {
      const response = await axios.post('http://localhost:8080/login', {
        email: email,
        password: password
      });
      console.log(response.data);
      setMessage('Login Sucessful');
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 401) {
        setMessage('Invalid email or password');
      } else {
        setMessage('Todos os campos têm de ser preenchidos');
      }
    }
  };

  return (
    <div class="login-wrapper">
      <div class="login-header">
        <h1>Login</h1>
      </div>
      <form class="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Email</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" required value={email} onChange={handleEmailChange} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required value={password} onChange={handlePasswordChange}/>
        <button type="submit">Login</button>
        <hr></hr>
        {message && <div>{message}</div>}
      </form>
    </div>
  );
}


export default LoginForm;