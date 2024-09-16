import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import createSagaMiddleware from '@redux-saga/core';
import { compose, createStore, applyMiddleware } from 'redux';

import theme from './theme';
import { Flex, Root } from './ui';
import Main from './components/main';
import reducer from './store/reducers/';
import { sagaWatcher } from './store/saga';
import { ModalState } from './context/modal-context';

const saga = createSagaMiddleware();

const store = createStore(
	reducer,
	compose(
		applyMiddleware(saga),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

saga.run(sagaWatcher);

const App = () => (
	<Provider store={store}>
		<ModalState>
			<ThemeProvider theme={theme}>
				<Root>
					<Flex justifyContent={'center'}>
						<Main />
					</Flex>
				</Root>
			</ThemeProvider>
		</ModalState>
	</Provider>
);

export default App;
