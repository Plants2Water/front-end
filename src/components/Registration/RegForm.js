import React from 'react';
import { useHistory} from "react-router-dom";




export default function RegForm (props) {
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
  const handleClick = () =>history.push('/');
  
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
