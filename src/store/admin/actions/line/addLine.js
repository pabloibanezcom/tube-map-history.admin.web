import * as actionTypes from './actionTypes';

export const addLineStart = line => {
  return {
    type: actionTypes.ADD_LINE_START,
    line
  };
};

export const addLineSuccess = () => {
  return {
    type: actionTypes.ADD_LINE_SUCCESS
  };
};

export const addLineFail = error => {
  return {
    type: actionTypes.ADD_LINE_FAIL,
    error
  };
};
