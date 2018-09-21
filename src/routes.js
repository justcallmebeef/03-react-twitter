import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Account from './components/Account';
import Navigation from './components/Navigation';
import App from './components/App';

export default (
  <div>
    <Navigation />
    <div>
      <Switch>
        <Route exact path={'/'} component={App} />
        <Route path={'/account'} component={Account} />
      </Switch>
    </div>
  </div>
);
