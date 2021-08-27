import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './components/Dashboard';
import AddPlant from './components/AddPlant';
import EditPlant from './components/EditPlant';
import RegForm from './components/RegForm';
import Landing from './components/Landing'
import './App.css';

// const initialUserValues = [{
//   "user_id": 2, 
//   "username": "brownthumb", 
//   "password": "$2a$08$tjE6ebEFy7n7zUjsjD2IO.jilGy.RsS8dQEdJgk70XeDrKpnSVVtK", 
//   "last_name": "Jones", 
//   "first_name": "Pesticide", 
//   "telephone": "(208)-382-6786", 
//   "email": "brownie@kill.com", 
//   "created_at": "2021-08-23T14:42:11.045Z", 
//   "updated_at": "2021-08-23T14:42:11.045Z"
// }]

function App() {
  const register = (userData) => {
    axios
      .post('https://bw-water-my-plants-01.herokuapp.com/api/auth/register', userData)
      .then(res => console.log(res))
      .catch(err => {
        localStorage.removeItem("token")
        console.log(err)
      })
  }

  return (
    <Router>
    <div className="App">
        {/* {localStorage.getItem('token') && <div>
          <Link to='/dashboard'>Dashboard</Link></div>} */}
        {/* <PrivateRoute path='/dashboard' component={Dashboard} /> */}
        <PrivateRoute path='/addplant' component={AddPlant} />
        <PrivateRoute path='/editplant' component={EditPlant} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <Route path='/register'>
          <RegForm register={register} />
        </Route>
        <Route exact path='/' component={Landing} />
    </div>
    </Router>
  );
}

export default App;
