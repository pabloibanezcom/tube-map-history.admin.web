import Api from 'http';
import { put } from 'redux-saga/effects';
import { getTownsFail, getTownsSuccess } from 'store/admin/actions';

export function* getTownsSagaStart() {
  try {
    const response = yield Api.town.getAll();
    yield put(getTownsSuccess(response.data));
  } catch (err) {
    yield put(getTownsFail(err));
  }
}
