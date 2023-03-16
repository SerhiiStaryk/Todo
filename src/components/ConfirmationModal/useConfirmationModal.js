import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/actions/action';

export function useConfirmationModal() {
	const dispatch = useDispatch();
	const item = useSelector((state) => state.todos.todo);

	const handleConfirm = () => {
		dispatch(actions.deleteTodo(item.id));
		dispatch(actions.hideModal());
	};

	const handleCancel = () => {
		dispatch(actions.hideModal());
		dispatch(actions.setTodo({}));
	};

	return { handleConfirm, handleCancel };
}
