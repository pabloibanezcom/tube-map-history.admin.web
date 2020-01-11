import Api from 'http';
import { put } from 'redux-saga/effects';
import {
  deleteStationFail,
  deleteStationSuccess,
  searchParamsChangeStart
} from 'store/admin/actions';
import { error, info } from 'util/notification';

export function* deleteStationSagaStart(action) {
  try {
    yield Api.station.delete(action.stationId);
    yield put(deleteStationSuccess());
    yield put(searchParamsChangeStart());
    info('Station was deleteded succesully');
  } catch (err) {
    error('Something went wrong!');
    yield put(deleteStationFail(err));
  }
}
