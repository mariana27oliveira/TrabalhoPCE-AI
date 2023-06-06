import './sigin.css';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function SigninForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/signIn', {
        email: email,
        password: password
      });
      if (response.data.success) {
        setMessage('Account created successfully');
        navigate('/login');
      } else {
        setMessage(response.data.info);
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred');
    }
  };

  return (
    <div>
      <Navbar/>
    <div className="signup-wrapper">
      <div className="signup-header">
        <h1>Criar Conta</h1>
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required value={name} onChange={handleNameChange} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required value={email} onChange={handleEmailChange} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required value={password} onChange={handlePasswordChange} />
        <label htmlFor="confirmPassword">Confirmar Password</label>
        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" required value={confirmPassword} onChange={handleConfirmPasswordChange} />
        <button type="submit">Criar Conta</button>
        {message && <div>{message}</div>}
      </form>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <Footer/>
    </div>
  );
}

export default SigninForm;
