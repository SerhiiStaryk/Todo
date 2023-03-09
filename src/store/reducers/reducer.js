import { actions } from '../actions/action';
import { nanoid } from 'nanoid';
import * as R from 'ramda';
import { createReducer } from 'redux-act';

const initialState = {
	items: [],
	title: '',
	item: {},
	edit: false,
	filters: {
		completed: false,
		inProgress: false,
	},
};

const reducer = createReducer(
	{
		[actions.addTodo]: (state) => {
			const newItem = {
				userId: 1,
				id: nanoid(),
				title: state.title,
				completed: false,
			};

			return {
				...state,
				items: [newItem, ...state.items],
				title: '',
			};
		},
		[actions.deleteTodo]: (state, payload) => {
			// eslint-disable-next-line no-restricted-globals
			if (confirm('Are you sure you want to delete this item?')) {
				return {
					...state,
					items: R.filter((item) => item.id !== payload.id, state.items),
				};
			}
		},
		[actions.editTodo]: (state) => {
			const newList = [...state.items];
			const index = R.indexOf(state.item, newList);
			if (index !== -1) {
				newList[index].title = state.title;
				return {
					...state,
					title: '',
					item: {},
					edit: false,
					items: newList,
				};
			} else {
				return {
					...state,
				};
			}
		},
		[actions.setEdit]: (state, payload) => ({
			...state,
			title: payload.title,
			item: payload,
			edit: true,
		}),
		[actions.setTitle]: (state, payload) => ({
			...state,
			title: payload,
		}),
		[actions.setFilters]: (state, payload) => ({ ...state, filters: payload }),
		[actions.fetchTodosSuccess]: (state, payload) => {
			return { ...state, items: payload };
		},
		[actions.setCompleted]: (state, payload) => {
			const todos = [...state.items];
			const i = R.indexOf(payload, todos);
			if (i !== -1) {
				todos[i].completed = !payload.completed;
				return {
					...state,
					item: {},
					items: todos,
				};
			}
			return {
				...state,
			};
		},
	},
	initialState
);

export default reducer;
