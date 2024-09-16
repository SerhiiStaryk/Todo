import { createAction } from 'redux-act';

import {
	SET_EDIT,
	ADD_TODO,
	SET_TODO,
	EDIT_TODO,
	SHOW_MODAL,
	HIDE_MODAL,
	SET_FILTERS,
	DELETE_TODO,
	SET_SPINNER,
	SET_COMPLETED,
	FETCH_TODO_LIST_REQUEST,
	FETCH_TODO_LIST_SUCCESS,
	FETCH_TODO_LIST_FAILURE,
} from './actionTypes';


const setTodo = createAction(SET_TODO);
const addTodo = createAction(ADD_TODO);
const setEdit = createAction(SET_EDIT);
const editTodo = createAction(EDIT_TODO);
const deleteTodo = createAction(DELETE_TODO);
const setFilters = createAction(SET_FILTERS);
const setCompleted = createAction(SET_COMPLETED);
const fetchTodoListRequest = createAction(FETCH_TODO_LIST_REQUEST);
const fetchTodoListSuccess = createAction(FETCH_TODO_LIST_SUCCESS);
const fetchTodoListFailure = createAction(FETCH_TODO_LIST_FAILURE);

const showModal = createAction(SHOW_MODAL);
const hideModal = createAction(HIDE_MODAL);

const setSpinner = createAction(SET_SPINNER);

export {
	addTodo,
	setEdit,
	setTodo,
	editTodo,
	showModal,
	hideModal,
	deleteTodo,
	setFilters,
	setSpinner,
	setCompleted,
	fetchTodoListRequest,
	fetchTodoListSuccess,
	fetchTodoListFailure,
}
