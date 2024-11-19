// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'daf4907c821b89c3d33d74dc38cf6bdc',
  },
});

export default api;
