import { createReducer } from 'redux-act';

import { hideModal, showModal } from '../actions';

const initialState = { showModal: false };

const modalReducer = createReducer({
	[showModal]: (state) => ({
		...state,
		showModal: true,
	}),
	[hideModal]: (state) => ({
		...state,
		showModal: false,
	}),
}, initialState);

export default modalReducer;
