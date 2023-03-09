import styled from 'styled-components';
import { GridColumns } from '../styledSystem';
import Sidenav from './Sidenav';
import TodoList from './ToDoList';
import React from 'react';

const Content = styled.div`
	width: 75%;
	height: 75%;
	box-shadow: -28px 38px 48px 9px rgba(0, 0, 0, 0.7);
	border-radius: 15px;
`;

const Main = () => {
	return (
		<Content>
			<GridColumns gridTemplateColumns={'1fr 2fr'}>
				<Sidenav />
				<TodoList />
			</GridColumns>
		</Content>
	);
};

export default Main;
