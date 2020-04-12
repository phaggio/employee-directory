import axios from 'axios';
const baseURL = `https://randomuser.me/api/`;
const nationality = `us`;
const numberEmployees = 50;
const getURL = `${baseURL}?nat=${nationality}&results=${numberEmployees}`;

export default {
  getEmployees() {
    return axios.get(getURL);
  },
};
