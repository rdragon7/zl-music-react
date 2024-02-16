import { Fragment, memo } from 'react'

import { IProps } from './typings'
import { getSizeImage } from '@/utils/format-data'

import { ArtistItemWrapper } from './style'

const ZLArtistItem: React.FC<IProps> = memo(props => {
  // state & props
  const { info, index } = props

  return (
    <ArtistItemWrapper>
      {index < 10 ? (
        <Fragment>
          <div className="image">
            <img src={getSizeImage(info.img1v1Url, 130)} alt="" />
          </div>
          <div className="info info1">
            <span className="name">{info.name}</span>
            <i className="sprite_icon2 icon"></i>
          </div>
        </Fragment>
      ) : (
        <div className="info info2">
          <span className="name">{info.name}</span>
          <i className="sprite_icon2 icon"></i>
        </div>
      )}
    </ArtistItemWrapper>
  )
})

export default ZLArtistItem
