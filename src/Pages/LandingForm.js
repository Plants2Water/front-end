import React, { useState } from 'react';
import { useHistory} from "react-router-dom";




export default function LoginForm ({Login, error}) {
  const [details, setDetails] = useState({
    username:'',
    password:''
  });
  // const [newUser, setNewUser] = useState('');
  

  
  const onChange = (e) =>{
    const { name, value } = e.target;
     setDetails({...details, [name]: value});
  };

  const onSubmit = e =>{
  e.preventDefault();
      Login(details);
    
  };

  const history = useHistory();
  const handleClick = () =>history.push('/register');
  
  return (
    <div>
      <form className='form container' onSubmit={onSubmit}>
        <div className='top'>
          <h2>Login</h2>
          {(error !== '') ? (<div className='error'>{error}</div>) : ''}
        </div>
        <div className='form-group inputs'>
          <label>Username 
            <input 
              type='text' 
              name='username' 
              value={details.username}
              onChange={onChange}
            />
          </label>
          <label>Password
            <input 
              type='password' 
              name='password' 
              value={details.password} 
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



