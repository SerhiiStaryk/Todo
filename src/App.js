import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import createSagaMiddleware from '@redux-saga/core';
import { compose, createStore, applyMiddleware } from 'redux';

import theme from './theme';
import { Flex, Root } from './ui';
import Main from './components/main';
import reducer from './store/reducers/';
import { sagaWatcher } from './store/saga';
import { ModalProvider } from './context/modal-context';

const saga = createSagaMiddleware();

const store = createStore(
	reducer,
	compose(applyMiddleware(saga))
);

saga.run(sagaWatcher);

const App = () => (
	<Provider store={store}>
		<ModalProvider>
			<ThemeProvider theme={theme}>
				<Root
					pt='3%'
					width='100vw'
					height='100vh'
				>
					<Flex justifyContent='center'>
						<Main />
					</Flex>
				</Root>
			</ThemeProvider>
		</ModalProvider>
	</Provider>
);

export default App;
