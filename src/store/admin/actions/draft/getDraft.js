import * as actionTypes from './actionTypes';

export const getDraftStart = draftId => {
  return {
    type: actionTypes.GET_DRAFT_START,
    draftId
  };
};

export const getDraftSuccess = draft => {
  return {
    type: actionTypes.GET_DRAFT_SUCCESS,
    draft
  };
};

export const getDraftFail = error => {
  return {
    type: actionTypes.GET_DRAFT_FAIL,
    error
  };
};
