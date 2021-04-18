// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import React, { useState } from 'react';
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

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  }

  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/users')
  //     .then(res => {
  //       const { data } = res;
  //       setUsers(data);
  //     });
  // }, [])

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
        <ul>
          {users.map((user, i) => {
            return (
              <li key={i}>
                <span>{user.aid}</span>
                <span>{user.name}</span>
                <span>{user.email}</span>
              </li>
              )
            }
          )}
        </ul>
      </div> */}
    </>
  )
}

export default App;