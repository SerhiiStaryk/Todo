import { createSelector } from 'reselect';
import * as R from 'ramda';

const todoSelector = (state) => state.items;
const filterSelector = (state) => state.filters;

export const filteredTodosSelector = createSelector(
	[todoSelector, filterSelector],
	(items, filters) => {
		if (filters.completed && !filters.inProgress) {
			return items.filter((todo) => todo.completed);
		}
    
    if (filters.inProgress && !filters.completed) {
			return items.filter((todo) => !todo.completed);
		}

		return items;
	}
);
