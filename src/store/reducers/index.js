import { combineReducers } from 'redux';
import modalReducer from './modal';
import spinnerReducer from './spinner';
import todosReducer from './todos';

const reducer = combineReducers({
	todos: todosReducer,
	modal: modalReducer,
	spinner: spinnerReducer,
});

export default reducer;
