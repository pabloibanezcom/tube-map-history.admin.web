import Api from 'http';
import { put } from 'redux-saga/effects';
import { getDraftFail, getDraftSuccess } from 'store/admin/actions';

export function* getDraftSagaStart(action) {
  try {
    const response = yield Api.draft.get(action.draftId);
    const linesResponse = yield Api.line.search(action.draftId, {
      select: 'key order name shortName colour fontColour year'
    });
    yield put(getDraftSuccess({ ...response.data, lines: linesResponse.data.elements }));
  } catch (err) {
    yield put(getDraftFail(err));
  }
}
