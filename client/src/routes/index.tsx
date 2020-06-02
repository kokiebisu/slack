import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Pages
import Landing from './Landing';
import Home from './Home';
import { Register } from './Register';
import { Login } from './Login';
import CreateTeam from './CreateTeam';
import GetStarted from './GetStarted';
import { FindTeam } from './FindTeam';
import SignIn from './SignIn';

// Util
import { isAuthenticated } from '../util/isAuthenticated';
import { Bye } from './Bye';

// const PrivateRoute = ({ component: any, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       isAuthenticated() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{ pathname: '/login', state: { from: props.location } }}
//         />
//       )
//     }
//   />
// );

export const Routes: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/bye' component={Bye} />
        <Route path='/client' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/signin' component={SignIn} />
        <Route exact path='/get-started/create' component={CreateTeam} />
        <Route exact path='/get-started/find' component={Login} />
        <Route exact path='/get-started' component={GetStarted} />
        <Route exact path='/find-team' component={FindTeam} />
        <Route path='/' component={Landing} />
      </Switch>
    </BrowserRouter>
  );
};
