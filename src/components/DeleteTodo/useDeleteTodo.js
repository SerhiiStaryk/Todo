import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ModalContext } from '../../Context/ModalContext';
import { actions } from '../../store/actions/action';

const useDeleteTodo = () => {
	const { close } = useContext(ModalContext);
	const dispatch = useDispatch();

	const todo = useSelector((state) => state.todos.todo);

	const deleteTodo = () => {
		dispatch(actions.deleteTodo(todo.id));
		close();
	};

	return { deleteTodo, close };
};

export default useDeleteTodo;
