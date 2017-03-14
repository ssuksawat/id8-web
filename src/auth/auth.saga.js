import { call, cancel, fork, put, take } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGOUT, SIGNUP_REQUEST, AUTH_SUCCESS, AUTH_ERROR } from './auth.action';
import * as AuthService from './auth.service';

export function* login(credentials) {
  try {
    const { user } = yield call(AuthService.authenticate, credentials);
    yield put({ type: AUTH_SUCCESS, payload: user });
  } catch (error) {
    yield put({ type: AUTH_ERROR, payload: error });
  }
}

export function* signup(credentials) {
  try {
    const { user } = yield call(AuthService.register, credentials);
    yield put({ type: AUTH_SUCCESS, payload: user });
  } catch (error) {
    yield put({ type: AUTH_ERROR, payload: error });
  }
}

export function* loginFlow() {
  while (true) {
    const { credentials } = yield take(LOGIN_REQUEST);
    const task = yield fork(login, credentials);
    const action = yield take([LOGOUT, AUTH_ERROR]);
    if (action.type === LOGOUT) yield cancel(task);
    yield call(AuthService.logout);
  }
}

export function* signupFlow() {
  while (true) {
    const { credentials } = yield take(SIGNUP_REQUEST);
    const task = yield fork(signup, credentials);
    const action = yield take([LOGOUT, AUTH_ERROR]);
    if (action.type === LOGOUT) yield cancel(task);
    yield call(AuthService.logout);
  }
}

export default function* saga() {
  yield fork(loginFlow);
  yield fork(signupFlow);
}
