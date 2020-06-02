import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Pages
import { Logout } from './Logout';
import { Landing } from './Landing';
import { Home } from './Home';
import { Register } from './Register';
import { Login } from './Login';
import { CreateTeam } from './CreateTeam';
import { GetStarted } from './GetStarted';
import { FindTeam } from './FindTeam';
import { SignIn } from './SignIn';
import { TeamName } from './CreateTeam/TeamName';

export const Routes: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/logout' component={Logout} />
        <Route path='/client' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/signin' component={SignIn} />
        <Route path='/get-started/create' component={CreateTeam} />
        <Route path='/get-started/find' component={FindTeam} />
        <Route path='/login' component={Login} />
        <Route path='/get-started' component={GetStarted} />
        <Route path='/create' component={TeamName} />
      </Switch>
    </BrowserRouter>
  );
};
