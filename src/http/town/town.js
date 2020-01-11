import axios from '../axios';

export default class Town {
  // Get towns
  static getAll = () => {
    return axios.get(`town/all`);
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
