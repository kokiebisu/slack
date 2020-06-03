import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import { Landing } from '../pages/Landing';

import { CreateRoutes } from './Create';

import { SignIn } from '../pages/SignIn';
import { GetStartedRoutes } from './GetStarted';
import { ClientRoutes } from './Client';
import { Logout } from '../pages/Logout';

interface Props {}

export const AppRoutes: React.SFC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/get-started' component={GetStartedRoutes} />
        <Route path='/create' component={CreateRoutes} />
        <Route path='/client' component={ClientRoutes} />
        <Route path='/signin' component={SignIn} />
        <Route path='/logout' component={Logout} />
      </Switch>
    </BrowserRouter>
  );
};
