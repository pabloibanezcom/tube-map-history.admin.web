import * as actionTypes from './actionTypes';

export const importDraftStart = (draftId, file) => {
  return {
    type: actionTypes.IMPORT_DRAFT_START,
    draftId,
    file
  };
};

export const importDraftSuccess = () => {
  return {
    type: actionTypes.IMPORT_DRAFT_SUCCESS
  };
};

export const importDraftFail = error => {
  return {
    type: actionTypes.IMPORT_DRAFT_FAIL,
    error
  };
};
