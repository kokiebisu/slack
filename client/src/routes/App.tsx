import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Routes
import { CreateRoutes } from 'routes/Create';
import { GetStartedRoutes } from 'routes/GetStarted';
import { ClientRoutes } from 'routes/Workspace';

// Pages
import { Landing } from 'pages/Landing';
import { SignIn } from 'pages/Signin';
import { FindTeam } from 'pages/FindTeam';

import { DirectMessagePage } from 'components/Workspace/Page/DirectMessage';

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
        <Route path='/w' component={DirectMessagePage} />
      </Switch>
    </BrowserRouter>
  );
};
