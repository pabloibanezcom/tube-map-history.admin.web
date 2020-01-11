import { push } from 'connected-react-router';
import Api from 'http';
import { put } from 'redux-saga/effects';
import {
  getDraftStart,
  importDraftFail,
  importDraftSuccess,
  searchParamsChangeStart
} from 'store/admin/actions';
import { error, info } from 'util/notification';

export function* importDraftSagaStart(action) {
  try {
    yield Api.generation.importDraft(action.draftId, action.file);
    yield put(importDraftSuccess());
    yield put(push(`/admin/draft/${action.draftId}/lines`));
    yield put(getDraftStart(action.draftId));
    yield put(searchParamsChangeStart());
    info('Draft was imported succesully');
  } catch (err) {
    error('Something went wrong!');
    yield put(importDraftFail(err));
  }
}
