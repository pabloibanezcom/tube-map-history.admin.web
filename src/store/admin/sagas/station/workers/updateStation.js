import Api from 'http';
import { put } from 'redux-saga/effects';
import {
  searchParamsChangeStart,
  updateStationFail,
  updateStationSuccess
} from 'store/admin/actions';
import { info } from 'util/notification';

export function* updateStationSagaStart(action) {
  try {
    yield Api.station.update(action.station);
    yield put(updateStationSuccess());
    yield put(searchParamsChangeStart());
    info('Station updated succesully');
  } catch (err) {
    yield put(updateStationFail(err));
  }
}
