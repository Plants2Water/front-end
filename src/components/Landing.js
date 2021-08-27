import React from 'react';
import LoginForm from './LoginForm';
import { Redirect } from 'react-router-dom';
import { setUserID } from './../actions/plantActions'
import { connect } from 'react-redux';
import axios from 'axios';

const Landing = (props) => {
  const login = (credentials) => {
    axios.post('https://bw-water-my-plants-01.herokuapp.com/api/auth/login',credentials)
    .then(res => {
      if (res.status >=200 && res.status<300){
      localStorage.setItem('token', res.data.token)
      props.setUserID(res.data.user_id)
      window.location.href = '/dashboard'
      } else {
      localStorage.removeItem('token')
      }
    })
    .catch(err => console.log(err))
  } 
  // const [login, setLogin] = useState(initialFormValues)
  

  // const postLogin = newLogin => {
  //   axios.post('https://bw-water-my-plants-01.herokuapp.com/api/auth/login', newLogin)
  //       .then(res =>{
  //         if (res.status >=200 && res.status<300){
  //         setLogin(res.data);
  //         console.log("res---", res);
  //         }
  //       }).catch(err => console.error(err));
  //       setFormValues(initialFormValues);
  // }
  
  
  

  // useEffect(() => {
  //   postLogin()
  // }, [])

  

  const logout = () => {
    // setLogin(initialFormValues)
    console.log('logout') //never seems to reach this
    localStorage.removeItem('token')
    return <Redirect to ='/' />
  }
  // console.log('Landing props :>> ', props);
  return (
    <div className="Landing">
        <div>
           <h1>Plants!</h1>  
        </div>
        <LoginForm login={login} />
        <div>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user_id: state.user_id
  }
}

export default connect(mapStateToProps,{setUserID})(Landing)