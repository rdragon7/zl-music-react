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

// 获取当前歌曲歌词
export function getSongLyric(id: number) {
  return zlRequest.get({
    url: '/lyric',
    params: {
      id
    }
  })
}
