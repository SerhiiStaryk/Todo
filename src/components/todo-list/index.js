import React from 'react';

import List from './list';
import Spinner from '../spinner';
import { Flex, Text } from '../../ui';
import { TodoContainer, TodoListBox } from './ui';
import { useTodoList } from '../../hooks/useTodoList';

const TodoList = () => {
	const { todoList, loading } = useTodoList();

	return (
		<TodoContainer>
			<Flex justifyContent='center'>
				<TodoListBox>
					<Text
						color='blacks.3'
						textAlign='right'
						marginBottom={15}
						fontSize={[0, 1, 2, 3]}
					>
						Todo list...
					</Text>
					{loading
						? <Spinner />
						: <List todoList={todoList} />
					}
				</TodoListBox>
			</Flex>
		</TodoContainer>
	);
};

export default TodoList;
