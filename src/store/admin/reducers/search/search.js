export const searchParamsChangeStart = state => {
  return {
    ...state,
    loadingElements: true
  };
};

export const searchParamsChangeSuccess = (state, action) => {
  return {
    ...state,
    loadingElements: false,
    elements: action.elements,
    pagination: action.pagination,
    elementsType: action.elementsType,
    searchParams: action.searchParams
  };
};

export const searchParamsChangeFail = state => {
  return {
    ...state,
    loadingElements: false,
    elements: []
  };
};
