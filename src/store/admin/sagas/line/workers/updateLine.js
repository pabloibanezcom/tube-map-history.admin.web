import Api from 'http';
import { put } from 'redux-saga/effects';
import { searchParamsChangeStart, updateLineFail, updateLineSuccess } from 'store/admin/actions';
import { info } from 'util/notification';

export function* updateLineSagaStart(action) {
  try {
    yield Api.line.update(action.line);
    yield put(updateLineSuccess());
    yield put(searchParamsChangeStart());
    info('Line updated succesully');
  } catch (err) {
    yield put(updateLineFail(err));
  }
}
