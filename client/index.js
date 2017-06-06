import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import client from './apolloClient/index';
import rootReducer from './reducers/index'
import routes from './routes';

const store = createStore(
  rootReducer,
  {}, // initial state
  compose(
      applyMiddleware(client.middleware()),
      // If you are using the devToolsExtension, you can add it here also
      (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
);

const Root = () => {
  return (
    <ApolloProvider store={store} client={client}>
      <Router history={hashHistory} routes={routes}/>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
