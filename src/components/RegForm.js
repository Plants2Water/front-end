import React, { useState, useEffect } from 'react';
import { useHistory} from "react-router-dom";
// import { registerUser } from '../actions/userAction';
import { connect } from 'react-redux';
import schema from '../validation/formSchema';
import * as yup from 'yup';
import { registerUser } from '../actions/userActions';

const RegForm = (props) => {
  console.log('RegForm props :>> ', props);
  const {
    // values,
    // submit,
    // change,
    // disabled,
    // errors,
  } = props

  const initialValues = {
    "username": "", 
    "password": "", 
    "last_name": "", 
    "first_name": "", 
    "telephone": "", 
    "email": ""
  }
  
  const initialErrors = {
    "username": "", 
    "password": "", 
    "last_name": "", 
    "first_name": "", 
    "telephone": "", 
    "email": ""
  }

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const { push } = useHistory();


  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    const { name, value } = e.target;
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: '',
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
  };
  
  const onSubmit = e =>{
  e.preventDefault();
      submit();
  };
  // const onChange = (e) =>{
  //   const { name, value , checked, type} = e.target;
  //   const valueToUse = type === 'input' ? checked : value;
  //    change(name, valueToUse);
  // };
  const history = useHistory();
  const handleClick = () =>history.push('/');

  const submit = async () => {
    // e.preventDefault();
    const creds = {
      username: values.username.trim(),
      password: values.password.trim(),
      last_name: values.username.trim(),
      first_name: values.password.trim(),
      telephone: values.email.trim(),
      email: values.email.trim(),
    };
    await props.registerUser(creds);
    push('/login');
  };
  useEffect(() => {
    schema.isValid(values).then((valid) => {
      // setDisabled(!valid);
    });
  }, [values]);


  return (
    <div>
      <form className='form container' onSubmit={onSubmit}>
        <div className='top'>
          <h2>Join Water Plants App  </h2>
          <div className='errors'>
          <div>{errors.username}</div>
          <div>{errors.first_name}</div>
          <div>{errors.last_name}</div>
          <div>{errors.email}</div>
          <div>{errors.telephone}</div>
          <div>{errors.password}</div>
        </div>
        </div>
        <div className='form-group inputs'>
          <label>Username
            <input
              type='text'
              name='username'
              value={values.username}
              onChange={onChange}
            />
          </label>
          <label>First Name
            <input
              type='text'
              name='first_name'
              value={values.first_name}
              onChange={onChange}
            />
          </label>
          <label>Last Name
            <input
              type='text'
              name='last_name'
              value={values.last_name}
              onChange={onChange}
            />
          </label>
          <label>Telephone
            <input
              type='text'
              name='telephone'
              value={values.phone}
              onChange={onChange}
            />
          </label>
          <label>e-mail
            <input
              type='email'
              name='email'
              value={values.email}
              onChange={onChange}
            />
          </label>
          <label>Password
            <input
              type='password'
              name='password'
              value={values.password}
              autoComplete='current-password'
              onChange={onChange}
            />
          </label>
        </div>
        <button type='submit' value='login' name='login' id='login-button' onClick={onSubmit}> Register Here</button>
      </form>
      <div className='form container'>
        <label> Already a Member?
          <button onClick={handleClick}>Login</button>
        </label>
      </div>
    </div>
  )
}

export default connect(null, { registerUser })(RegForm);
