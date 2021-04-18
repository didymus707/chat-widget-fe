import React, { useState } from 'react';
// import axios from 'axios';
import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Redirect
} from 'react-router-dom';
import './App.css';
import Register from './components/Register'
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  // const [users, setUsers] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const axiosInstance = axios.create({
  //   baseURL: 'http://localhost:5000',
  // });

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  }

  // const getData = async () => {
  //   try {
  //     const req = await axiosInstance.get('/api/get/users');
  //     const res = await req.data;
  //     setUsers(res)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getData();
  // })

  return (
    <>
      <Router>
        <div className="container">
          <Switch>
            <Route 
              exact
              path='/register' 
              render={props => !isAuthenticated ? <Register {...props} setAuth={setAuth} /> : <Redirect to='/login' />} 
            />
            <Route 
              exact 
              path='/login' 
              render={props => !isAuthenticated ? <Login {...props} setAuth={setAuth} /> : <Redirect to='/dashboard' />}
            />
            <Route 
              exact
              path='/dashboard' 
              render={props => isAuthenticated ? <Dashboard {...props} setAuth={setAuth} /> : <Redirect to='/login' />} 
            />
          </Switch>
        </div>
      </Router>

      {/* <div className="users">
        <h1>Users</h1>
        {users}
        {console.log(users)}
      </div> */}
    </>
  )
}

export default App;