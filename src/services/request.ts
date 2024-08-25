import axios from 'axios';
import Cookies from 'js-cookie';
import { message } from 'antd';
import { getItemLocalStorage, removeItemLocalStorage, setItemLocalStorage } from '@/utils';
import { LocalStorageKey } from '@/constants/local-storage.constants';

import authServices from './auth.services';


export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  config => {
    const accessToken = getItemLocalStorage(LocalStorageKey.access_token);
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  response => response.data,
  error => {
    const status = error?.response?.status;
    const data = error?.response?.data;

    if (error.message === 'Network Error' && error.response) {
      message.error('Please check your internet connection and try again');
    }
    if (status === 401 || data.message === 'Unauthorized') {
      const refreshToken = Cookies.get(LocalStorageKey.refresh_token);
      if (refreshToken) {
        return (
          authServices
            .refreshToken({
              refreshToken: refreshToken as string,
            })
             
            .then(resRefresh => {
              if (resRefresh.accessToken) {
                error.config.headers.Authorization = `Bearer ${resRefresh.accessToken}`;

                setItemLocalStorage(LocalStorageKey.access_token, resRefresh.accessToken);
                Cookies.set(LocalStorageKey.refresh_token, resRefresh.refreshToken, {
                  expires: new Date(Date.now() + resRefresh.refreshTokenExpiry * 1000),
                });
                return axiosClient(error.config);
              }
            })
            .catch(() => {
              removeItemLocalStorage(LocalStorageKey.access_token);
              Cookies.remove(LocalStorageKey.refresh_token);
              window.location.href = '/auth/login';
              return false;
            })
        );
      }

      removeItemLocalStorage(LocalStorageKey.access_token);
      Cookies.remove(LocalStorageKey.refresh_token);
      return axiosClient(error.config);
    }
    return Promise.reject(error);
  },
);

export const axiosPublicClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
