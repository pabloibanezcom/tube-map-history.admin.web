import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from 'store/admin/actions/user/actionTypes';
import { getOwnUserSagaStart } from './workers';

export const userSagas = [takeEvery(actionTypes.USER_GET_OWN_START, getOwnUserSagaStart)];
