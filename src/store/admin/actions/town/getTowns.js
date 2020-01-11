import * as actionTypes from './actionTypes';

export const getTownsStart = () => {
  return {
    type: actionTypes.GET_TOWNS_START
  };
};

export const getTownsSuccess = towns => {
  return {
    type: actionTypes.GET_TOWNS_SUCCESS,
    towns
  };
};

export const getTownsFail = error => {
  return {
    type: actionTypes.GET_TOWNS_FAIL,
    error
  };
};
