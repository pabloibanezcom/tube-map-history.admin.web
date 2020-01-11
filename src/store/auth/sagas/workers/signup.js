import Api from 'http';
import { put } from 'redux-saga/effects';
import * as actions from 'store/auth/actions';

export function* signUpSagaStart(action) {
  try {
    const response = yield Api.user.signUp(action.email, action.password, action.name);
    Api.setAuthToken(response.data.token);
    localStorage.setItem('auth', response.data.token);
    yield put(actions.signUpSuccess());
    yield put(actions.loginStart(action.email, action.password));
  } catch (err) {
    yield put(actions.signUpFail(err));
  }
}
