import styled from 'styled-components';
import { Flex, Text } from '../styledSystem';
import ToDoItem from './ToDoItem';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { actions } from '../store/actions/action';
import * as R from 'ramda';
import { filteredTodosSelector } from '../store/selectors/selector';

const TodoContainer = styled.section`
	border-top-right-radius: 15px;
	border-bottom-right-radius: 15px;
	background: rgb(23, 31, 38);
	background: linear-gradient(
		0deg,
		rgba(23, 31, 38, 1) 0%,
		rgba(89, 76, 67, 1) 70%
	);
	height: 90vh;
	padding-top: 3%;

	@media (max-width: 768px) {
		height: 63vh;
		border-radius: 0 0 15px 15px;
	}
`;

const TodoListBox = styled.div`
	padding: 15px;
	height: 85vh;
	width: 85%;
	background: linear-gradient(0deg, #a8b0b3 0%, #f9e9d1 73%);
	border-radius: 10px 5px 5px 10px;
	overflow: auto;

	@media (max-width: 768px) {
		height: 59vh;
		width: 95%;
	}
`;

const TodoList = () => {
	const dispatch = useDispatch();
	const todos = useSelector(filteredTodosSelector);

	const createEl = () =>
		R.map((item) => <ToDoItem key={item.id} todo={item} />, todos);
	React.useEffect(() => {
		dispatch(actions.fetchTodosReguest());
	}, [dispatch]);

	return (
		<TodoContainer>
			<Flex justifyContent={'center'} alignItems={'center'}>
				<TodoListBox>
					<Text
						textAlign='right'
						color={'blacks.3'}
						fontSize={[0, 1, 2, 3]}
						marginBottom='15px'
					>
						Todo list...
					</Text>
					{todos.length ? (
						createEl()
					) : (
						<Text textAlign='center' color={'blacks.3'}>
							Empty list
						</Text>
					)}
				</TodoListBox>
			</Flex>
		</TodoContainer>
	);
};

export default TodoList;
