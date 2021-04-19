import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = ({ setAuth }) => {

  const [name, setName] = useState('');

  const options = {
    headers: { "token": localStorage.token }
  }

  const getName = async () => {
    const res = await axios.get('/dashboard/', options);
    const name = res.data.name
    setName(name);
  }

  useEffect(() => {
    getName();
  });

  const logout = e => {
    e.preventDefault(e);
    localStorage.removeItem('token')
    setAuth(false)
  }

  return (
    <>
      <h1 className="my-5 ">Dashboard {name}</h1>
      <button className="btn btn-primary" onClick={e => logout(e)}>Logout</button>
    </>
  )
}

export default Dashboard
