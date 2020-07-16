import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Provider } from 'react-redux';
import store from './store/createStore';
import App from './containers/App';

ReactDOM.render(
	<Provider store={store}>
		<App name="World" />
	</Provider>,
	document.getElementById('root')
);
