import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import { idSelector, titleSelector } from '../store/selectors';
import { addTodo, editTodo, setFilters } from '../store/actions';

export function useSidenav() {
	const dispatch = useDispatch();

	const id = useSelector(idSelector);
	const title = useSelector(titleSelector);
	const edit = useSelector((state) => state.todo.edit);
	const filters = useSelector((state) => state.todo.filters);

	const handleCheckbox = (name) => {
		const newFilter = { ...filters };
		newFilter[name] = !filters[name];

		dispatch(setFilters(newFilter));
	};

	const onSubmit = (value, action) => {
		if (edit) {
			dispatch(editTodo({ id, title: value.todoTitle }));

			return;
		}

		const newTodo = {
			userId: 1,
			id: nanoid(),
			completed: false,
			title: value.todoTitle,
		};

		dispatch(addTodo(newTodo));
		action.resetForm();
	};

	return { title, filters, edit, handleCheckbox, onSubmit };
}
