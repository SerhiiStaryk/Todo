import { Button } from '../../ui';
import { ButtonWrapper } from './ui';
import useDeleteTodo from '../../hooks/useDeleteTodo';

const DeleteTodo = ({ todoId }) => {
	const { close, deleteTodo } = useDeleteTodo();

	return (
		<>
			{todoId}
			<p>Are you sure you want to delete this item?</p>
			<ButtonWrapper>
				<Button onClick={deleteTodo}>Confirm</Button>
				<Button onClick={close}>Cancel</Button>
			</ButtonWrapper>
		</>
	);
};

export default DeleteTodo;
