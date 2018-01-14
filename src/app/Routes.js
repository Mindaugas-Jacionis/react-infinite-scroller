import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainPage } from './pages';

const Routes = () => (
  <Router>
    <Switch>
      <Route component={MainPage} />
    </Switch>
  </Router>
);

export default Routes;
