import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import './styles/index.css';
import { Provider } from 'react-redux';
import store from './store/createStore';
import App from './containers/App';
import history from './history';

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
