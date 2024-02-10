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

// 获取当前歌曲的评论
export function getSongComment(id: number, limit?: number, offset?: number) {
  return zlRequest.get({
    url: '/comment/music',
    params: {
      id,
      limit,
      offset
    }
  })
}

// 获取包含当前歌曲的歌单
export function getSimiPlaylist(id: number) {
  return zlRequest.get({
    url: '/simi/playlist',
    params: {
      id
    }
  })
}

// 获取当前歌曲的相似歌曲
export function getSimiSong(id: number) {
  return zlRequest.get({
    url: '/simi/song',
    params: {
      id
    }
  })
}
