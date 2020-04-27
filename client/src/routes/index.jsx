import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import decode from 'jwt-decode';

// Pages
import Landing from './Landing';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import CreateTeam from './CreateTeam';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');
  try {
    decode(token);
    decode(refreshToken);
  } catch (err) {
    return false;
  }

  return true;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
        <PrivateRoute path='/createteam' exact component={CreateTeam} />
        <PrivateRoute path='/home' exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
