import { GridColumns, MainContainer } from '../../styledSystem';

import Sidenav from '../Sidenav/Sidenav';
import TodoList from '../TodoList/ToDoList';

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
