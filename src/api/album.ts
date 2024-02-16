import zlRequest from './index'

// 获取热门新碟数据
export function getHotAlbum() {
  return zlRequest.get({
    url: '/album/newest'
  })
}

// 获取全部新碟数据
export function getAllAlbum(area = 'all', limit?: number, offset?: number) {
  return zlRequest.get({
    url: '/album/new',
    params: {
      area,
      limit,
      offset
    }
  })
}
