import Api from 'http';
import { put } from 'redux-saga/effects';
import { getOwnUserFail, getOwnUserSuccess } from 'store/admin/actions';

export function* getOwnUserSagaStart() {
  try {
    const response = yield Api.user.getOwn();
    yield put(getOwnUserSuccess(response.data));
  } catch (err) {
    yield put(getOwnUserFail(err));
  }
}
