import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './components/Dashboard';
import './App.css';
import Register from './components/Register';

const initialPlantValues = [{
  "plant_id": 0,
  "species": "",
  "nickname": "",
  "h2oFrequency": 0,
  "last_watered": "",
  "photo_url": "",
  "notes": "",
  "user_id": 0,
  "created_at": "",
  "updated_at": ""
}]

const initialUserValues = [{
  "user_id": 2, 
  "username": "brownthumb", 
  "password": "$2a$08$tjE6ebEFy7n7zUjsjD2IO.jilGy.RsS8dQEdJgk70XeDrKpnSVVtK", 
  "last_name": "Jones", 
  "first_name": "Pesticide", 
  "telephone": "(208)-382-6786", 
  "email": "brownie@kill.com", 
  "created_at": "2021-08-23T14:42:11.045Z", 
  "updated_at": "2021-08-23T14:42:11.045Z"
}]

const initialCreds = {
  username:'',
  password:''
}

function App() {
  // const [plants, setPlants] = useState(initialPlantValues)
  // const [users, setUsers] = useState(initialUserValues)
  // const [credentials, setCredentials] = useState(initialCreds)

  // useEffect(() => {
  //   axios.get('https://bw-water-my-plants-01.herokuapp.com/api/users')
  //   .then(res => {
  //     console.log(res.data)
  //     setUsers(res.data)
  //   })
  //   .catch(err => console.log(err))
  // },[])

  // const login = (e) => {
  //   e.preventDefault()
  //   if (credentials.username==='Lambda' && credentials.password==='School') {
  //   axios.post('https://bw-water-my-plants-01.herokuapp.com/api/auth/login',credentials)
  //   .then(res => {
  //     localStorage.setItem('token', res.data.payload)
  //     console.log(res.message)
  //   })
  //   .catch(err => console.log(err))
  //   } 
  // }

  return (
    <Router>
    <div className="App">
        
        <h1>Plants!</h1>

        <Link to='/login'>Log In</Link>
        {localStorage.getItem('token') && <div>
          <Link to='/dashboard'>Dashboard</Link></div>}

        <Switch>
          <PrivateRoute path='/dashboard' component={Dashboard} />
           {/* <Route exact path='/' component={Landing}/> */}
           <Route exact path='/register' component={Register}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
