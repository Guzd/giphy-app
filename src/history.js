import { createBrowserHistory } from 'history';
import store from './store/createStore';
import { fetchGifs } from './actions';

const history = createBrowserHistory();

history.listen((location) => {
	const path = location.location.pathname.substring(1);
	store.dispatch(fetchGifs(path));
});

export default history;
