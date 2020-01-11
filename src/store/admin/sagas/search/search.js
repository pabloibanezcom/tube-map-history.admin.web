import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from 'store/admin/actions/search/actionTypes';
import { searchParamsChangeSagaStart } from './workers';

export const searchSagas = [
  takeEvery(actionTypes.SEARCH_PARAMS_CHANGE_START, searchParamsChangeSagaStart)
];
