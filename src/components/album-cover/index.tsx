import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-data'
import { IProps } from './typings'

import { AlbumCoverWrapper } from './style'

const ZLAlbumCover: React.FC<IProps> = memo(props => {
  // state & props
  const { info, width = 153, size = 130, bgp = -845, ftSize = 100 } = props

  return (
    <AlbumCoverWrapper width={width} size={size} $bgp={bgp} $ftSize={ftSize}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt="" />
        <a href="/todo" className="cover sprite_cover">
          {info.name}
        </a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumCoverWrapper>
  )
})

export default ZLAlbumCover
