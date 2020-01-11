import * as actionTypes from './actionTypes';

export const deleteStationStart = stationId => {
  return {
    type: actionTypes.DELETE_STATION_START,
    stationId
  };
};

export const deleteStationSuccess = () => {
  return {
    type: actionTypes.DELETE_STATION_SUCCESS
  };
};

export const deleteStationFail = error => {
  return {
    type: actionTypes.DELETE_STATION_FAIL,
    error
  };
};
