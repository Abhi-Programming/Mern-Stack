import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Users from './user/pages/users'
import NewPlaces from './Places/pages/NewPlaces'

import './App.css';

function App() {
  return <Router>
    <Switch>
      <Route path="/" exact>
        <Users />
      </Route>

      <Route path="/NewPlaces/New" exact>
        <NewPlaces />
      </Route>
      
      <Redirect to="/" />
    </Switch>
  </Router>;
}

export default App;
