import styled from 'styled-components';
import { Flex, Text } from '../styledSystem';
import ToDoItem from './ToDoItem';
import { useSelector, useDispatch } from 'react-redux';

import React from 'react';
import { actions } from '../store/actions/action';

const Content = styled.section`
	border-top-right-radius: 15px;
	border-bottom-right-radius: 15px;
	background: rgb(23, 31, 38);
	background: linear-gradient(
		0deg,
		rgba(23, 31, 38, 1) 0%,
		rgba(89, 76, 67, 1) 70%
	);
	height: 75vh;
	padding-top: 3%;

	@media (max-width: 768px) {
		height: 55vh;
		border-radius: 0 0 15px 15px;
	}
`;

const TodoListBox = styled.div`
	padding: 15px;
	height: 70vh;
	width: 85%;
	background: linear-gradient(0deg, #a8b0b3 0%, #f9e9d1 73%);
	border-radius: 10px 5px 5px 10px;
	overflow: auto;

	@media (max-width: 768px) {
		height: 50vh;
	}
`;

const TodoList = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.items);
	const filter = useSelector((state) => state.filters);

	let filteredTodos = [];

	if (filter.completed && !filter.inProgress) {
		filteredTodos = todos.filter((todo) => todo.completed);
	} else if (filter.inProgress && !filter.completed) {
		filteredTodos = todos.filter((todo) => !todo.completed);
	}

	const createEl = () => {
		if (filteredTodos.length) {
			return filteredTodos.map((item) => (
				<ToDoItem key={item.id} todo={item} />
			));
		} else {
			return todos.map((item) => <ToDoItem key={item.id} todo={item} />);
		}
	};

	React.useEffect(() => {
		dispatch(actions.fetchTodosReguest());
	}, [dispatch]);

	return (
		<Content>
			<Flex justifyContent={'center'} alignItems={'center'}>
				<TodoListBox>
					<Text textAlign='right' color={'blacks.3'} fontSize={[0, 1, 2, 3]}>
						Todo list...
					</Text>
					<br />
					{/* Спростити якось) */}
					{todos.length ? (
						createEl()
					) : (
						<Text textAlign='center' color={'blacks.3'}>
							Empty list
						</Text>
					)}
				</TodoListBox>
			</Flex>
		</Content>
	);
};

export default TodoList;
