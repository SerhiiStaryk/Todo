import React from 'react';
import { Box, Text, Flex, EditBtn, DeleteBtn } from '../styledSystem';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from './Checkbox';
import { actions } from '../store/actions/action';
import ConfirmationModal from './ConfirmModal';

const ToDoItem = ({ todo }) => {
	const dispatch = useDispatch();
	const edit = useSelector((state) => state.edit);
	const showModal = useSelector((state) => state.showModal);
	
	const handleDelete = () => {
		dispatch(actions.showModal(true));
		dispatch(actions.setItem(todo))
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
				<Box width={'60px'} margin={'0 0 0 auto'}>
					{!edit && (
						<Flex flexDirection={'row'} justifyContent={'flex-end'}>
							{!todo.completed && (
								<EditBtn onClick={() => dispatch(actions.setEdit(todo))} />
							)}
							<DeleteBtn onClick={handleDelete} />
						</Flex>
					)}
				</Box>
			</Flex>
			{showModal && (
				<ConfirmationModal message='Are you sure you want to delete this item?' />
			)}
		</Box>
	);
};

export default ToDoItem;
