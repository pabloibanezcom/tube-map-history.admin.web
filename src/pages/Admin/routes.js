import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Draft from './Draft/Draft';
import Overview from './Overview/Overview';

const routes = path => (
  <Switch>
    <Route path={`${path}/draft/:draftId`} exact component={Draft} />
    <Route path={`${path}/`} component={Overview} />
    <Redirect to={`${path}/`} />
  </Switch>
);

export default routes;
