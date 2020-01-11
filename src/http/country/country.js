import axios from '../axios';

export default class Country {
  // Get countries
  static getCountries = () => {
    return axios.get(`countries`);
  };
}
