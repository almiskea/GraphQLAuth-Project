import React from 'react';
import { Router, hashHistory,Route, IndexRoute } from 'react-router';

import App from './components/App';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import requireAuth from './components/requireAuth';

export default (
            <Route path="/" component={App}>
              <Route path="login" component={LoginForm} />
              <Route path="signup" component={SignupForm} />
              <Route path="dashboard" component={requireAuth(Dashboard)} />
            </Route>
);
