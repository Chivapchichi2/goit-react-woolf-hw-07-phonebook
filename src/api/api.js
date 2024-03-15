import axios from 'axios';
export const api = axios.create({
  baseURL: 'https://65f3fa20105614e654a1952f.mockapi.io/contacts',
});
