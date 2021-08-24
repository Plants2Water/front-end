import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import { Switch, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Register from './Pages/Registration';
import './App.css';

// another comment
function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/register' component={Register}/>

        </Switch>
      </Router>

  );
}

export default App;
