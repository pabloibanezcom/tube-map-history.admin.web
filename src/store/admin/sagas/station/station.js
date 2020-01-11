import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from 'store/admin/actions/station/actionTypes';
import { addStationSagaStart, deleteStationSagaStart, updateStationSagaStart } from './workers';

export const stationSagas = [
  takeEvery(actionTypes.ADD_STATION_START, addStationSagaStart),
  takeEvery(actionTypes.UPDATE_STATION_START, updateStationSagaStart),
  takeEvery(actionTypes.DELETE_STATION_START, deleteStationSagaStart)
];
