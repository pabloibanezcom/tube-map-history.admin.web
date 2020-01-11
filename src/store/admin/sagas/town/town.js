import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from 'store/admin/actions/town/actionTypes';
import { getTownsSagaStart } from './workers';

export const townSagas = [takeEvery(actionTypes.GET_TOWNS_START, getTownsSagaStart)];
