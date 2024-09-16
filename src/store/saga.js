import { takeLatest, put, call } from 'redux-saga/effects';

import { fetchTodo } from './utils';
import { FETCH_TODO_LIST_REQUEST } from './actions/actionTypes';
import { fetchTodoListFailure, fetchTodoListSuccess, setSpinner } from './actions';


function* sagaWorker() {
	try {
		yield put(setSpinner(true))

		const todoList = yield call(fetchTodo);

		yield put(fetchTodoListSuccess(todoList));
	} catch (error) {
		yield put(fetchTodoListFailure(error))
	} finally {
		yield put(setSpinner(false))
	}
}

function* sagaWatcher() {
	yield takeLatest(FETCH_TODO_LIST_REQUEST, sagaWorker);
}

export { sagaWatcher }
