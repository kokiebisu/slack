import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Pages
import Landing from './Landing';
import Home from './Home';
import { Register } from './Register';
import Login from './Login';
import CreateTeam from './CreateTeam';
import GetStarted from './GetStarted';
import FindTeam from './FindTeam';
import SignIn from './SignIn';

// Util
import { isAuthenticated } from '../util/isAuthenticated';

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
        <Route path='/client' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/signin' component={SignIn} />
        <Route exact path='/get-started/create' component={CreateTeam} />
        <Route exact path='/get-started/find' component={FindTeam} />
        <Route exact path='/get-started' component={GetStarted} />
        <Route path='/' component={Landing} />
      </Switch>
    </BrowserRouter>
  );
};
