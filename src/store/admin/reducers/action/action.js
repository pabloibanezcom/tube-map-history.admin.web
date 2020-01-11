export const startAction = (state, action) => {
  return {
    ...state,
    actionPanelInitiated: true,
    action: action.actionName,
    actionObj: action.actionObj
  };
};

export const finishAction = state => {
  return {
    ...state,
    actionPanelInitiated: false,
    action: null,
    actionObj: null
  };
};

export const clearDraft = state => {
  return {
    ...state,
    actionPanelInitiated: false,
    action: null,
    actionObj: null,
    draft: null,
    elements: [],
    searchParams: null,
    pagination: null
  };
};
