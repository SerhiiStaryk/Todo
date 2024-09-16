import React from 'react';
import { useDispatch } from 'react-redux';

import Modal from '../modal';
import Checkbox from '../checkbox';
import DeleteTodo from '../delete-todo';
import { useTodoItem } from '../../hooks/useTodoItem';
import { setCompleted, setEdit } from '../../store/actions';
import { Box, Text, Flex, EditBtn, DeleteBtn } from '../../ui';

const TodoItem = ({ todo }) => {
	const dispatch = useDispatch();
	const { edit, item, modal, close, deleteTodo } = useTodoItem(todo);

	const { id, completed, title } = todo;

	return (
		<Box
			mb={10}
			padding={15}
			borderRadius={10}
			width='calc(100% - 20px)'
			background='rgba(253,243,229,0.5)'
			boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px;'
		>
			<Flex flexDirection='row' alignItems='center'>
				{!edit && (
					<Checkbox
						checked={completed}
						handleCheckboxChange={() =>
							dispatch(setCompleted(id))
						}
					/>
				)}
				<Text color='rgba(127, 110, 96, 1)' complete={completed}>{title}</Text>
				{item.id === id && (
					<Text color='blacks.2' marginLeft='auto'>
						edit...
					</Text>
				)}
				{!edit && (
					<Box width='60px' ml='auto'>
						<Flex flexDirection='row' justifyContent='flex-end'>
							{!todo.completed && (
								<EditBtn onClick={() => dispatch(setEdit(todo))} />
							)}
							<DeleteBtn onClick={() => deleteTodo(todo)} />
						</Flex>
					</Box>
				)}
			</Flex>
			{modal && (<Modal closeHandler={close}><DeleteTodo /></Modal>)}
		</Box>
	);
};

export default TodoItem;
