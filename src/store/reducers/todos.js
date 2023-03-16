import { actions } from '../actions/action';
import * as R from 'ramda';
import { createReducer } from 'redux-act';

const initialState = {
	todos: [],
	todo: {},
	edit: false,
	filters: {
		completed: false,
		inProgress: false,
	},
};

function updateObject(oldObject, newValues) {
	return Object.assign({}, oldObject, newValues);
}

const todosReducer = createReducer(
	{
		[actions.addTodo]: (state, payload) => {
			const newTodos = [payload, ...state.todos];

			return updateObject(state, { todos: newTodos });
		},

		[actions.deleteTodo]: (state, payload) => {
			return {
				...state,
				todos: R.filter((item) => item.id !== payload.id, state.todos),
				todo: {},
			};
		},

		[actions.editTodo]: (state, payload) => {
			const newList = [...state.todos];
			const index = R.indexOf(state.todo, newList);
			if (index !== -1) {
				newList[index].title = payload;
				return {
					...state,
					todo: {},
					edit: false,
					todos: [...newList],
				};
			} else {
				return {
					...state,
				};
			}
		},

		[actions.setEdit]: (state, payload) => ({
			...state,
			todo: payload,
			edit: true,
		}),

		[actions.setFilters]: (state, payload) => ({ ...state, filters: payload }),

		[actions.fetchTodosSuccess]: (state, payload) => ({
			...state,
			todos: payload,
		}),

		[actions.setCompleted]: (state, payload) => {
			const todos = [...state.todos];
			const i = R.indexOf(payload, todos);
			if (i !== -1) {
				todos[i].completed = !payload.completed;
				return {
					...state,
					todo: {},
					todos: [...todos],
				};
			}
			return {
				...state,
			};
		},

		[actions.setTodo]: (state, payload) => ({
			...state,
			todo: payload,
		}),
	},
	initialState
);

export default todosReducer;
