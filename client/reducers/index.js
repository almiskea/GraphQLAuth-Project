import { combineReducers } from 'redux';

import client from '../apolloClient/index';

const rootReducer = combineReducers({
    //todos: todoReducer,
    //users: userReducer,
    apollo: client.reducer(),
  });

export default rootReducer;
