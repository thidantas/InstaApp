import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyapi.io/data/v1/',
  timeout: 1000,
  headers: {'app-id':/* app-id header disponibilizado ao fazer cadastro no site oficial da api */
},
});

export default api;