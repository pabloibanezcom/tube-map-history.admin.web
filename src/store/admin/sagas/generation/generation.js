import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from 'store/admin/actions/generation/actionTypes';
import { importDraftSagaStart } from './workers';

export const generationSagas = [takeEvery(actionTypes.IMPORT_DRAFT_START, importDraftSagaStart)];
