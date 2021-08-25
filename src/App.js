import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import { Switch, Route } from 'react-router-dom';
import Landing from './components/landing/Landing'
import Register from './components/Registration/Register';
import './App.css';

// another comment
function App() {
  return (
      <Router>
        <Switch>
          {/* <Route exact path='/' component={Landing}/> */}
          <Route exact path='/register' component={Register}/>
          <h1>Go localhost:3000/register to see Register Form</h1>

        </Switch>
      </Router>

  );
}

export default App;
