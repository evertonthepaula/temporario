import React from 'react';
import { Router, Switch } from 'react-router-dom';

import Route from './Route';
import history from '../services/history';

import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import Landing from '../pages/Landing';
import AddAviso from '../pages/addAviso';

export default () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={SignIn} exact />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/perfil" component={Profile} isPrivate />
      <Route path="/signup" component={SignUp} />
      <Route path="/Landing" component={Landing} />
      <Route path="/addAviso" component={AddAviso} />

      <Route path="/" component={() => <p>404</p>} />
    </Switch>
  </Router>
);
