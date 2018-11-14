import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose,applyMiddleware} from 'redux';
import Application from './Application';
import reducers from './reducers';

import './style.css';

const middleware = [];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const getDefaultState = ()=>{
  return {
    pizza:''
  }
}

const store = createStore(
  reducers,
  getDefaultState(), 
  composeEnhancers(applyMiddleware(...middleware),...enhancers));
render(
  (<Provider store={store}>
    <Application />
  </Provider>), document.getElementById('root'));
