import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'
import reducers from '../reducers'
import initialState from './initial-state';

import {getAllItems} from '../actions/items-actions';

const middleware = [thunk];
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));


const store = createStore(reducers,initialState,enhancer);

store.dispatch(getAllItems())
export default store;
