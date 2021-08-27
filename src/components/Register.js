import React, { useState, useEffect } from 'react';
import RegForm from './RegForm';
import axios from 'axios';
import * as yup from 'yup';
import schema from '../../validation/formSchema';




const initialFormValues = {
  username: '',
  first_name: '',
  last_name: '',
  password: '',
  telephone: '',
  email: '',
}

const initialDisabled = true

export default function Register() {
  const [user, setUser] = useState(initialFormValues);
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormValues)
  const [disabled, setDisabled] = useState(initialDisabled)


  const postNewUser = newUser => {
    axios.post('https://bw-water-my-plants-01.herokuapp.com/api/auth/register', newUser)
        .then(res =>{
          if (res.status >=200 && res.status<300){
            setUser(res.data);
             window.location.href = "/register"
            console.log("res---", res);
          }
        }).catch(err => console.error(err));
        setFormValues(initialFormValues);
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]})) 
  }
  const inputChange = (name, value) => {
    validate(name, value);
    
    
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    });
  }


  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      password: formValues.password.trim(),
      telephone: formValues.telephone.trim(),
      email: formValues.email.trim(),
    }
    postNewUser(newUser);
  }
  useEffect(() => {
    postNewUser()
  }, [])
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  

  const Logout = () => {
    setUser({ username: '', password:'' });
    console.log("LogOut");
  }

  return (
    <div className="Landing">
      <div>
        <h2>Welcome, <span>{user.username}</span></h2>
        
      </div>
    
      <RegForm 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      <div>
        <button onClick={Logout}>Logout</button>
      </div>
    </div>
  );
}


