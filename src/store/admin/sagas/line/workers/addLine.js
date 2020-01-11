import Api from 'http';
import { put, select } from 'redux-saga/effects';
import {
  addLineFail,
  addLineSuccess,
  getDraftStart,
  searchParamsChangeStart
} from 'store/admin/actions';
import { error, info } from 'util/notification';

export function* addLineSagaStart(action) {
  try {
    const state = yield select();
    yield Api.line.add(state.admin.draft._id, { ...action.line, order: 99 });
    yield put(addLineSuccess());
    yield put(getDraftStart(state.admin.draft._id));
    yield put(searchParamsChangeStart());
    info('Line was created succesully');
  } catch (err) {
    error('Something went wrong!');
    yield put(addLineFail(err));
  }
}
