import * as actionTypes from './actionTypes';

export const deleteConnectionStart = connectionId => {
  return {
    type: actionTypes.DELETE_CONNECTION_START,
    connectionId
  };
};

export const deleteConnectionSuccess = () => {
  return {
    type: actionTypes.DELETE_CONNECTION_SUCCESS
  };
};

export const deleteConnectionFail = error => {
  return {
    type: actionTypes.DELETE_CONNECTION_FAIL,
    error
  };
};
