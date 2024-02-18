import zlRequest from './index'

export function sendCode(phone: any) {
  return zlRequest.put({
    url: '/captcha/sent',
    data: {
      phone
    }
  })
}

export function testCode(phone: any, captcha: any) {
  return zlRequest.put({
    url: '/captcha/verify',
    data: {
      phone,
      captcha
    }
  })
}
