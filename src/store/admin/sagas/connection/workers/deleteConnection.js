import Api from 'http';
import { put, select } from 'redux-saga/effects';
import {
  deleteConnectionFail,
  deleteConnectionSuccess,
  getDraftStart,
  searchParamsChangeStart
} from 'store/admin/actions';
import { error, info } from 'util/notification';

export function* deleteConnectionSagaStart(action) {
  try {
    const state = yield select();
    yield Api.connection.delete(action.connectionId);
    yield put(deleteConnectionSuccess());
    yield put(getDraftStart(state.admin.draft._id));
    yield put(searchParamsChangeStart());
    info('Connection was deleteded succesully');
  } catch (err) {
    error('Something went wrong!');
    yield put(deleteConnectionFail(err));
  }
}
