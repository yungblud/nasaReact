import { createStore, applyMiddleware, compose } from 'redux';
import modules from './modules';
import penderMiddleware from 'redux-pender';

const configure = () => {
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

    const composeEnhancers = devTools || compose;

    const middleWares = [penderMiddleware()];

    const store = createStore(modules, composeEnhancers(
        applyMiddleware(...middleWares)
    ));

    return store;
}

export default configure;