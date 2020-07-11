import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Routes
import { CreateRoutes } from './Create';
import { GetStartedRoutes } from './GetStarted';
import { ClientRoutes } from './Workspace';

// Pages
import { Landing } from '../components/landing/layout';
import { SignIn } from '../components/signin/layout';
import { FindTeam } from '../components/findteam/layout';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/get-started' component={GetStartedRoutes} />
        <Route path='/create' component={CreateRoutes} />
        <Route path='/client/:teamId' component={ClientRoutes} />
        <Route path='/signin' component={SignIn} />
        <Route path='/your-workspaces/:token' component={FindTeam} />
        <Route path='/findteam' component={FindTeam} />
      </Switch>
    </BrowserRouter>
  );
};
