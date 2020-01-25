/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Draft from './Draft/Draft';
import MyProfile from './MyProfile/MyProfile';
import Overview from './Overview/Overview';
import Towns from './Towns/Towns';

const AdminRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        user && user.authLevel === 'admin' ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  );
};

const routes = (path, user) => (
  <Switch>
    <Route path={`${path}/draft/:draftId`} exact component={Draft} />
    <Route path={`${path}/my-profile`} component={MyProfile} />
    <Route path={`${path}/drafts`} component={Overview} />
    <AdminRoute path={`${path}/towns`} component={Towns} user={user} />
    <Redirect to={`${path}/drafts`} />
  </Switch>
);

export default routes;
