import Api from 'http';
import { put, select } from 'redux-saga/effects';
import { searchParamsChangeFail, searchParamsChangeSuccess } from 'store/admin/actions';
import { error } from 'util/notification';
import { getDefaultPagination, getDefaultSearchParams } from 'util/searchDefaults';

export function* searchParamsChangeSagaStart(action) {
  try {
    const state = yield select();
    const elementsType = action.elementsType || state.admin.elementsType;

    let searchParams = action.searchParams || state.admin.searchParams;
    if (!searchParams) {
      searchParams = getDefaultSearchParams(elementsType);
    }

    let pagination = action.pagination || state.admin.pagination;
    if (
      !pagination ||
      action.elementsType !== state.admin.elementsType ||
      action.searchParams !== state.admin.searchParams
    ) {
      pagination = getDefaultPagination(elementsType);
    }

    const response = yield Api[elementsType].search(
      state.admin.draft._id,
      searchParams,
      pagination
    );
    yield put(searchParamsChangeSuccess(elementsType, response.data, searchParams));
  } catch (err) {
    error('Something went wrong!');
    yield put(searchParamsChangeFail(err));
  }
}
