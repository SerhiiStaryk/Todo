import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setTodo } from '../store/actions';
import { ModalContext } from '../context/modal-context';

export function useTodoItem(todo) {
	const edit = useSelector((state) => state.todo.edit);
	const item = useSelector((state) => state.todo.todo);

	const dispatch = useDispatch();

	const { modal, open, close } = useContext(ModalContext);

	const deleteTodo = (todo) => {
		open();
		dispatch(setTodo(todo));
	};

	return { edit, item, modal, close, deleteTodo };
}
