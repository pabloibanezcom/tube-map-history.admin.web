import * as actionTypes from './actionTypes';

export const loginStart = (history, email, password) => {
  return {
    type: actionTypes.LOGIN_START,
    history,
    email,
    password
  };
};

export const loginSuccess = () => {
  return {
    type: actionTypes.LOGIN_SUCCESS
  };
};

export const loginFail = errors => {
  return {
    type: actionTypes.LOGIN_FAIL,
    errors
  };
};
