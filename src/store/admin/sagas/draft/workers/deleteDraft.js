import Api from 'http';
import { put } from 'redux-saga/effects';
import { deleteDraftFail, deleteDraftSuccess, finishAction } from 'store/admin/actions';
import { error, info } from 'util/notification';

export function* deleteDraftSagaStart(action) {
  try {
    yield Api.draft.delete(action.draftId);
    yield put(deleteDraftSuccess());
    yield put(finishAction());
    // yield put(push('/admin'));
    info('Draft was deleteded succesully');
  } catch (err) {
    error('Something went wrong!');
    yield put(deleteDraftFail(err));
  }
}
