export const getDraftSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    draft: {
      ...action.draft,
      lines: action.draft.lines || [],
      stations: [],
      connections: []
    }
  };
};
