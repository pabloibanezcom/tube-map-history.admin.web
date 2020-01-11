import * as actionActions from 'store/admin/actions/action/actionTypes';
import * as connectionActions from 'store/admin/actions/connection/actionTypes';
import * as draftActions from 'store/admin/actions/draft/actionTypes';
import * as generationActions from 'store/admin/actions/generation/actionTypes';
import * as lineActions from 'store/admin/actions/line/actionTypes';
import * as searchActions from 'store/admin/actions/search/actionTypes';
import * as stationActions from 'store/admin/actions/station/actionTypes';
import * as townActions from 'store/admin/actions/town/actionTypes';
import * as userActions from 'store/admin/actions/user/actionTypes';
import updateObject from 'util/updateObject';
import * as actionReducers from './action/action';
import * as draftReducers from './draft/draft';
import * as searchReducers from './search/search';
import * as townReducers from './town/town';
import * as userReducers from './user/user';

const initialState = {
  loading: false,
  loadingElements: false,
  actionPanelInitiated: false,
  action: null,
  actionObj: null,
  user: null,
  towns: null,
  draft: null,
  elementsType: 'line',
  elements: [],
  searchParams: null,
  pagination: null
};

const defaultStart = state => {
  return updateObject(state, { loading: true });
};

const defaultSuccess = state => {
  return updateObject(state, { loading: false, action: null, actionObj: null });
};

const defaultFail = state => {
  return updateObject(state, { loading: false });
};

const checkActionType = (action, type) => {
  return action.endsWith(type);
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    // Default ones
    case checkActionType(action.type, 'START'):
      return defaultStart(state);
    case checkActionType(action.type, 'SUCCESS'):
      return defaultSuccess(state);
    case checkActionType(action.type, 'FAIL'):
      return defaultFail(state);

    // Action
    case actionActions.START_ACTION:
      return actionReducers.startAction(state, action);
    case actionActions.FINISH_ACTION:
      return actionReducers.finishAction(state);
    case actionActions.CLEAR_DRAFT:
      return actionReducers.clearDraft(state);

    // Generation
    case generationActions.IMPORT_DRAFT_START:
      return defaultStart(state);
    case generationActions.IMPORT_DRAFT_SUCCESS:
      return defaultSuccess(state);
    case generationActions.IMPORT_DRAFT_FAIL:
      return defaultFail(state);

    // User
    case userActions.USER_GET_OWN_SUCCESS:
      return userReducers.getOwnSuccess(state, action);

    // Town
    case townActions.GET_TOWNS_START:
      return defaultStart(state);
    case townActions.GET_TOWNS_SUCCESS:
      return townReducers.getTownsSuccess(state, action);
    case townActions.GET_TOWNS_FAIL:
      return defaultFail(state);

    // Draft
    case draftActions.GET_DRAFT_START:
      return defaultStart(state);
    case draftActions.GET_DRAFT_SUCCESS:
      return draftReducers.getDraftSuccess(state, action);
    case draftActions.GET_DRAFT_FAIL:
      return defaultFail(state);

    case draftActions.UPDATE_DRAFT_START:
      return defaultStart(state);
    case draftActions.UPDATE_DRAFT_SUCCESS:
      return defaultSuccess(state);
    case draftActions.UPDATE_DRAFT_FAIL:
      return defaultFail(state);

    // Search
    case searchActions.SEARCH_PARAMS_CHANGE_START:
      return searchReducers.searchParamsChangeStart(state, action);
    case searchActions.SEARCH_PARAMS_CHANGE_SUCCESS:
      return searchReducers.searchParamsChangeSuccess(state, action);
    case searchActions.SEARCH_PARAMS_CHANGE_FAIL:
      return searchReducers.searchParamsChangeFail(state);

    // Line

    case lineActions.ADD_LINE_START:
      return defaultStart(state);
    case lineActions.ADD_LINE_SUCCESS:
      return defaultSuccess(state);
    case lineActions.ADD_LINE_FAIL:
      return defaultFail(state);

    case lineActions.UPDATE_LINE_START:
      return defaultStart(state);
    case lineActions.UPDATE_LINE_SUCCESS:
      return defaultSuccess(state);
    case lineActions.UPDATE_LINE_FAIL:
      return defaultFail(state);

    case lineActions.DELETE_LINE_START:
      return defaultStart(state);
    case lineActions.DELETE_LINE_SUCCESS:
      return defaultSuccess(state);
    case lineActions.DELETE_LINE_FAIL:
      return defaultFail(state);

    // Station

    case stationActions.ADD_STATION_START:
      return defaultStart(state);
    case stationActions.ADD_STATION_SUCCESS:
      return defaultSuccess(state);
    case stationActions.ADD_STATION_FAIL:
      return defaultFail(state);

    case stationActions.UPDATE_STATION_START:
      return defaultStart(state);
    case stationActions.UPDATE_STATION_SUCCESS:
      return defaultSuccess(state);
    case stationActions.UPDATE_STATION_FAIL:
      return defaultFail(state);

    case stationActions.DELETE_STATION_START:
      return defaultStart(state);
    case stationActions.DELETE_STATION_SUCCESS:
      return defaultSuccess(state);
    case stationActions.DELETE_STATION_FAIL:
      return defaultFail(state);

    // Connection

    case connectionActions.ADD_CONNECTION_START:
      return defaultStart(state);
    case connectionActions.ADD_CONNECTION_SUCCESS:
      return defaultSuccess(state);
    case connectionActions.ADD_CONNECTION_FAIL:
      return defaultFail(state);

    case connectionActions.UPDATE_CONNECTION_START:
      return defaultStart(state);
    case connectionActions.UPDATE_CONNECTION_SUCCESS:
      return defaultSuccess(state);
    case connectionActions.UPDATE_CONNECTION_FAIL:
      return defaultFail(state);

    case connectionActions.DELETE_CONNECTION_START:
      return defaultStart(state);
    case connectionActions.DELETE_CONNECTION_SUCCESS:
      return defaultSuccess(state);
    case connectionActions.DELETE_CONNECTION_FAIL:
      return defaultFail(state);

    default:
      return state;
  }
};
