export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGOUT = 'LOGOUT';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';

export function submitLogin(credentials) {
  return {
    type: LOGIN_REQUEST,
    credentials
  };
}

export function submitSignup(credentials) {
  return {
    type: SIGNUP_REQUEST,
    credentials
  };
}
