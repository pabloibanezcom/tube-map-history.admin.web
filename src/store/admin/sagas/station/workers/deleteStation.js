import Api from 'http';
import { put, select } from 'redux-saga/effects';
import {
  deleteStationFail,
  deleteStationSuccess,
  getDraftStart,
  searchParamsChangeStart
} from 'store/admin/actions';
import { error, info } from 'util/notification';

export function* deleteStationSagaStart(action) {
  try {
    const state = yield select();
    yield Api.station.delete(action.stationId);
    yield put(deleteStationSuccess());
    yield put(getDraftStart(state.admin.draft._id));
    yield put(searchParamsChangeStart());
    info('Station was deleteded succesully');
  } catch (err) {
    error('Something went wrong!');
    yield put(deleteStationFail(err));
  }
}
