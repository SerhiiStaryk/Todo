import { createAction } from 'redux-act';
import {
	SET_TITLE,
	SET_EDIT,
	SET_FILTERS,
	SET_COMPLETED,
	FETCH_TODOS_REQUEST,
	FETCH_TODOS_SUCCESS,
	FETCH_TODOS_FAILURE,
	ADD_TODO,
	DELETE_TODO,
	EDIT_TODO,
} from './actionTypes';

export const actions = {
	fetchTodosReguest: createAction(FETCH_TODOS_REQUEST),
	fetchTodosSuccess: createAction(FETCH_TODOS_SUCCESS),
	fetchTodosFailure: createAction(FETCH_TODOS_FAILURE),
	addTodo: createAction(ADD_TODO),
	deleteTodo: createAction(DELETE_TODO),
	editTodo: createAction(EDIT_TODO),
	setEdit: createAction(SET_EDIT),
	setTitle: createAction(SET_TITLE),
	setFilters: createAction(SET_FILTERS),
	setCompleted: createAction(SET_COMPLETED),
};
