import { createStore, applyMiddleware, compose  } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'
import {isDevEnv} from '../config';
const composeEnhancers = isDevEnv() ? require('remote-redux-devtools').composeWithDevTools : compose;

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store
