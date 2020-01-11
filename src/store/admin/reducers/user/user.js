export const getOwnSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    user: action.user
  };
};
