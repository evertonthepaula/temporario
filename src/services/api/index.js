import axios from 'axios';
import reqInterceptors from './interceptors/request';
import respInterceptors from './interceptors/response';

const instance = axios.create({
  method: 'get', // default verb
  baseURL: process.env.REACT_APP_API,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers':
      'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With',
    'Access-Control-Allow-Methods': 'GET'
  }
});

// Add a request interceptor
instance.interceptors.request.use(
  reqInterceptors.request,
  reqInterceptors.error
);

// Add a response interceptor
instance.interceptors.response.use(
  respInterceptors.response,
  respInterceptors.error
);

export default instance;
