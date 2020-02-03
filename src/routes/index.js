import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Home from '~/pages/Home';
import NotificationsAdd from '~/pages/Notifications/add.js';
import HelpOrders from '~/pages/HelpOrders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/home" component={Home} isPrivate />

      <Route path="/notifications/add" component={NotificationsAdd} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
