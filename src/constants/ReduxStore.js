import combineReducers from '../reducers/combineReducers';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import {composeWithDevTools} from 'redux-devtools-extension';

const middleware = [thunk];

if (__DEV__) {
  middleware.push(createLogger());
}

export const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(...middleware)),
);
