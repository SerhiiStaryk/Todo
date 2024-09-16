import { combineReducers } from 'redux';

import todoReducer from './todo';
import modalReducer from './modal';
import spinnerReducer from './spinner';

const reducer = combineReducers({
	todo: todoReducer,
	modal: modalReducer,
	spinner: spinnerReducer,
});

export default reducer;
