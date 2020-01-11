import axios from '../axios';

const defaultPagination = require('../defaultParams/pagination.json');
const searchConnectionsParams = require('../defaultParams/searchConnections.json');

export default class Connection {
  // Search connections
  static search = (draftId, searchParams, pagination) => {
    return axios.post(`${draftId}/connection/search`, {
      filter: searchParams.filter,
      sort: { name: 1 },
      populate: searchConnectionsParams.populate,
      pagination: pagination || defaultPagination
    });
  };

  // Get full info from connection
  static get = connectionId => {
    return axios.get(`connection/${connectionId}`);
  };

  // Add connection
  static add = (draftId, connection) => {
    return axios.post(`${draftId}/connection`, connection);
  };

  // Update connection
  static update = connection => {
    return axios.put(`connection/${connection._id}`, connection);
  };

  // Delete connection
  static delete = connectionId => {
    return axios.delete(`connection/${connectionId}`);
  };
}
