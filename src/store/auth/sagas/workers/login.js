import Api from 'http';
import { put } from 'redux-saga/effects';
import { loginFail, loginSuccess } from 'store/auth/actions';

export function* loginSagaStart(action) {
  try {
    const response = yield Api.user.login(action.email, action.password);
    Api.setAuthToken(response.data.token);
    localStorage.setItem('auth', response.data.token);
    action.history.push('/admin');
    yield put(loginSuccess());
  } catch (err) {
    yield put(loginFail([err]));
  }
}
