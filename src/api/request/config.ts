// 开发环境：development
// 生产环境：production
// 测试环境：test

let BASE_URL = ''
const TIMEOUT = 5000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://123.207.32.32:9001'
} else {
  BASE_URL = 'http://123.207.32.32:9001'
}

export { BASE_URL, TIMEOUT }
