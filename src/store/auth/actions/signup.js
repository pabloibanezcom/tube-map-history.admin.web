import * as actionTypes from './actionTypes';

export const signUpStart = (email, password, name) => {
  return {
    type: actionTypes.SIGNUP_START,
    email,
    password,
    name
  };
};

export const signUpSuccess = () => {
  return {
    type: actionTypes.SIGNUP_SUCCESS
  };
};

export const signUpFail = error => {
  return {
    type: actionTypes.SIGNUP_FAIL,
    error
  };
};
