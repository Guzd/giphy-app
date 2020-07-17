//@flow
export const FETCH_GIFS = 'FETCH_GIFS';

const GIPHY_API = 'http://api.giphy.com/v1/gifs/';
const API_KEY = 'api_key=o5itTJKYKT1U5XwoRLYJVYYidofqLPsU';

export function fetchGifs(query: string = '') {
	let URL;
	const URL_TRENDY = `${GIPHY_API}trending?${API_KEY}`;
	const URL_SEARCH = `${GIPHY_API}search?q=${query.replace(
		/\s/g,
		'+'
	)}&${API_KEY}`;
	URL = query === '' ? URL_TRENDY : URL_SEARCH;

	console.log(URL);
	return (dispatch) => {
		fetch(URL)
			.then((response) => {
				return response.json();
			})
			.then((body) => {
				console.log(body);
				dispatch(gifsFetched(body.data));
			})
			.catch((err) => console.log(err));
	};
}

const gifsFetched = (gifs: Object) => ({
	type: FETCH_GIFS,
	payload: [...gifs],
});
