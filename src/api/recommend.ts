import zlRequest from './index'

// 获取顶部轮播图数据
export function getTopBannerList() {
  return zlRequest.get({
    url: '/banner'
  })
}
