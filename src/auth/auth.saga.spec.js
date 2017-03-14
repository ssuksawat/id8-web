import { call, take, fork, cancel, put } from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/lib/utils';

import * as AuthService from './auth.service';
import { LOGIN_REQUEST, SIGNUP_REQUEST, LOGOUT, AUTH_SUCCESS, AUTH_ERROR } from './auth.action';
import { signup, signupFlow, login, loginFlow } from './auth.saga';

describe('Signup flow', function () {
  test('sign up then log out', function () {
    const credentials = { fullName: 'Tester', email: 'tester@test.com', password: 'test1234' };
    const signupTask = createMockTask();
    const iterator = signupFlow();

    expect(iterator.next().value)
      .toEqual(take(SIGNUP_REQUEST));

    expect(iterator.next({ credentials }).value)
      .toEqual(fork(signup, credentials));

    expect(iterator.next(signupTask).value)
      .toEqual(take([LOGOUT, AUTH_ERROR]));

    expect(iterator.next({ type: LOGOUT }).value)
      .toEqual(cancel(signupTask));

    expect(iterator.next().value)
      .toEqual(call(AuthService.logout));
  });

  test('sign up task - success', function () {
    const credentials = { fullName: 'Tester', email: 'tester@test.com', password: 'test1234' };
    const response = { user: { fullName: 'Tester' } };
    const iterator = signup(credentials);

    expect(iterator.next().value)
      .toEqual(call(AuthService.register, credentials));

    expect(iterator.next(response).value)
      .toEqual(put({ type: AUTH_SUCCESS, payload: response.user }));
  });

  test('sign up task - error', function () {
    const credentials = { fullName: 'Tester', email: 'tester@test.com', password: 'test1234' };
    const error = new Error('something went wrong');
    const iterator = signup(credentials);

    expect(iterator.next().value)
      .toEqual(call(AuthService.register, credentials));

    expect(iterator.throw(error).value)
      .toEqual(put({ type: AUTH_ERROR, payload: error }));
  });
});

describe('Login flow', function () {
  test('login then log out', function () {
    const credentials = { email: 'tester@test.com', password: 'test1234' };
    const loginTask = createMockTask();
    const iterator = loginFlow();

    expect(iterator.next().value)
      .toEqual(take(LOGIN_REQUEST));

    expect(iterator.next({ credentials }).value)
      .toEqual(fork(login, credentials));

    expect(iterator.next(loginTask).value)
      .toEqual(take([LOGOUT, AUTH_ERROR]));

    expect(iterator.next({ type: LOGOUT }).value)
      .toEqual(cancel(loginTask));

    expect(iterator.next().value)
      .toEqual(call(AuthService.logout));
  });

  test('login task - success', function () {
    const credentials = { email: 'tester@test.com', password: 'test1234' };
    const response = { user: { fullName: 'Tester' } };
    const iterator = login(credentials);

    expect(iterator.next().value)
      .toEqual(call(AuthService.authenticate, credentials));

    expect(iterator.next(response).value)
      .toEqual(put({ type: AUTH_SUCCESS, payload: response.user }));
  });

  test('login task - error', function () {
    const credentials = { fullName: 'Tester', email: 'tester@test.com', password: 'test1234' };
    const error = new Error('something went wrong');
    const iterator = login(credentials);

    expect(iterator.next().value)
      .toEqual(call(AuthService.authenticate, credentials));

    expect(iterator.throw(error).value)
      .toEqual(put({ type: AUTH_ERROR, payload: error }));
  });
});
