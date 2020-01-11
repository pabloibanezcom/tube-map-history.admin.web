import * as actionTypes from './actionTypes';

export const updateStationStart = station => {
  return {
    type: actionTypes.UPDATE_STATION_START,
    station
  };
};

export const updateStationSuccess = () => {
  return {
    type: actionTypes.UPDATE_STATION_SUCCESS
  };
};

export const updateStationFail = error => {
  return {
    type: actionTypes.UPDATE_STATION_FAIL,
    error
  };
};
