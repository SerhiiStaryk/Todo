import { actions } from '../actions/action';
import * as R from 'ramda';
import { createReducer } from 'redux-act';

const initialState = {
	items: [],
	item: {},
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
			const newTodos = [payload, ...state.items];

			return updateObject(state, { items: newTodos });
		},

		[actions.deleteTodo]: (state, payload) => ({
			...state,
			items: R.filter((item) => item.id !== payload.id, state.items),
			item: {},
		}),

		[actions.editTodo]: (state, payload) => {
			const newList = [...state.items];
			const index = R.indexOf(state.item, newList);
			if (index !== -1) {
				newList[index].title = payload;
				return {
					...state,
					item: {},
					edit: false,
					items: [...newList],
				};
			} else {
				return {
					...state,
				};
			}
		},

		[actions.setEdit]: (state, payload) => ({
			...state,
			item: payload,
			edit: true,
		}),

		[actions.setFilters]: (state, payload) => ({ ...state, filters: payload }),

		[actions.fetchTodosSuccess]: (state, payload) => ({
			...state,
			items: payload,
		}),

		[actions.setCompleted]: (state, payload) => {
			const todos = [...state.items];
			const i = R.indexOf(payload, todos);
			if (i !== -1) {
				todos[i].completed = !payload.completed;
				return {
					...state,
					item: {},
					items: [...todos],
				};
			}
			return {
				...state,
			};
		},

		[actions.setItem]: (state, payload) => ({
			...state,
			item: payload,
		}),
	},
	initialState
);

export default todosReducer;
