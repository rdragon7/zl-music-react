import {
  InternalAxiosRequestConfig,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'

export interface ZLRequestInterceptors {
  requestInterceptor?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface ZLRequestConfig extends AxiosRequestConfig {
  interceptors?: ZLRequestInterceptors
}
