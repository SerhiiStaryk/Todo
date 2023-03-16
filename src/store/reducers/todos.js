import { actions } from '../actions/action';
import { createReducer } from 'redux-act';
import { removeItemFromArray, updateItemInArray, updateObject } from '../utils';

const addTodo = (state, payload) => {
	const newTodos = [payload, ...state.todos];
	return updateObject(state, { todos: newTodos });
};

const deleteTodo = (state, payload) => {
	const todos = removeItemFromArray(state.todos, payload);
	return updateObject(state, { todos, todo: {} });
};

const editTodo = (state, payload) => {
	const todos = updateItemInArray(state.todos, payload.id, (todo) =>
		updateObject(todo, { title: payload.title })
	);
	return updateObject(state, { todos, edit: false, todo: {} });
};

const setEdit = (state, payload) =>
	updateObject(state, { todo: payload, edit: true });

const setFilters = (state, payload) =>
	updateObject(state, { filters: payload });

const fetchTodosSuccess = (state, payload) =>
	updateObject(state, { todos: payload });

const setCompleted = (state, payload) => {
	const todos = updateItemInArray(state.todos, payload, (todo) =>
		updateObject(todo, { completed: !todo.completed })
	);
	return updateObject(state, { todos, todo: {} });
};

const setTodo = (state, payload) => updateObject(state, { todo: payload });

const initialState = {
	todos: [],
	todo: {},
	edit: false,
	filters: {
		completed: false,
		inProgress: false,
	},
};

const todosReducer = createReducer(
	{
		[actions.fetchTodosSuccess]: (state, payload) =>
			fetchTodosSuccess(state, payload),
		[actions.addTodo]: (state, payload) => addTodo(state, payload),
		[actions.deleteTodo]: (state, payload) => deleteTodo(state, payload),
		[actions.editTodo]: (state, payload) => editTodo(state, payload),
		[actions.setCompleted]: (state, payload) => setCompleted(state, payload),
		[actions.setFilters]: (state, payload) => setFilters(state, payload),
		[actions.setEdit]: (state, payload) => setEdit(state, payload), //remove from state
		[actions.setTodo]: (state, payload) => setTodo(state, payload), //remove from state
	},
	initialState
);

export default todosReducer;
