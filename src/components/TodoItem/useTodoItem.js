import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/actions/action';

export function useTodoItem(todo) {
	const dispatch = useDispatch();
	const edit = useSelector((state) => state.todos.edit);
	const item = useSelector((state) => state.todos.item);
	const showModal = useSelector((state) => state.modal.showModal);

	const openConfirm = () => {
		dispatch(actions.showModal(true));
		dispatch(actions.setItem(todo));
	};

	return { edit, item, showModal, openConfirm };
}
