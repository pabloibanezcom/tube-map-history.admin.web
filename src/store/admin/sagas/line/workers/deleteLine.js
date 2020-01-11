import Api from 'http';
import { put } from 'redux-saga/effects';
import { deleteLineFail, deleteLineSuccess, searchParamsChangeStart } from 'store/admin/actions';
import { error, info } from 'util/notification';

export function* deleteLineSagaStart(action) {
  try {
    yield Api.line.delete(action.lineId);
    yield put(deleteLineSuccess());
    yield put(searchParamsChangeStart());
    info('Line was deleteded succesully');
  } catch (err) {
    error('Something went wrong!');
    yield put(deleteLineFail(err));
  }
}
