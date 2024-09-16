import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteTodo as deleteItem } from '../store/actions'
import { ModalContext } from '../context/modal-context';

const useDeleteTodo = () => {
	const { close } = useContext(ModalContext);
	const dispatch = useDispatch();
	const todo = useSelector((state) => state.todo.todo);

	const deleteTodo = () => {
		dispatch(deleteItem(todo.id));
		close();
	};

	return { deleteTodo, close };
};

export default useDeleteTodo;
