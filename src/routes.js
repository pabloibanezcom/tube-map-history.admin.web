import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import Login from './pages/Auth/Login/Login';

const routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/admin" component={Admin} />
    <Redirect to="/admin" />
  </Switch>
);

export default routes;
