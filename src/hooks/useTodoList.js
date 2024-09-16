import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTodoListRequest } from '../store/actions';
import { filteredTodoListSelector } from '../store/selectors';

export function useTodoList() {
	const dispatch = useDispatch();
	const todoList = useSelector(filteredTodoListSelector);
	const loading = useSelector((state) => state.spinner.showSpinner);

	useEffect(() => {
		dispatch(fetchTodoListRequest());
	}, [dispatch]);

	return { todoList, loading };
}
