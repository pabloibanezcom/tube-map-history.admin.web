import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from 'store/admin/actions/line/actionTypes';
import { addLineSagaStart, deleteLineSagaStart, updateLineSagaStart } from './workers';

export const lineSagas = [
  takeEvery(actionTypes.ADD_LINE_START, addLineSagaStart),
  takeEvery(actionTypes.UPDATE_LINE_START, updateLineSagaStart),
  takeEvery(actionTypes.DELETE_LINE_START, deleteLineSagaStart)
];
