import * as actionTypes from './actionTypes';

export const startAction = (actionName, actionObj) => {
  return {
    type: actionTypes.START_ACTION,
    actionName,
    actionObj
  };
};
