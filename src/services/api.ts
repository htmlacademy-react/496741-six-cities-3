import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { getToken } from './token.ts';
import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-toastify';

type DetailMessageType = {
  type: string;
  message: string;
}

const shouldDisplayError = (response: AxiosResponse) => {
  if (!getToken() && response.status as StatusCodes === StatusCodes.UNAUTHORIZED) {
    return false;
  }
  return true;
};

const BACKEND_URL = 'https://16.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (!error.response) {
        toast.warn(error.message, {
          toastId: error.message,
        });
      }

      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = error.response.data;
        toast.warn(detailMessage.message, {
          toastId: detailMessage.message,
        });
      }

      throw error;
    }
  );

  return api;
};
