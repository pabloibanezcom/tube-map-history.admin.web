import transformError from 'util/transformError';
import updateObject from 'util/updateObject';

const initialState = {
  loading: false,
  errors: []
};

const startLoading = state => {
  return updateObject(state, { loading: true, errors: [] });
};

const stopLoading = (state, action) => {
  return updateObject(state, {
    loading: false,
    errors: action && action.errors ? action.errors.map(err => transformError(err, 'login')) : []
  });
};

const checkActionType = (action, type) => {
  return action.endsWith(type);
};

export const authReducer = (state = initialState, action) => {
  if (checkActionType(action.type, 'START')) {
    return startLoading(state);
  }
  if (checkActionType(action.type, 'SUCCESS') || checkActionType(action.type, 'FAIL')) {
    return stopLoading(state, action);
  }
  return state;
};
