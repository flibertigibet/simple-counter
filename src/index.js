import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducer from 'redux/reducer';
import App from './app';

import persistState from 'redux-localstorage';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import './bootstrap/css/bootstrap.min.css';
import './main.css';

// const store = createStore(reducer);
const loggerMiddleware = createLogger();

const store = createStore(
  combineReducers({
    reducer,
    routing: routerReducer,
  }),
  undefined,
  compose(
    persistState('reducer', {
      slicer: (paths) => (state) => {
        return state.reducer;
      },
    }),
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      // loggerMiddleware // neat middleware that logs actions
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const history = syncHistoryWithStore(browserHistory, store);
const node = document.createElement('div');

node.setAttribute('id', 'node');
document.body.appendChild(node);

// const renderCount = () => {
render(
  <Provider store = {store}>
    <App history={history} />
  </Provider>,
  node
);
// };
// renderCount();
// store.subscribe(renderCount);
