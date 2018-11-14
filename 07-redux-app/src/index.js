import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import PromiseMiddleware from 'redux-promise'
import reducers from './reducers';
import Routes from './routes'

const store = applyMiddleware(PromiseMiddleware)(createStore)(reducers)
const App = () => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

