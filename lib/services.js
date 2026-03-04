import axios from 'axios';

import { productAPI, cartAPI } from '../../lib/services';



const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
});

/* PRODUCTS */
export const productAPI = {
  getAll: (category, sort) =>
    api.get('/products', { params: { category, sort } }),
  getById: (id) => api.get(`/products/${id}`),
};

/* CART */
export const cartAPI = {
  get: () => api.get('/cart'),
  add: (item) => api.post('/cart', item),
  remove: (id) => api.delete(`/cart/${id}`),
};

/* ORDERS */
export const orderAPI = {
  getAll: () => api.get('/orders'),
  create: (data) => api.post('/orders', data),
};

/* USERS */
export const userAPI = {
  login: (data) => api.post('/auth/login', data),
  register: (data) => api.post('/auth/register', data),
  profile: () => api.get('/auth/profile'),
};

export default api;