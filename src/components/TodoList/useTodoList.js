import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { actions } from '../../store/actions/action';
import { filteredTodosSelector } from '../../store/selectors/selector';

export function useTodoList() {
	const dispatch = useDispatch();
	const todos = useSelector(filteredTodosSelector);
	const spinner = useSelector((state) => state.spinner.showSpinner);

	React.useEffect(() => {
		dispatch(actions.fetchTodosReguest());
	}, [dispatch]);

	return { todos, spinner };
}
