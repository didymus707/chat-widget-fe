import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  }

  const isAuth = async () => {
    const options = {
      headers: { "token": localStorage.token }
    }
    const res = await axios.get('/auth/is-verified', options);

    res.data ? setIsAuthenticated(true) : setIsAuthenticated(false);
  }

  useEffect(() => {
    isAuth();
  }, [])
  
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