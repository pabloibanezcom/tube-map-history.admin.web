import * as actionTypes from './actionTypes';

export const updateDraftStart = draft => {
  return {
    type: actionTypes.UPDATE_DRAFT_START,
    draft
  };
};

export const updateDraftSuccess = () => {
  return {
    type: actionTypes.UPDATE_DRAFT_SUCCESS
  };
};

export const updateDraftFail = error => {
  return {
    type: actionTypes.UPDATE_DRAFT_FAIL,
    error
  };
};
