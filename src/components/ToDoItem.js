import React from 'react';
import { Box, Text, Flex, EditBtn, DeleteBtn } from '../styledSystem';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from './Checkbox';
import ConfirmationModal from './ConfirmationModal';
import { actions } from '../store/actions/action';

const ToDoItem = ({ todo }) => {
	const dispatch = useDispatch();
	const edit = useSelector((state) => state.todos.edit);
	const item = useSelector((state) => state.todos.item);
	const showModal = useSelector((state) => state.modal.showModal);

	const openConfirm = () => {
		dispatch(actions.showModal(true));
		dispatch(actions.setItem(todo));
	};

	return (
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
						handleCheckboxChange={() => dispatch(actions.setCompleted(todo))}
					/>
				)}
				<Text color={'rgba(127, 110, 96, 1)'} complete={todo.completed}>
					{todo.title}
				</Text>
				{item.id === todo.id && <Text color={'blacks.2'} marginLeft='auto'>edit...</Text>}
				{!edit && (
					<Box width={'60px'} margin={'0 0 0 auto'}>
						<Flex flexDirection={'row'} justifyContent={'flex-end'}>
							{!todo.completed && (
								<EditBtn onClick={() => dispatch(actions.setEdit(todo))} />
							)}
							<DeleteBtn onClick={openConfirm} />
						</Flex>
					</Box>
				)}
			</Flex>
			{showModal && (
				<ConfirmationModal message='Are you sure you want to delete this item?' />
			)}
		</Box>
	);
};

export default ToDoItem;
