import { GridColumns, MainContainer } from '../styledSystem';
import Sidenav from './Sidenav';
import TodoList from './ToDoList';
import React from 'react';

const Main = () => {
	return (
		<MainContainer>
			<GridColumns gridTemplateColumns={'1fr 2fr'}>
				<Sidenav />
				<TodoList />
			</GridColumns>
		</MainContainer>
	);
};

export default Main;
