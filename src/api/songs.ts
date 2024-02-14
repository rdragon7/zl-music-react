import zlRequest from './index'

// 获取歌单分类数据
export function getSongCategory() {
  return zlRequest.get({
    url: '/playlist/catlist'
  })
}

// 根据分类获取歌曲列表
export function getSongByCategory(cat = '全部', limit = 35, offset = 0) {
  return zlRequest.get({
    url: '/top/playlist',
    params: {
      cat,
      limit,
      offset
    }
  })
}
