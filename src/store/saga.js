import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_TODOS_REQUEST } from './actions/actionTypes';
import { actions } from './actions/action';

export function* sagaWatcher() {
	yield takeLatest(FETCH_TODOS_REQUEST, sagaWorker);
}

function* sagaWorker() {
	try {
		const todos = yield call(fetchTodo);
		yield put(actions.fetchTodosSuccess(todos));
	} catch (error) {
		yield put(actions.fetchTodosFailure(error))
	}
}

async function fetchTodo() {
	const response = await fetch(
		'https://jsonplaceholder.typicode.com/todos?_limit=5'
	);
	return await response.json();
}
