import defaultPagination from './searchDefaults/defaultPagination.json';
import defaultSearchParamsConnection from './searchDefaults/defaultSearchParams_connection.json';
import defaultSearchParamsLine from './searchDefaults/defaultSearchParams_line.json';
import defaultSearchParamsStation from './searchDefaults/defaultSearchParams_station.json';

export const getDefaultPagination = elementsType => {
  if (elementsType === 'line' || elementsType === 'station' || elementsType === 'connection') {
    return defaultPagination;
  }
  return null;
};

export const getDefaultSearchParams = elementsType => {
  switch (elementsType) {
    case 'line':
      return defaultSearchParamsLine;
    case 'station':
      return defaultSearchParamsStation;
    case 'connection':
      return defaultSearchParamsConnection;
    default:
      return null;
  }
};
