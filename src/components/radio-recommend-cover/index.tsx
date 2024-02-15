import { memo } from 'react'

import { IProps } from './typings'
import { getSizeImage } from '@/utils/format-data'

import { RadioRecommendCoverWrapper } from './style'

const ZLRadioRecommendCover: React.FC<IProps> = memo(props => {
  // state & props
  const { info } = props

  return (
    <RadioRecommendCoverWrapper>
      <a href="/#">
        <img src={getSizeImage(info.picUrl, 150)} alt="" />
      </a>
      <a href="/#" className="text-nowrap name">
        {info.name}
      </a>
      <p className="text-nowrap">{info.rcmdtext}</p>
    </RadioRecommendCoverWrapper>
  )
})

export default ZLRadioRecommendCover
