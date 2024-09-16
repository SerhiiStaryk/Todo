import { createReducer } from 'redux-act';

import { setSpinner } from '../actions';

const initialState = { showSpinner: false };

const spinnerReducer = createReducer({
	[setSpinner]: (state, payload) => ({
		...state,
		showSpinner: payload,
	}),
}, initialState);

export default spinnerReducer;
