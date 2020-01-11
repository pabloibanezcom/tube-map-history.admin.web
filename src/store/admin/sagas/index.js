import { all } from 'redux-saga/effects';
import { actionSagas } from './action/action';
import { connectionSagas } from './connection';
import { draftSagas } from './draft';
import { generationSagas } from './generation';
import { lineSagas } from './line';
import { searchSagas } from './search';
import { stationSagas } from './station';
import { townSagas } from './town';
import { userSagas } from './user';

export function* watchAdmin() {
  yield all([
    ...userSagas,
    ...actionSagas,
    ...townSagas,
    ...draftSagas,
    ...lineSagas,
    ...stationSagas,
    ...connectionSagas,
    ...generationSagas,
    ...searchSagas
  ]);
}
