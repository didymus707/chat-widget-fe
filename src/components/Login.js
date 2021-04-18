import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = ({ setAuth }) => {

  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const { email, password } = inputs;

  const handleChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const body = { email, password };
    const options = {
      headers: { "Content-Type": "application/json" }
    }
    const res = await axios.post('/auth/login', JSON.stringify(body), options);
    const token = res.data.token;
    
    localStorage.setItem('token', token);

    setAuth(true);
  }

  return (
    <>
      <h1 className="text-center my-5">Login</h1>
      <form onSubmit={e => handleSubmit(e) } className="my-3">
        <input 
          type="email" 
          name="email" 
          id="email"
          placeholder="email"
          className="form-control my-3"
          value={email}
          onChange={e => handleChange(e)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="form-control my-3"
          value={password}
          onChange={e => handleChange(e)}
        />
        <button className="form-control btn btn-success btn-block">Login</button>
      </form>
      <Link to="/register">Register</Link>
    </>
  )
}

export default Login
