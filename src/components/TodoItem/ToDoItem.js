import React from 'react';
import { useDispatch } from 'react-redux';

import { Box, Text, Flex, EditBtn, DeleteBtn } from '../../styledSystem';
import { actions } from '../../store/actions/action';

import { useTodoItem } from './useTodoItem';

import Checkbox from '../Checkbox/Checkbox';
import Modal from '../Modal/Modal';
import DeleteTodo from '../DeleteTodo/DeleteTodo';

const TodoItem = ({ todo }) => {
	const { edit, item, modal, close, deleteTodo } = useTodoItem(todo);
	const dispatch = useDispatch();

	return (
		<>
			<Box
				width={'95%'}
				borderRadius={'10px'}
				background={'rgba(253,243,229,0.5)'}
				padding={'15px'}
				margin={'0 0 10px'}
				boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
			>
				<Flex flexDirection={'row'} alignItems={'center'}>
					{!edit && (
						<Checkbox
							checked={todo.completed}
							handleCheckboxChange={() =>
								dispatch(actions.setCompleted(todo.id))
							}
						/>
					)}
					<Text color={'rgba(127, 110, 96, 1)'} complete={todo.completed}>
						{todo.title}
					</Text>
					{item.id === todo.id && (
						<Text color={'blacks.2'} marginLeft='auto'>
							edit...
						</Text>
					)}
					{!edit && (
						<Box width={'60px'} margin={'0 0 0 auto'}>
							<Flex flexDirection={'row'} justifyContent={'flex-end'}>
								{!todo.completed && (
									<EditBtn onClick={() => dispatch(actions.setEdit(todo))} />
								)}
								<DeleteBtn onClick={() => deleteTodo(todo)} />
							</Flex>
						</Box>
					)}
				</Flex>
				{modal && (
					<Modal closeHandler={close}>
						<DeleteTodo />
					</Modal>
				)}
			</Box>
		</>
	);
};

export default TodoItem;
