import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

import type { ZLRequestInterceptors, ZLRequestConfig } from './types'

class ZLRequest {
  instance: AxiosInstance
  interceptors?: ZLRequestInterceptors
  constructor(config: ZLRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 每个实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 全局拦截器
    this.instance.interceptors.request.use(
      config => {
        return config
      },
      error => {
        return error
      }
    )
    this.instance.interceptors.response.use(
      config => {
        return config
      },
      error => {
        return error
      }
    )
  }

  request(config: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  get(config: AxiosRequestConfig) {
    return this.instance.request({ ...config, method: 'get' })
  }

  post(config: AxiosRequestConfig) {
    return this.instance.request({ ...config, method: 'post' })
  }

  put(config: AxiosRequestConfig) {
    return this.instance.request({ ...config, method: 'PUT' })
  }

  delete(config: AxiosRequestConfig) {
    return this.instance.request({ ...config, method: 'DELETE' })
  }
}

export default ZLRequest
