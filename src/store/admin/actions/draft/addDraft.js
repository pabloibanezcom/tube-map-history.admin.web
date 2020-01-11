import * as actionTypes from './actionTypes';

export const addDraftStart = (town, draft) => {
  return {
    type: actionTypes.ADD_DRAFT_START,
    town,
    draft
  };
};

export const addDraftSuccess = () => {
  return {
    type: actionTypes.ADD_DRAFT_SUCCESS
  };
};

export const addDraftFail = error => {
  return {
    type: actionTypes.ADD_DRAFT_FAIL,
    error
  };
};
