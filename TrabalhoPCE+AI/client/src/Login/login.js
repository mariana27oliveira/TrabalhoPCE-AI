import './login.css';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login', {
        email: email,
        password: password
      });
      if (response.data.success) {
        setMessage('Login Successful');
        navigate('/formulario');
      } else {
        setMessage(response.data.info);
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-header">
        <h1>Login</h1>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Email</label>
        <input type="text" id="email" name="email" placeholder="Enter your email" required value={email} onChange={handleEmailChange} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required value={password} onChange={handlePasswordChange} />
        <button type="submit">Login</button>
        <hr></hr>
        {message && <div>{message}</div>}
      </form>
    </div>
  );
}

export default LoginForm;
