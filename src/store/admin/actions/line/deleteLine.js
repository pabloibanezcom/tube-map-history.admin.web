import * as actionTypes from './actionTypes';

export const deleteLineStart = lineId => {
  return {
    type: actionTypes.DELETE_LINE_START,
    lineId
  };
};

export const deleteLineSuccess = () => {
  return {
    type: actionTypes.DELETE_LINE_SUCCESS
  };
};

export const deleteLineFail = error => {
  return {
    type: actionTypes.DELETE_LINE_FAIL,
    error
  };
};
