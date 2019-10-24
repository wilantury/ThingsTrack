import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginContainer from '../containers/LoginContainer';

const App = () =>(
  <BrowserRouter>
    <Switch>
    <Route exact path='/login' component={LoginContainer} />
    </Switch>      
  </BrowserRouter>
);

export default App;