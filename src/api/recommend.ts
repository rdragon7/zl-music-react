import zlRequest from './index'

// 获取顶部轮播图数据
export function getTopBannerList() {
  return zlRequest.get({
    url: '/banner'
  })
}

// 获取热门推荐列表数据
export function getHotRecommendList(limit: number) {
  return zlRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

// 获取新碟上架列表数据
export function getNewAlbumList() {
  return zlRequest.get({
    url: '/album/newest'
  })
}
