import { createAction } from 'redux-act';
import {
	SET_EDIT,
	SET_FILTERS,
	SET_COMPLETED,
	FETCH_TODOS_REQUEST,
	FETCH_TODOS_SUCCESS,
	FETCH_TODOS_FAILURE,
	ADD_TODO,
	DELETE_TODO,
	EDIT_TODO,
	SHOW_MODAL,
	HIDE_MODAL,
	SET_ITEM,
	SET_SPINNER,
} from './actionTypes';

export const actions = {
	fetchTodosReguest: createAction(FETCH_TODOS_REQUEST),
	fetchTodosSuccess: createAction(FETCH_TODOS_SUCCESS),
	fetchTodosFailure: createAction(FETCH_TODOS_FAILURE),
	addTodo: createAction(ADD_TODO),
	deleteTodo: createAction(DELETE_TODO),
	editTodo: createAction(EDIT_TODO),
	setEdit: createAction(SET_EDIT),
	setFilters: createAction(SET_FILTERS),
	setCompleted: createAction(SET_COMPLETED),
	showModal: createAction(SHOW_MODAL),
	hideModal: createAction(HIDE_MODAL),
	setItem: createAction(SET_ITEM),
	setSpinner: createAction(SET_SPINNER),
};
