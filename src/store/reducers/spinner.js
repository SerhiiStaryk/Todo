
import { actions } from '../actions/action';
import { createReducer } from 'redux-act';

const initialState = {
	showSpinner: false,
};

const spinnerReducer = createReducer(
	{
		[actions.setSpinner]: (state, payload) => {
			return {
				...state,
				showSpinner: payload,
			};
		},
	},
	initialState
);

export default spinnerReducer;
