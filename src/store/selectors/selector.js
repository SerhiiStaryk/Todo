import { createSelector } from 'reselect';
import * as R from 'ramda';

const todoSelector = (state) => state.items;
const filterSelector = (state) => state.filters;
const itemSelector = (state) => state.item;

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
	[itemSelector],
	(item) => item.title ? item.title: ''
)
