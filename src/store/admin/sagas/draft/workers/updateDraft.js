import Api from 'http';
import { put } from 'redux-saga/effects';
import {
  finishAction,
  getDraftStart,
  updateDraftFail,
  updateDraftSuccess
} from 'store/admin/actions';
import { info } from 'util/notification';

export function* updateDraftSagaStart(action) {
  try {
    yield Api.draft.update(action.draft);
    yield put(updateDraftSuccess());
    yield put(finishAction());
    yield put(getDraftStart(action.draft._id));
    info('Draft updated succesully');
  } catch (err) {
    yield put(updateDraftFail(err));
  }
}
