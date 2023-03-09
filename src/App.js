import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Flex, Root } from './styledSystem';
import Main from './components/Main';
import { Provider } from 'react-redux';
import reducer from './store/reducers/reducer';
import thunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { sagaWatcher } from './store/saga';

const saga = createSagaMiddleware()

const store = createStore(
	reducer,
	compose(
		applyMiddleware(thunk, saga),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

saga.run(sagaWatcher)

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
