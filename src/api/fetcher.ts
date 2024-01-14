import axios, {
    AxiosError,
    AxiosHeaders,
    AxiosRequestConfig,
    Method,
  } from 'axios';
  
  axios.interceptors.request.use(
    async (config) => {
      config.headers = {
        accept: 'application/json',
        ...config.headers,
      } as AxiosHeaders['headers'];
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error);
    }
  );
  
  type IParam = {
    url: string;
    method: Method;
    data?: any;
    headers?: AxiosRequestConfig['headers'];
  };
  
  export const fetcher = async <T>({
    url,
    method,
    data,
    headers,
  }: IParam): Promise<T> => {
    try {
      const res = await axios<T>({
        url,
        method,
        data,
        headers,
      });
      return res.data;
    } catch (error) {
      let err = error as AxiosError;
      throw {
        statusCode: err.response?.status,
        ...(typeof err.response?.data === 'object'
          ? err.response.data
          : { message: err.message }),
      };
    }
  };
  