import { all, takeEvery } from 'redux-saga/effects';
import * as actionTypes from 'store/auth/actions/actionTypes';
import { loginSagaStart, signUpSagaStart } from './workers';

const authSagas = [
  takeEvery(actionTypes.LOGIN_START, loginSagaStart),
  takeEvery(actionTypes.SIGNUP_START, signUpSagaStart)
];

export function* watchAuth() {
  yield all([...authSagas]);
}
