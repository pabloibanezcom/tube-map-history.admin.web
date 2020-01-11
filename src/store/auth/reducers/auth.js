import updateObject from 'util/updateObject';

const initialState = {
  loading: false
};

const startLoading = state => {
  return updateObject(state, { loading: true });
};

const stopLoading = state => {
  return updateObject(state, { loading: false });
};

const checkActionType = (action, type) => {
  return action.endsWith(type);
};

export const authReducer = (state = initialState, action) => {
  if (checkActionType(action.type, 'START')) {
    return startLoading(state);
  }
  if (checkActionType(action.type, 'SUCCESS') || checkActionType(action.type, 'FAIL')) {
    return stopLoading(state);
  }
  return state;
};
