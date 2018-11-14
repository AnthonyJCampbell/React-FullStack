import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'
import reducers from '../reducers'
import initialState from './initial-state';
import createSagaMiddleware from 'redux-saga';
import {fetchItems} from '../actions/items-actions';
import saga from './saga';
// import sagaMiddlewareFactory from 'redux-saga';
const sagaMiddleware = createSagaMiddleware()
const middleware = [thunk,sagaMiddleware];
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));


const store = createStore(reducers,initialState,enhancer);

sagaMiddleware.run(saga);
store.dispatch(fetchItems());

export default store;
