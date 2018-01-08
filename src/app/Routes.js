import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/main';

const Routes = () => (
  <Router>
    <Switch>
      <Route render={() => <MainPage />} />
    </Switch>
  </Router>
);

export default Routes;
