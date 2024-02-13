import zlRequest from './index'

// 获取榜单数据
export function getTopList() {
  return zlRequest.get({
    url: '/toplist'
  })
}

// 获取榜单详情
export function getPlayList(id: number) {
  return zlRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

// 获取歌单评论
export function getRankingComment(id: number, limit?: number, offset?: number) {
  return zlRequest.get({
    url: '/comment/playlist',
    params: {
      id,
      limit,
      offset
    }
  })
}
