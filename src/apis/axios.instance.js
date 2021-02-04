import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:8000/api/v1/',
});

export const setAuthToken = token => {
  token
    ? (instance.defaults.headers.common['Authorization'] = token)
    : delete instance.defaults.headers.common['Authorization'];
};
