import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import AddDragon from '../pages/AddDragon';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/dragons/new" component={AddDragon} />
        <Route path="/dragons/:id" component={Details} />
      </Switch>
    </Router>
  );
};

export default Routes;
