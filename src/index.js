import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducer from 'redux/reducer';
import App from 'app';

import './bootstrap/css/bootstrap.min.css';
import './main.css';

const store = createStore(reducer);

const renderCount = () => {
  render(
    <App
      value={store.getState()}
      onIncrement={() => store.dispatch({type: 'INCREMENT'})}
      onDecrement={() => store.dispatch({type: 'DECREMENT'})}
      onAddCounter={() => store.dispatch({type: 'ADDCOUNTER'})}
    />,document.getElementById('app')
  );
};
renderCount();
store.subscribe(renderCount);
