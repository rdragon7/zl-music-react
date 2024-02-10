import { memo } from 'react'

import ZLSongCommentListItem from '@/components/song-comment-list-item'
import { IProps } from './typings'

import { SongCommentListWrapper } from './style'

const ZLSongCommentList: React.FC<IProps> = memo(props => {
  // state & props
  const { info } = props

  return (
    <SongCommentListWrapper>
      <div className="new-comment">
        <div className="new-list">
          {info && info.length !== 0 ? (
            info.map((item: any) => {
              return <ZLSongCommentListItem key={item.commentId} info={item} />
            })
          ) : (
            <h3 className="w-full text-center">暂无评论...</h3>
          )}
        </div>
      </div>
    </SongCommentListWrapper>
  )
})

export default ZLSongCommentList
