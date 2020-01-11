import * as actionTypes from './actionTypes';

export const addStationStart = station => {
  return {
    type: actionTypes.ADD_STATION_START,
    station
  };
};

export const addStationSuccess = () => {
  return {
    type: actionTypes.ADD_STATION_SUCCESS
  };
};

export const addStationFail = error => {
  return {
    type: actionTypes.ADD_STATION_FAIL,
    error
  };
};
