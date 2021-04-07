import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [all, setAll] = useState(null);

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
  });

  const getData = async () => {
    try {
      const request = await axiosInstance.get('/all');
      const response = await request.data;
      setAll(response);
  
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  })

  return (
    <div>
      { all ? <div>{ all }</div> : null }
    </div>
  )
}

export default App;