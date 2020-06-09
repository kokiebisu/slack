import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import { Landing } from '../components/landing/layout';
import { CreateRoutes } from './Create';
import { GetStartedRoutes } from './GetStarted';
import { ClientRoutes } from './Workspace';
import { SignIn } from '../components/signin/layout';

export const AppRoutes: React.SFC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/get-started' component={GetStartedRoutes} />
        <Route path='/create' component={CreateRoutes} />
        <Route path='/client/:id' component={ClientRoutes} />
        <Route path='/signin' component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
};
