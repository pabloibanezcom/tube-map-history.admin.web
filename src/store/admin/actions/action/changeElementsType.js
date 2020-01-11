import * as actionTypes from './actionTypes';

export const changeElementsType = elementsType => {
  return {
    type: actionTypes.CHANGE_ELEMENTS_TYPE,
    elementsType
  };
};
