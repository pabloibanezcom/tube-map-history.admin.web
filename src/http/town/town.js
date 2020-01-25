import axios from '../axios';

const defaultPagination = require('../defaultParams/pagination.json');
const searchLinesParams = require('../defaultParams/searchLines.json');

export default class Town {
  // Get towns
  static getAll = () => {
    return axios.get(`town/all`);
  };

  // Search towns
  static search = (draftId, searchParams, pagination) => {
    return axios.post(`town/search`, {
      filter: searchParams ? searchParams.filter : searchLinesParams.filter,
      sort: { [searchParams && searchParams.sort ? searchParams.sort : 'order']: 1 },
      select:
        searchParams && searchParams.select !== null
          ? searchParams.select
          : searchLinesParams.select,
      populate:
        searchParams && searchParams.populate !== null
          ? searchParams.populate
          : searchLinesParams.populate,
      pagination: pagination || defaultPagination
    });
  };

  // Get town info
  static get = townIdOrName => {
    return axios.get(`town/${townIdOrName}`);
  };

  // Add town
  static add = town => {
    return axios.post('town', town);
  };

  // Update town
  static update = town => {
    return axios.put(`town/${town._id}`, town);
  };

  // Delete town
  static delete = townId => {
    return axios.delete(`town/${townId}`);
  };
}
