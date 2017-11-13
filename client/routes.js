import React from 'react';
import { Router, hashHistory,Route, IndexRoute } from 'react-router';

import App from './components/App';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import requireAuth from './components/requireAuth';
import AddBehavior from './components/AddBehavior';
import EditBehavior from './components/EditBehavior';

export default (
            <Route path="/" component={App}>
              <Route path="login" component={LoginForm} />
              <Route path="signup" component={SignupForm} />
              <Route path="dashboard" component={requireAuth(Dashboard)} />
              <Route path="AddBehavior" component={requireAuth(AddBehavior)} />
              <Route path="EditBehavior/:id" component={requireAuth(EditBehavior)} />
            </Route>
);
