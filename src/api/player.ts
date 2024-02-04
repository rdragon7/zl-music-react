import zlRequest from './index'

// 获取歌曲详情
export function getSongDetail(ids: number) {
  return zlRequest.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}
