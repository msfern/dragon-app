import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../hooks/auth';
import PrivateRoute from './PrivateRoute';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import AddDragon from '../pages/AddDragon';

const Routes = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/dragons/new" component={AddDragon} />
          <PrivateRoute path="/dragons/:id" component={Details} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default Routes;
