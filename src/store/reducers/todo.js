import { createReducer } from 'redux-act';

import * as A from '../actions';
import { removeItemFromArray, updateItemInArray, updateObject } from '../utils';

const initialState = {
	todo: {},
	edit: false,
	todoList: [],
	filters: {
		completed: false,
		inProgress: false,
	},
};

const addTodo = (state, payload) => {
	const todoList = [payload, ...state.todoList];

	return updateObject(state, { todoList });
};

const deleteTodo = (state, payload) => {
	const todoList = removeItemFromArray(state.todoList, payload);

	return updateObject(state, { todoList, todo: {} });
};

const editTodo = (state, payload) => {
	const todoList = updateItemInArray(state.todoList, payload.id, (todo) =>
		updateObject(todo, { title: payload.title })
	);

	return updateObject(state, { todoList, edit: false, todo: {} });
};

const setEdit = (state, payload) =>
	updateObject(state, { todo: payload, edit: true });

const setFilters = (state, payload) =>
	updateObject(state, { filters: payload });

const fetchTodoListSuccess = (state, payload) =>
	updateObject(state, { todoList: payload });

const setCompleted = (state, payload) => {
	const todoList = updateItemInArray(state.todoList, payload, (todo) =>
		updateObject(todo, { completed: !todo.completed })
	);

	return updateObject(state, { todoList, todo: {} });
};

const setTodo = (state, payload) => updateObject(state, { todo: payload });

const todoReducer = createReducer(
	{
		[A.addTodo]: (state, payload) => addTodo(state, payload),
		[A.setEdit]: (state, payload) => setEdit(state, payload), //remove from state
		[A.setTodo]: (state, payload) => setTodo(state, payload), //remove from state
		[A.editTodo]: (state, payload) => editTodo(state, payload),
		[A.deleteTodo]: (state, payload) => deleteTodo(state, payload),
		[A.setFilters]: (state, payload) => setFilters(state, payload),
		[A.setCompleted]: (state, payload) => setCompleted(state, payload),
		[A.fetchTodoListSuccess]: (state, payload) => fetchTodoListSuccess(state, payload),
	},
	initialState
);

export default todoReducer;
