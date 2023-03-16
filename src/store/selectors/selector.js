import { createSelector } from 'reselect';
import * as R from 'ramda';

const todoSelector = (state) => {
	return state.todos.todos
};

const filterSelector = (state) => state.todos.filters;
const itemSelector = (state) => state.todos.todo;
const editSelector = (state) => state.todos.edit;

export const filteredTodosSelector = createSelector(
	[todoSelector, filterSelector],
	(items, filters) => {
		if (filters.completed && !filters.inProgress) {
			return R.filter((todo) => todo.completed, items);
		}
    
    if (filters.inProgress && !filters.completed) {
			return R.filter((todo) => !todo.completed, items);
		}

		return items;
	}
);

export const titleSelector = createSelector(
	[itemSelector, editSelector],
	(item, isEdit) => item.title && isEdit ? item.title: ''
)
