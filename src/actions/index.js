//@flow
export const FETCH_GIFS = 'FETCH_GIFS';

const GIPHY_API = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=o5itTJKYKT1U5XwoRLYJVYYidofqLPsU';

export function fetchGifs(query: string = '') {
	const URL = `${GIPHY_API}${query.replace(/\s/g, '+')}${API_KEY}`;
	console.log(URL);
	return (dispatch) => {
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
