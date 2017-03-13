import { LOGIN_REQUEST, SIGNUP_REQUEST, AUTH_SUCCESS, AUTH_ERROR, LOGOUT } from './auth.action';

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  user: {
    id: '',
    fullName: '',
    email: '',
    photo: ''
  },
  error: undefined
};

export default (state = initialState, action) => {
  if (!action) { return state; }

  switch (action.type) {
    case LOGIN_REQUEST:
    case SIGNUP_REQUEST:
      return {
        ...state,
        isAuthenticating: true
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isAuthenticating: false,
        user: action.payload.user
      };
    case AUTH_ERROR:
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        isAuthenticating: false,
        user: initialState.user,
        error: action.error
      };
    default:
      return state;
  }
};
