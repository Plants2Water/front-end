import React, { useState, useEffect } from 'react';
import { useHistory} from "react-router-dom";
import * as yup from 'yup';
import schema from "../validation/formSchema";

const initialFormValues = {
  username: '',
  password: '',
}

const initialDisabled = true

const LoginForm = (props) => {
  const { login } = props

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormValues)
  const [disabled, setDisabled] = useState(initialDisabled)

  const formSubmit = () => {
    const credentials = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    }
    login(credentials);
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  const onSubmit = e =>{
    e.preventDefault();
    if(disabled){
      console.log('disabled')
    } else
    {
      console.log('not disabled')
    }
    formSubmit();
  };

  const onChange = (e) =>{
    const { name, value , checked, type} = e.target;
    const valueToUse = type === 'input' ? checked : value;
    inputChange(name, valueToUse);
  };

  const history = useHistory();
  const handleClick = () =>history.push('/register');
  return (
    <div>
      <form className='form container' onSubmit={onSubmit}>
        <div className='top'>
          <h2>Login</h2>
          <div className='errors'>
            <div>{formErrors.username}</div>
            <div>{formErrors.password}</div>
          </div>
        </div>
        <div className='form-group inputs'>
          <label>Username
            <input
              type='text'
              name='username'
              value={formValues.username}
              onChange={onChange}
            />
          </label>
          <label>Password
            <input
              type='password'
              name='password'
              value={formValues.password}
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

export default LoginForm