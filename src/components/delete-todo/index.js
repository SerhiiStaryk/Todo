import { Button, Flex } from '../../ui';
import useDeleteTodo from '../../hooks/useDeleteTodo';

const DeleteTodo = () => {
	const { close, deleteTodo } = useDeleteTodo();

	return (
		<>
			<p>Are you sure you want to delete this item?</p>
			<Flex>
				<Button onClick={deleteTodo}>Confirm</Button>
				<Button onClick={close}>Cancel</Button>
			</Flex>
		</>
	);
};

export default DeleteTodo;
