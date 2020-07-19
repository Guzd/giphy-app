import { FETCH_GIFS, TERM } from '../actions';

const initialState = {
	data: [],
	term: '',
};

export default function gifs(state = initialState, action) {
	switch (action.type) {
		case TERM:
			return {
				...state,
				term: action.payload,
			};
		case FETCH_GIFS:
			return {
				...state, //
				data: action.payload,
			};
		default:
			return state;
	}
}
