import Api from 'http';
import { put, select } from 'redux-saga/effects';
import {
  addStationFail,
  addStationSuccess,
  getDraftStart,
  searchParamsChangeStart
} from 'store/admin/actions';
import { error, info } from 'util/notification';

export function* addStationSagaStart(action) {
  try {
    const state = yield select();
    yield Api.station.add(state.admin.draft._id, { ...action.station, order: 99 });
    yield put(addStationSuccess());
    yield put(getDraftStart(state.admin.draft._id));
    yield put(searchParamsChangeStart());
    info('Station was created succesully');
  } catch (err) {
    error('Something went wrong!');
    yield put(addStationFail(err));
  }
}
