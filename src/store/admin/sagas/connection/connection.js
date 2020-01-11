import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from 'store/admin/actions/connection/actionTypes';
import {
  addConnectionSagaStart,
  deleteConnectionSagaStart,
  updateConnectionSagaStart
} from './workers';

export const connectionSagas = [
  takeEvery(actionTypes.ADD_CONNECTION_START, addConnectionSagaStart),
  takeEvery(actionTypes.UPDATE_CONNECTION_START, updateConnectionSagaStart),
  takeEvery(actionTypes.DELETE_CONNECTION_START, deleteConnectionSagaStart)
];
