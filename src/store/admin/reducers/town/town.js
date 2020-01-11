export const getTownsSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    towns: action.towns
  };
};
