import axios from '../axios';

const defaultPagination = require('../defaultParams/pagination.json');
const searchDraftsParams = require('../defaultParams/searchDrafts.json');

export default class Draft {
  // Search drafts
  static search = (searchParams, pagination) => {
    return axios.post('draft/search', {
      filter: searchParams,
      sort: { name: 1 },
      populate: searchDraftsParams.populate,
      pagination: pagination || defaultPagination
    });
  };

  // Get draft summary
  static get = draftId => {
    return axios.get(`draft/${draftId}`);
  };

  // Add draft
  static add = (town, draft) => {
    return axios.post(`${town}/draft`, draft);
  };

  // Update draft
  static update = draft => {
    return axios.put(`draft/${draft._id}`, draft);
  };

  // Delete draft
  static delete = draftId => {
    return axios.delete(`draft/${draftId}`);
  };

  // Request publication
  static requestPublication = draftId => {
    return axios.put(`draft/${draftId}/publish-request`);
  };

  // Publish draft
  static publish = draftId => {
    return axios.put(`draft/${draftId}/publish`);
  };

  // Unpublish draft
  static unpublish = draftId => {
    return axios.put(`draft/${draftId}/unpublish`);
  };

  // Duplicate draft
  static duplicate = draftId => {
    return axios.put(`draft/${draftId}/duplicate`);
  };

  // Add manager to draft
  static addManager = (draftId, userId) => {
    return axios.put(`draft/${draftId}/add-manager/${userId}`);
  };

  // Remove manager from draft
  static removeManager = (draftId, userId) => {
    return axios.put(`draft/${draftId}/remove-manager/${userId}`);
  };
}
