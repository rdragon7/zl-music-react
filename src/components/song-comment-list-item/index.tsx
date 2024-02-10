import { memo } from 'react'

import { IProps } from './typings'
import { formatDate, getSizeImage } from '@/utils/format-data'

import { SongCommentListItemWrapper } from './style'

const ZLSongCommentListItem: React.FC<IProps> = memo(props => {
  // state & props
  const { info } = props

  return (
    <SongCommentListItemWrapper>
      <div className="item-image">
        <a href="/todo">
          <img
            src={getSizeImage(info.user && info.user.avatarUrl, 50)}
            alt=""
          />
        </a>
      </div>
      <div className="item-info">
        <div className="info-top">
          <a href="/todo">{info.user.nickname}</a>
          <span>：{info.content}</span>
        </div>
        {/* TODO */}
        {/* {
          info && info.parentCommentId > 0 ?
          <div className="parent-comment">
            {
             rankingComment.comments.filter(item => console.log(info.parentCommentId === item.commentId)).map((iten,index) => {
               return (
                 <span>{iten.user.nickname}</span>
               )
             })
            }
          </div>
          : ""
        } */}
        <div className="info-bottom">
          <div className="info-time">
            {formatDate(info.time, 'yyyy年MM月dd日 hh:mm')}
          </div>
          <div className="info-dt">
            <a href="/todo">
              <i className="zan sprite_icon3"></i>
              <span>{info.likedCount > 0 ? `(${info.likedCount})` : ''}</span>
            </a>
            <span className="fen">|</span>
            <a href="/todo">回复</a>
          </div>
        </div>
      </div>
    </SongCommentListItemWrapper>
  )
})

export default ZLSongCommentListItem
