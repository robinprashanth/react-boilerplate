import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import login from './LoginReducer';
import global from './GlobalReducer';

export default combineReducers({
  router: routerReducer,
  login,
  global
});

