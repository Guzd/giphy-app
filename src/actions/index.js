//@flow
export const FETCH_GIFS = 'FETCH_GIFS';
export const MODAL_ON = 'MODAL_ON';
export const MODAL_OFF = 'MODAL_OFF';
export const TERM = 'TERM';

const GIPHY_API = 'http://api.giphy.com/v1/gifs/';
const API_KEY = 'api_key=o5itTJKYKT1U5XwoRLYJVYYidofqLPsU';

export function fetchGifs(query: string = '') {
	let URL;
	const URL_TRENDY = `${GIPHY_API}trending?${API_KEY}&limit=20`;
	const URL_SEARCH = `${GIPHY_API}search?q=${query.replace(
		/\s/g,
		'+'
	)}&${API_KEY}&limit=20`;
	if (query === '' || null) {
		URL = URL_TRENDY;
	} else {
		URL = URL_SEARCH;
	}
	return (dispatch) => {
		dispatch(queryAction(query));
		fetch(URL)
			.then((response) => {
				return response.json();
			})
			.then((body) => {
				dispatch(gifsFetched(body.data));
			})
			.catch((err) => console.log(err));
	};
}

const gifsFetched = (gifs: Object) => ({
	type: FETCH_GIFS,
	payload: [...gifs],
});

const queryAction = (query) => {
	return {
		type: TERM,
		payload: query,
	};
};
export function openModal(gif: Object) {
	return {
		type: MODAL_ON,
		payload: gif,
	};
}

export function closeModal() {
	return {
		type: MODAL_OFF,
	};
}
