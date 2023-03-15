import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/actions/action';
import { titleSelector } from '../../store/selectors/selector';
import { nanoid } from 'nanoid';

export function useSidenav() {
	const dispatch = useDispatch();

	const filters = useSelector((state) => state.todos.filters);
	const edit = useSelector((state) => state.todos.edit);
	const title = useSelector(titleSelector);

	const handleCheckbox = (name) => {
		const newFilter = { ...filters };
		newFilter[name] = !filters[name];

		dispatch(actions.setFilters(newFilter));
	};

	const onSubmit = (value, action) => {
		if (edit) {
			dispatch(actions.editTodo(value.todoTitle));
			return;
		}

		const newTodo = {
			userId: 1,
			id: nanoid(),
			title: value.todoTitle,
			completed: false,
		};

		dispatch(actions.addTodo(newTodo));
		action.resetForm();
	};

	return { title, filters, edit, handleCheckbox, onSubmit };
}
