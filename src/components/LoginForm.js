import React, { useState } from 'react';
import { useHistory} from "react-router-dom";
import { connect } from 'react-redux';
import { login } from '../actions/userActions';

const LoginForm = (props) => {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props
  const onSubmit = e =>{
  e.preventDefault();
      submit();
  };
  const onChange = (e) =>{
    const { name, value , checked, type} = e.target;
    const valueToUse = type === 'input' ? checked : value;
     change(name, valueToUse);
  };
  const history = useHistory();
  const handleClick = () =>history.push('/register');
  return (
    <div>
      <form className='form container' onSubmit={onSubmit}>
        <div className='top'>
          <h2>Login</h2>
          <div className='errors'>
            <div>{errors.username}</div>
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
        <button type='submit' value='login' name='login' id='login-button' onClick={onSubmit}> Login</button>
      </form>
          <div className='form container'>
            <label> Don't Have An Account?
              <button onClick={handleClick}>Register here</button>
            </label>
          </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  credentials: state.credentials
}

export default connect(mapStateToProps,{login})(LoginForm)