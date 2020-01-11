import { put } from 'redux-saga/effects';
import { searchParamsChangeStart } from 'store/admin/actions';

export function* changeElementsTypeSagaStart(action) {
  yield put(searchParamsChangeStart(null, null, action.elementsType));
}
