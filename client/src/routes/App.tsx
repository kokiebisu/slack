import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import { Landing } from '../pages/Landing';

import { CreateRoutes } from './Create';

import { SignIn } from '../pages/SignIn';
import { GetStartedRoutes } from './GetStarted';
import { ClientRoutes } from './Client';
import { Logout } from '../pages/Logout';
import { Register } from '../pages/Register';

export const AppRoutes: React.SFC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/get-started' component={GetStartedRoutes} />
        <Route path='/create' component={CreateRoutes} />
        <Route path='/client/:id' component={ClientRoutes} />
        <Route path='/signin' component={SignIn} />
        <Route path='/logout' component={Logout} />
        {/* <Route path='/register' component={Register} /> */}
      </Switch>
    </BrowserRouter>
  );
};
