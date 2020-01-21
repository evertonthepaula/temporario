import reqInterceptors from './interceptors/request';
import respInterceptors from './interceptors/response';

const axios = require('axios');

const instance = axios.create({
  method: 'get', // default verb
  baseURL: process.env.REACT_APP_API,
  headers: {},
});

// Add a request interceptor
instance.interceptors.response.use(reqInterceptors.request, reqInterceptors.error )

// Add a response interceptor
instance.interceptors.response.use(respInterceptors.response, respInterceptors.error )

export default instance;
