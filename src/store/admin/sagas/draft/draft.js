import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from 'store/admin/actions/draft/actionTypes';
import {
  addDraftSagaStart,
  deleteDraftSagaStart,
  getDraftSagaStart,
  updateDraftSagaStart
} from './workers';

export const draftSagas = [
  takeEvery(actionTypes.ADD_DRAFT_START, addDraftSagaStart),
  takeEvery(actionTypes.GET_DRAFT_START, getDraftSagaStart),
  takeEvery(actionTypes.UPDATE_DRAFT_START, updateDraftSagaStart),
  takeEvery(actionTypes.DELETE_DRAFT_START, deleteDraftSagaStart)
];
