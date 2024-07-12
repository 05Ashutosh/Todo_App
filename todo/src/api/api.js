// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const signup = (userData) => {
    return axios.post(`${API_URL}/public/signup`, userData);
};

export const login = (userData) => {
    return axios.post(`${API_URL}/public/login`, userData);
};

export const fetchTodos = (token) => {
    return axios.get(`${API_URL}/todos`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};
