import { memo } from 'react'

import { PlayerCommentWrapper } from './style'
import ZLThemeHeaderComment from '@/components/theme-header-comment'
import { RootState, useAppSelector } from '@/store/hook'
import ZLSongComment from '@/components/song-comment'
import ZLSongCommentList from '@/components/song-comment-list'

const ZLPlayerComment = memo(() => {
  // stat e& props

  // redux hooks
  const { songCommentList } = useAppSelector((state: RootState) => state.player)

  // other hooks

  // action

  return (
    <PlayerCommentWrapper>
      <ZLThemeHeaderComment info={songCommentList} />
      <ZLSongComment />
      <div className="wonderful-comment">
        <div className="comment-title">
          <h3 className="title">精彩评论</h3>
        </div>
        <ZLSongCommentList info={songCommentList.hotComments} />
      </div>
      <div className="new-comment">
        <div className="comment-title">
          <h3 className="title">最新评论</h3>
        </div>
        <ZLSongCommentList info={songCommentList.comments} />
      </div>
    </PlayerCommentWrapper>
  )
})

export default ZLPlayerComment
