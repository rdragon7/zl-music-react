import React, { memo } from 'react'

import { IProps } from './typings'
import { getSizeImage, getHotRecommendCount } from '@/utils/format-data'

import { SongCoverWrapper } from './style'

const ZLSongCover: React.FC<IProps> = memo(props => {
  // state & props
  const { info, right } = props

  return (
    <SongCoverWrapper $right={right}>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl || info.coverImgUrl, 140)} alt="" />
        <a href="/todo" className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon erji"></i>
              {getHotRecommendCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </a>
      </div>
      <div className="cover-bottom">
        <a href="/todo">{info.name}</a>
      </div>
    </SongCoverWrapper>
  )
})

export default ZLSongCover
