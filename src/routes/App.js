import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginContainer from '../containers/LoginContainer';
import CustomerContainer from '../containers/CustomerContainer';

const App = () =>(
  <BrowserRouter>
    <Switch>
    <Route exact path='/' component={LoginContainer} />
    <Route exact path='/maquinas' component={CustomerContainer} />
    </Switch>      
  </BrowserRouter>
);

export default App;