import { createStore, applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const composeSetup =
	process.env.NODE_ENV !== 'production' &&
	typeof window === 'object' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: compose;

let store = createStore(
	rootReducer,
	compose(applyMiddleware(...middlewares), composeSetup)
);

export default store;
