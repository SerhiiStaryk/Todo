import './App.css';

import { ThemeProvider } from 'styled-components';
import { Flex, Root } from './styledSystem';
import theme from './theme';

import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { Provider } from 'react-redux';
import { sagaWatcher } from './store/saga';
import reducer from './store/reducers/';

import Main from './components/Main/Main';

const saga = createSagaMiddleware();

const store = createStore(
	reducer,
	compose(
		applyMiddleware(saga),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

saga.run(sagaWatcher);

function App() {
	return (
		<div className='App'>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<Root>
						<Flex justifyContent={'center'}>
							<Main />
						</Flex>
					</Root>
				</ThemeProvider>
			</Provider>
		</div>
	);
}

export default App;
