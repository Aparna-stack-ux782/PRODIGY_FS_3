import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import useStore from '../../src/store';
import { productAPI, cartAPI, reviewAPI } from '../../src/lib/services';
import styles from '../../styles/ProductDetail.module.css';
export const productAPI = {
  getAll: (category, sort) => api.get('/products', { params: { category, sort } }),
  getById: (id) => api.get(`/products/${id}`),
  create: (data) => api.post('/products', data),
  update: (id, data) => api.put(`/products/${id}`, data),
  delete: (id) => api.delete(`/products/${id}`),
};

export const userAPI = {
  register: (data) => api.post('/users/register', data),
  login: (data) => api.post('/users/login', data),
  getProfile: () => api.get('/users/profile'),
  updateProfile: (data) => api.put('/users/profile', data),
};

export const cartAPI = {
  get: () => api.get('/cart'),
  add: (data) => api.post('/cart/add', data),
  remove: (data) => api.post('/cart/remove', data),
  clear: () => api.delete('/cart/clear'),
};

export const orderAPI = {
  getAll: () => api.get('/orders'),
  getById: (id) => api.get(`/orders/${id}`),
  create: (data) => api.post('/orders', data),
  updateStatus: (id, data) => api.put(`/orders/${id}`, data),
};

export const reviewAPI = {
  get: (productId) => api.get(`/reviews/${productId}`),
  create: (data) => api.post('/reviews', data),
  delete: (id) => api.delete(`/reviews/${id}`),
};
