import Api from 'http';
import { put, select } from 'redux-saga/effects';
import {
  addConnectionFail,
  addConnectionSuccess,
  getDraftStart,
  searchParamsChangeStart
} from 'store/admin/actions';
import { error, info } from 'util/notification';

export function* addConnectionSagaStart(action) {
  try {
    const state = yield select();
    yield Api.connection.add(state.admin.draft._id, { ...action.connection, order: 99 });
    yield put(addConnectionSuccess());
    yield put(getDraftStart(state.admin.draft._id));
    yield put(searchParamsChangeStart());
    info('Connection was created succesully');
  } catch (err) {
    error('Something went wrong!');
    yield put(addConnectionFail(err));
  }
}
