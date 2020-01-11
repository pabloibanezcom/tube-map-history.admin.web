import * as actionTypes from './actionTypes';

export const getOwnUserStart = () => {
  return {
    type: actionTypes.USER_GET_OWN_START
  };
};

export const getOwnUserSuccess = user => {
  return {
    type: actionTypes.USER_GET_OWN_SUCCESS,
    user
  };
};

export const getOwnUserFail = error => {
  return {
    type: actionTypes.USER_GET_OWN_FAIL,
    error
  };
};
