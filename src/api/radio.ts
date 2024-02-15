import zlRequest from './index'

// 获取电台分类
export function getRadioCategory() {
  return zlRequest.get({
    url: '/dj/catelist'
  })
}

// 根据type获取对应的电台
export function getRadioRecommend(type: any) {
  return zlRequest.get({
    url: '/dj/recommend/type',
    params: {
      type
    }
  })
}

// 根据id获取对应最热电台数据
export function getHotRadio(cateId: number, limit?: number, offset?: number) {
  return zlRequest.get({
    url: '/dj/radio/hot',
    params: {
      cateId,
      limit,
      offset
    }
  })
}
