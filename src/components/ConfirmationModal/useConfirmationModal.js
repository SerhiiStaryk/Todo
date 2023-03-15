import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/actions/action';

export function useConfirmationModal() {
	const dispatch = useDispatch();
	const item = useSelector((state) => state.todos.item);

	const handleConfirm = () => {
		dispatch(actions.deleteTodo(item));
		dispatch(actions.hideModal());
	};

	const handleCancel = () => {
		dispatch(actions.hideModal());
		dispatch(actions.setItem({}));
	};

	return { handleConfirm, handleCancel };
}
