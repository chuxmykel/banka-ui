import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_URL,
});

export const setAuthToken = (token) => {
  if (!token) {
    delete instance.defaults.headers.common.Authorization;
  }
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default instance;
