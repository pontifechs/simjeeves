import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {remote} from 'electron';

import rootReducer from './reducers';
import App from "./App";
import {STATE_DEHYDRATE} from "./actions/common";

export const rehydrate = () => {
  const serializedState = localStorage.getItem('redux-state');
  if (serializedState === null) {
    return undefined;
  }
  return JSON.parse(serializedState);
};

export const dehydrate = (state) => {
  const dehydrated = rootReducer(state, {type: STATE_DEHYDRATE});
  localStorage.setItem('redux-state', JSON.stringify(dehydrated));
};

let store = createStore(rootReducer, rehydrate(),
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

remote.getCurrentWindow().on('close', () => {
  dehydrate(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);




