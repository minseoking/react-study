import qs from 'qs';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'comma' })
});


const Axios = {
  getInstance() {
    return axiosInstance;
  },
  getAccessToken() {
    return axiosInstance.defaults.headers.common.Authorization;
  },
};

export default Axios;
