import * as actionTypes from './actionTypes';

export const loginStart = (email, password) => {
  return {
    type: actionTypes.LOGIN_START,
    email,
    password
  };
};

export const loginSuccess = () => {
  return {
    type: actionTypes.LOGIN_SUCCESS
  };
};

export const loginFail = error => {
  return {
    type: actionTypes.LOGIN_FAIL,
    error
  };
};
