import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ setAuth }) => {

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  });

  const {name, email, password} = inputs;

  const handleChange = e => {
    setInputs({
      ...inputs,
      [e.target.name] : e.target.value,
    })
  };

  const handleSubmit = async e => {
    e.preventDefault();
      const body = { name, email, password };
      console.log(email);
      const options = {
        headers: { "Content-Type": "application/json" }
      }
      const res = await axios.post('/auth/register', JSON.stringify(body), options);
      const token = res.data.token;
      console.log(token);
      localStorage.setItem('token', token);

      setAuth(true);
  }

  return (
    <>
      <h1 className="text-center my-5">Register</h1>
      <form onSubmit={e => handleSubmit(e)} className="my-3">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          className="form-control my-3"
          value={name}
          onChange={e => handleChange(e)}
        />
        <input
          type="email" 
          name="email" id="email"
          placeholder="email"
          className="form-control my-3"
          value={email}
          onChange={e => handleChange(e)}
        />
        <input 
          type="password" 
          name="password" id="" 
          placeholder="password" 
          className="form-control my-3"
          value={password}
          onChange={e => handleChange(e)}
        />
        <button className="btn btn-success btn-block">Submit</button>
      </form>
    </>
  )
}

export default Register
