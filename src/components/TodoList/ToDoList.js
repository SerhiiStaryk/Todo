import React from 'react';
import * as R from 'ramda';

import { Flex, Text } from '../../styledSystem';

import ToDoItem from '../TodoItem/ToDoItem';
import Spinner from '../Spinner/Spinner';
import { TodoContainer, TodoListBox } from './styles';
import { useTodoList } from './useTodoList';

const TodoList = () => {
	const { todos, spinner } = useTodoList();
	return (
		<TodoContainer>
			<Flex justifyContent='center'>
				<TodoListBox>
					<Text
						textAlign='right'
						color={'blacks.3'}
						fontSize={[0, 1, 2, 3]}
						marginBottom='15px'
					>
						Todo list...
					</Text>
					{spinner ? (
						<Flex justifyContent='center'>
							<Spinner />
						</Flex>
					) : (
						<>
							{todos.length ? (
								R.map((item) => <ToDoItem key={item.id} todo={item} />, todos)
							) : (
								<Text textAlign='center' color={'blacks.3'}>
									Empty list
								</Text>
							)}
						</>
					)}
				</TodoListBox>
			</Flex>
		</TodoContainer>
	);
};

export default TodoList;
