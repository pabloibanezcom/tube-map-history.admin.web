import * as actionTypes from './actionTypes';

export const searchParamsChangeStart = (searchParams, pagination, elementsType) => {
  return {
    type: actionTypes.SEARCH_PARAMS_CHANGE_START,
    searchParams,
    pagination,
    elementsType
  };
};

export const searchParamsChangeSuccess = (elementsType, { elements, pagination }, searchParams) => {
  return {
    type: actionTypes.SEARCH_PARAMS_CHANGE_SUCCESS,
    elementsType,
    elements,
    pagination,
    searchParams
  };
};

export const searchParamsChangeFail = error => {
  return {
    type: actionTypes.SEARCH_PARAMS_CHANGE_FAIL,
    error
  };
};
