import { actions } from '../actions/action';
import { createReducer } from 'redux-act';

const initialState = {
	showModal: false,
};

const modalReducer = createReducer(
	{
		[actions.showModal]: (state) => {
			return {
				...state,
				showModal: true,
			};
		},
		[actions.hideModal]: (state) => {
			return {
				...state,
				showModal: false,
			};
		},
	},
	initialState
);

export default modalReducer;
