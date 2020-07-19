import { MODAL_ON, MODAL_OFF } from '../actions';

const initialState = {
	gifSelected: null,
	modalStatus: false,
};

export default function modal(state = initialState, action) {
	switch (action.type) {
		case MODAL_ON:
			return {
				...state,
				gifSelected: action.payload.gifSelected,
				modalStatus: true,
			};
		case MODAL_OFF:
			return {
				...state,
				modalStatus: false,
				gifSelected: null,
			};
		default:
			return state;
	}
}
