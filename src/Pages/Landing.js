import React, { useState } from 'react';
import LoginForm from './LandingForm'
// import axios from 'axios';





export default function Landing() {
  const adminUser = {
    username: 'testing',
    password: 'admintesting'
  }



  const [user, setUser] = useState({username: '', password:''});
  const [error, setError] = useState('');

  const Login = details => {
    console.log("details---", details);

    if (details.username === adminUser.username && details.password === adminUser.password){      console.log('Logged in');
      setUser({
        username: details.username,
        password: details.password,
      });
      } else { 
        console.log('Details do not match'); 
        setError ('Username or Password invalid');
    }
  }

  

  // const postLogin = newLogin => {
  //   axios.post('https://bw-water-my-plants-01.herokuapp.com/api/auth/login', login)
  //       .them(res =>{
  //         setUser([res.data, ...user]);
  //       }).catch(err => console.error(err));
  // }
  // const validate = (name, value) => {
  //   yup.reach(schema, name)
  //     .validate(value)
  //     .then(() => setFormErrors({ ...formErrors, [name]: '' }))
  //     .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]})) 
  // }
  // const inputChange = (name, value) => {
  //   validate(name, value);
  // }

  


  const Logout = () => {
    setUser({ username: '', password:'' });
    console.log("LogOut");
  }

  return (
    <div className="Landing">
      {(user.username !== '') ? (
        <div>
          <h2>Welcome, <span>{user.username}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ): (
        <LoginForm Login={Login} error={error}/>
      )}
      
    </div>
  );
}


