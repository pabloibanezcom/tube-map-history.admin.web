import * as actionTypes from './actionTypes';

export const updateLineStart = line => {
  return {
    type: actionTypes.UPDATE_LINE_START,
    line
  };
};

export const updateLineSuccess = () => {
  return {
    type: actionTypes.UPDATE_LINE_SUCCESS
  };
};

export const updateLineFail = error => {
  return {
    type: actionTypes.UPDATE_LINE_FAIL,
    error
  };
};
