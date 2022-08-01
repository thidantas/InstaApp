import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyapi.io/data/v1/',
  timeout: 1000,
  headers: {'app-id': '62cc6e4eb1270cde1dba8918'},
});

export default api;
