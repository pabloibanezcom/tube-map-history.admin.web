import Api from 'http';
import { put, select } from 'redux-saga/effects';
import {
  deleteLineFail,
  deleteLineSuccess,
  getDraftStart,
  searchParamsChangeStart
} from 'store/admin/actions';
import { error, info } from 'util/notification';

export function* deleteLineSagaStart(action) {
  try {
    const state = yield select();
    yield Api.line.delete(action.lineId);
    yield put(deleteLineSuccess());
    yield put(getDraftStart(state.admin.draft._id));
    yield put(searchParamsChangeStart());
    info('Line was deleteded succesully');
  } catch (err) {
    error('Something went wrong!');
    yield put(deleteLineFail(err));
  }
}
