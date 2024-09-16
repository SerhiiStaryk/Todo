import * as R from 'ramda';
import { createSelector } from 'reselect';

const itemSelector = (state) => state.todo.todo;
const editSelector = (state) => state.todo.edit;
const todoSelector = (state) => state.todo.todoList;
const filterSelector = (state) => state.todo.filters;

const filteredTodoListSelector = createSelector(
	[todoSelector, filterSelector],
	(items, { completed, inProgress }) => {
		if (completed && !inProgress) {
			return R.filter((todo) => todo.completed, items);
		}

		if (inProgress && !completed) {
			return R.filter((todo) => !todo.completed, items);
		}

		return items;
	}
);

const titleSelector = createSelector(
	[itemSelector, editSelector],
	({title}, isEdit) => title && isEdit ? title : ''
)//remove this

const idSelector = createSelector(
	[itemSelector, editSelector],
	({id, title}, isEdit) => title && isEdit ? id : ''
)//remove this

export { titleSelector, idSelector, filteredTodoListSelector }

