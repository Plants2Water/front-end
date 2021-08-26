import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import axios from 'axios';
import * as yup from 'yup';
import schema from "../validation/formSchema";

const initialFormValues = {
  username: '',
  password: '',
}
const initialDisabled = true
export default function Landing() {
  const [login, setLogin] = useState(initialFormValues);
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormValues)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postLogin = newLogin => {
    axios.post('https://bw-water-my-plants-01.herokuapp.com/api/auth/login', newLogin)
        .then(res =>{
          if (res.status >=200 && res.status<300){
          setLogin(res.data);
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
      [name]: value
    });
  }
  const formSubmit = () => {
    const newLogin = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    }
    postLogin(newLogin);
  }

  useEffect(() => {
    postLogin()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  const Logout = () => {
    setLogin(initialFormValues);
    console.log("LogOut");
  }
  
  return (
    <div className="Landing">
        <div>
          <h2>Welcome, <span>{login.username}</span></h2>
        </div>
        <LoginForm
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