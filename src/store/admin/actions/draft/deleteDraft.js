import * as actionTypes from './actionTypes';

export const deleteDraftStart = draftId => {
  return {
    type: actionTypes.DELETE_DRAFT_START,
    draftId
  };
};

export const deleteDraftSuccess = () => {
  return {
    type: actionTypes.DELETE_DRAFT_SUCCESS
  };
};

export const deleteDraftFail = error => {
  return {
    type: actionTypes.DELETE_DRAFT_FAIL,
    error
  };
};
