import ZLRequest from './request'
import { BASE_URL, TIMEOUT } from './request/config'

const zlRequest = new ZLRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: {
    abc: 'qqq'
  },
  interceptors: {
    requestInterceptor(config) {
      return config
    },
    requestInterceptorCatch(error) {
      return error
    },
    responseInterceptor(config) {
      return config
    },
    responseInterceptorCatch(error) {
      return error
    }
  }
})

export default zlRequest
