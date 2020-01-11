import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from 'store/admin/actions/action/actionTypes';
import { changeElementsTypeSagaStart } from './workers';

export const actionSagas = [
  takeEvery(actionTypes.CHANGE_ELEMENTS_TYPE, changeElementsTypeSagaStart)
];
