import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginContainer from '../containers/LoginContainer';
import CustomerContainer from '../containers/CustomerContainer';
import Customermapcontainer from '../containers/CustomerMapcontainer';
import DetailMachineMap from '../components/DetailMachineMap';
import DetailMachine from '../components/DetailMachine';

const App = () =>(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={LoginContainer} />
      <Route exact path='/traerLista' component={CustomerContainer} />
      <Route exact path='/traerMapa' component={Customermapcontainer} />
    </Switch>      
  </BrowserRouter>
);

export default App;