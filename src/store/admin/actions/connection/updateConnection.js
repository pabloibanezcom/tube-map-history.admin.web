import * as actionTypes from './actionTypes';

export const updateConnectionStart = connection => {
  return {
    type: actionTypes.UPDATE_CONNECTION_START,
    connection
  };
};

export const updateConnectionSuccess = () => {
  return {
    type: actionTypes.UPDATE_CONNECTION_SUCCESS
  };
};

export const updateConnectionFail = error => {
  return {
    type: actionTypes.UPDATE_CONNECTION_FAIL,
    error
  };
};
