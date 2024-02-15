import { memo } from 'react'

import { IProps } from './typings'
import { getSizeImage } from '@/utils/format-data'

import { RadioRankingCoverWrapper } from './style'

const ZLRadioRankingCover: React.FC<IProps> = memo(props => {
  // state & props
  const { info } = props

  return (
    <RadioRankingCoverWrapper>
      <a href="/todo">
        <img src={getSizeImage(info.picUrl, 120)} alt="" />
      </a>
      <div className="info">
        <h2 className="title">{info.name}</h2>
        <div className="nickname">
          <i className="sprite_icon2 left"></i>
          {info.dj.nickname}
        </div>
        <div className="count">
          <span className="phase">共{info.programCount}期</span>
          <span className="subscribe">订阅{info.subCount}次</span>
        </div>
      </div>
    </RadioRankingCoverWrapper>
  )
})

export default ZLRadioRankingCover
