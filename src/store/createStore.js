import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const middleware = [
	() =>
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__(),
];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
