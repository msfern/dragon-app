import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
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
        <ToastProvider>
          <Switch>
            <Route path="/" exact component={SignIn} />
            <PrivateRoute path="/dashboard" exact component={Dashboard} />
            <PrivateRoute path="/dragons/new" exact component={AddDragon} />
            <PrivateRoute path="/dragons/:id" exact component={Details} />
          </Switch>
        </ToastProvider>
      </Router>
    </AuthProvider>
  );
};

export default Routes;
