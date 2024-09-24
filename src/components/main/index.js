import { GridColumns, MainContainer } from '../../ui';

import Sidenav from '../sidenav';
import TodoList from '../todo-list';

const Main = () => (
	<MainContainer>
		<GridColumns gridTemplateColumns={'1fr 2fr'}>
			<Sidenav />
			<TodoList />
		</GridColumns>
	</MainContainer>
);

export default Main;
