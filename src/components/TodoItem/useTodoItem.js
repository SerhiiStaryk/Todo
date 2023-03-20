import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ModalContext } from '../../Context/ModalContext';
import { actions } from '../../store/actions/action';

export function useTodoItem(todo) {
	const edit = useSelector((state) => state.todos.edit);
	const item = useSelector((state) => state.todos.todo);

	const dispatch = useDispatch();
	const { modal, open, close } = useContext(ModalContext);
	const deleteTodo = (todo) => {
		open();
		dispatch(actions.setTodo(todo));
	};

	return { edit, item, modal, close, deleteTodo };
}
