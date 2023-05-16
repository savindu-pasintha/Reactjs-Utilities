import React from 'react'
import axios from 'axios';

const axiosInstance =  axios.create({ baseURL: "http://localhost:5000" , });

 axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.Token = `${token}`;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
  
  axiosInstance.interceptors.response.use((response) => {
     return response;
  }, (error) => {
     return Promise.reject(error);
  });

export default axiosInstance
