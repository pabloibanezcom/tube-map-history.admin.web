import * as actionTypes from './actionTypes';

export const addConnectionStart = connection => {
  return {
    type: actionTypes.ADD_CONNECTION_START,
    connection
  };
};

export const addConnectionSuccess = () => {
  return {
    type: actionTypes.ADD_CONNECTION_SUCCESS
  };
};

export const addConnectionFail = error => {
  return {
    type: actionTypes.ADD_CONNECTION_FAIL,
    error
  };
};
