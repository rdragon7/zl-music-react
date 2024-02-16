import zlRequest from './index'

// 获取歌手数据
export function getArtistList(
  area: number,
  type: any,
  initial: any,
  limit = 100
) {
  return zlRequest.get({
    url: '/artist/list',
    params: {
      area,
      type,
      initial,
      limit
    }
  })
}
