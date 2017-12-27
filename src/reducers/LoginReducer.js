import { LoginType } from '../actions/ActionType';


const DEFAULT_STATE = {
  userInfo: '',
  isAuthendicated: '',
  loginMessage: ''
};

const setLogin = (state, action) => {
  const newState = [];
  Object.assign(newState, state);

  if (action.data.message) {
    newState.userInfo = {};
    newState.isAuthendicated = false;
    newState.loginMessage = action.data.message;
  } else {
    localStorage.setItem('userInfo', JSON.stringify(action.data.user));
    localStorage.setItem('token', action.data.token);
    localStorage.setItem('isAuthenticated', true);
    localStorage.setItem('loginMessage', '');
    newState.userInfo = action.data.user;
    newState.isAuthendicated = true;
    newState.loginMessage = '';
  }
  return newState;
};

const setLogOut = (state) => {
  const newState = [];
  Object.assign(newState, state);

  newState.userInfo = {};
  const test = false;
  newState.isAuthendicated = JSON.stringify(test);
  newState.loginMessage = '';
  localStorage.removeItem('userInfo');
  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('token');
  localStorage.setItem('loginMessage', '');
  return newState;
};

const setDefault = (state) => {
  const newState = {};
  Object.assign(newState, state, DEFAULT_STATE);
  return newState;
};

const setLoginFailed = (state, action) => {
  const newState = [];
  Object.assign(newState, state);
  newState.isAuthendicated = action.isAuthendicated;
  newState.loginMessage = action.loginMessage;
  return newState;
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case LoginType.LOGIN_SUCCESS:
      return setLogin(state, action);
    case LoginType.LOGIN_FAILED:
      return setLoginFailed(state, action);
    case LoginType.LOGIN_ERROR:
      return setDefault(state);
    case LoginType.LOGOUT_SUCCESS:
      return setLogOut(state);
    default:
      return state;
  }
}
